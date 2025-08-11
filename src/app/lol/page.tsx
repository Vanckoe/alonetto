// app/lol/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LolPage() {
    const router = useRouter();
    const [seconds, setSeconds] = useState(10);
    const [stopRedirect, setStopRedirect] = useState(false);

    useEffect(() => {
        if (stopRedirect) return;
        if (seconds <= 0) {
            router.push('/');
            return;
        }
        const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
        return () => clearTimeout(id);
    }, [seconds, stopRedirect, router]);

    return (
        <main className="relative min-h-screen bg-black text-white">
            {/* мягкие «глоу»-фоны */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,#31A30155_0%,transparent_70%),radial-gradient(40%_30%_at_90%_100%,#ffffff1a_0%,transparent_65%)]" />
            <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4">
                <section className="w-full">
                    <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
                                restricted area
                                <span className="h-1 w-1 rounded-full bg-[#31A301]" />
                            </span>
                            <span className="text-base text-white/50">
                                auto-redirect: {seconds}s
                            </span>
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                            Эй, герой, не туда свернул.
                        </h1>
                        <p className="mt-4 text-white/80 md:text-lg">
                            Здесь ничего интересного. Сайт про <b>праздник и угар</b>, а не про то,
                            о чём ты подумал.
                            <br className="hidden md:block" />
                            Совет дня:{' '}
                            <i>если тебе это действительно нужно то посмотри в зеркало.</i>
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <button
                                onClick={() => router.push('/')}
                                className="inline-flex items-center justify-center rounded-xl bg-[#31A301] px-6 py-3 text-sm font-semibold text-[#091C01] transition-transform hover:scale-[1.02]"
                            >
                                Вернуться на главную
                            </button>

                            <button
                                onClick={() => setStopRedirect((v) => !v)}
                                className={`inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 ${
                                    stopRedirect ? 'ring-1 ring-[#31A301]/60' : ''
                                }`}
                            >
                                {stopRedirect
                                    ? 'Остаться тут (таймер остановлен)'
                                    : 'Остаться на странице'}
                            </button>
                        </div>

                        {/* микро-подпись снизу */}
                        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/60">
                            <p>
                                Сообщение дня:{' '}
                                <span className="text-white">«рукоблуд, шуруй отсюда»</span>.
                                <span className="ml-2 hidden md:inline">
                                    Без обид — мы бережём вайб вечеринки 😎
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* низ страницы: «тикер» с подколами */}
                    <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                        <div className="animate-marquee flex whitespace-nowrap py-3 text-xs uppercase tracking-[0.3em] text-white/70">
                            <span className="mx-6">stay classy</span>
                            <span className="mx-6">party mode only</span>
                            <span className="mx-6">go back to fun</span>
                            <span className="mx-6">no cringe allowed</span>
                            <span className="mx-6">stay classy</span>
                            <span className="mx-6">party mode only</span>
                            <span className="mx-6">go back to fun</span>
                            <span className="mx-6">no cringe allowed</span>
                        </div>
                    </div>
                </section>
            </div>

            {/* локальные стили */}
            <style jsx>{`
                .animate-marquee {
                    animation: marquee 18s linear infinite;
                }
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </main>
    );
}
