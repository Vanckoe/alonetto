'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
    src: string; // путь к треку, например: '/audio/fav.mp3'
    title?: string; // название трека
};

export default function SoundPad({ src = '/alone.mp3', title = 'Favorite Track' }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const rafRef = useRef<number | null>(null);

    const [ready, setReady] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [loop, setLoop] = useState(false);
    const [duration, setDuration] = useState(0);
    const [current, setCurrent] = useState(0);
    const [volume, setVolume] = useState(0.9);

    // Создаём <audio> один раз
    useEffect(() => {
        const a = new Audio(src);
        a.preload = 'metadata';
        a.loop = loop;
        a.volume = volume;

        const onLoaded = () => {
            setDuration(a.duration || 0);
            setReady(true);
        };
        const onEnd = () => {
            setPlaying(false);
            if (!a.loop) setCurrent(0);
        };

        a.addEventListener('loadedmetadata', onLoaded);
        a.addEventListener('ended', onEnd);
        audioRef.current = a;

        return () => {
            a.pause();
            a.removeEventListener('loadedmetadata', onLoaded);
            a.removeEventListener('ended', onEnd);
            audioRef.current = null;
        };
    }, [src]);

    // Обновляем loop/volume на самом аудио
    useEffect(() => {
        if (audioRef.current) audioRef.current.loop = loop;
    }, [loop]);
    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = volume;
    }, [volume]);

    // Анимационный фрейм для прогресса
    useEffect(() => {
        const tick = () => {
            if (audioRef.current && !audioRef.current.paused) {
                setCurrent(audioRef.current.currentTime);
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const togglePlay = async () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setPlaying(true);
            } catch {
                // iOS может запретить авто-плей без тапа
            }
        }
    };

    const format = (t: number) => {
        if (!isFinite(t)) return '0:00';
        const m = Math.floor(t / 60);
        const s = Math.floor(t % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const progress = useMemo(
        () => (duration ? (current / duration) * 100 : 0),
        [current, duration],
    );

    const onSeek = (v: number) => {
        if (!audioRef.current) return;
        const t = (v / 100) * (duration || 0);
        audioRef.current.currentTime = t;
        setCurrent(t);
    };

    // Горячие клавиши
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (['Space', 'KeyK'].includes(e.code)) {
                e.preventDefault();
                togglePlay();
            } else if (e.code === 'KeyL') {
                setLoop((l) => !l);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [playing, duration]);

    return (
        <section id="soundpad" className="py-12 md:py-10">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs uppercase tracking-widest text-gray-500">
                        Soundpad
                        <span className="size-1 rounded-full bg-[#31A301]" />
                    </div>
                    <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                        {title} <span className="text-[#31A301]">[play]</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-gray-500">
                        Нажми на пэд, чтобы запустить трек. Space/K — play/pause, L — loop.
                    </p>
                </div>

                {/* Pad */}
                <div className="mx-auto max-w-2xl">
                    <button
                        onClick={togglePlay}
                        disabled={!ready}
                        aria-label={playing ? 'Pause' : 'Play'}
                        className={`group relative grid h-56 w-full place-items-center rounded-3xl border ${playing ? 'border-[#31A301] bg-[#31A301]/10' : 'border-black/10 bg-white'} shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.995]`}
                    >
                        {/* Псевдо-«волны» */}
                        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                            <div
                                className={`absolute -inset-x-6 -bottom-12 h-36 rounded-[4rem] blur-3xl transition-opacity duration-300 ${playing ? 'bg-[#31A301]/40 opacity-100' : 'opacity-0'}`}
                            />
                        </div>

                        <div className="text-center">
                            <div className="mx-auto mb-3 grid size-14 place-items-center rounded-2xl border border-black/10 bg-white bg-[url('/pic/soundpad.jpg')] bg-contain">
                                {playing ? (
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-white"
                                    >
                                        <rect x="6" y="5" width="4" height="14" rx="1" />
                                        <rect x="14" y="5" width="4" height="14" rx="1" />
                                    </svg>
                                ) : (
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-white"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </div>
                            <div className="text-sm text-gray-500">
                                {ready
                                    ? playing
                                        ? 'Играет…'
                                        : 'Нажми, чтобы играть'
                                    : 'Загружается…'}
                            </div>
                        </div>
                    </button>

                    {/* Transport */}
                    <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                        {/* Progress */}
                        <div className="mb-3 flex items-center gap-3">
                            <span className="w-12 text-sm tabular-nums text-gray-500">
                                {format(current)}
                            </span>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                step={0.1}
                                value={progress}
                                onChange={(e) => onSeek(Number(e.target.value))}
                                className="range-input w-full"
                                aria-label="Progress"
                            />
                            <span className="w-12 text-right text-sm tabular-nums text-gray-500">
                                {format(duration)}
                            </span>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={togglePlay}
                                    className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-50"
                                >
                                    {playing ? 'Pause' : 'Play'}
                                </button>
                                <button
                                    onClick={() => setLoop((l) => !l)}
                                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${loop ? 'bg-[#31A301] text-[#091C01]' : 'border border-black/10 bg-white text-black hover:bg-gray-50'}`}
                                >
                                    Loop {loop ? 'On' : 'Off'}
                                </button>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Vol</span>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    value={volume}
                                    onChange={(e) => setVolume(Number(e.target.value))}
                                    aria-label="Volume"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* стили для input range (минимально, Tailwind совместимо) */}
            <style jsx>{`
                .range-input {
                    -webkit-appearance: none;
                    appearance: none;
                    height: 6px;
                    border-radius: 9999px;
                    background: linear-gradient(90deg, #31a301 ${progress}%, #e5e7eb ${progress}%);
                    outline: none;
                }
                .range-input::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    border-radius: 9999px;
                    background: #111;
                    border: 2px solid white;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                    margin-top: -6px;
                }
                .range-input::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    border-radius: 9999px;
                    background: #111;
                    border: 2px solid white;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                }
            `}</style>
        </section>
    );
}
