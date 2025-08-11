'use client';

import Link from 'next/link';

export default function PosterV16() {
    return (
        <section className="relative overflow-visible py-16 md:py-24">
            {/* фон */}
            <div className="pointer-events-none absolute -top-64 left-20 size-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#31A301_0%,transparent_60%)] blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-[#31A301]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />

            <div className="container relative mx-auto">
                {/* верхний бейдж/линк */}
                <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                        fake news • special poster
                        <span className="h-1 w-1 rounded-full bg-[#31A301]" />
                    </span>
                    <span className="hidden text-xs text-white/60 md:block">
                        пресс-релиз: 13.08 • версия 17.0
                    </span>
                </div>

                {/* главный блок */}
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 p-6 backdrop-blur md:p-12">
                    {/* гигантский водяной знак */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <span className="select-none text-[26rem] font-black leading-none text-white/5 md:text-[38rem]">
                            v16
                        </span>
                    </div>

                    {/* контент */}
                    <div className="relative z-[1] grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-white/60 md:text-sm">
                                one-man concert • official launch
                            </p>

                            <h1 className="mt-3 text-5xl font-black leading-[0.9] text-white drop-shadow md:text-8xl">
                                Большой релиз
                                <span className="block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    ALONATOR&nbsp;v17
                                </span>
                            </h1>

                            <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
                                Сольный вечер мемов, историй и любимых треков. Никаких правил —
                                только хороший вайб и громкие аплодисменты.
                            </p>

                            {/* CTA */}
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <Link
                                    href="#tickets"
                                    className="inline-flex items-center justify-center rounded-xl bg-[#31A301] px-6 py-3 text-sm font-semibold text-[#091C01] transition-transform hover:scale-[1.015]"
                                >
                                    получить «билет»
                                </Link>
                                <Link
                                    href="#soundpad"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    запустить саундпад
                                </Link>
                            </div>
                        </div>

                        {/* детали */}
                        <div className="grid content-start gap-4">
                            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white">
                                <div className="mb-2 text-xs uppercase tracking-[0.25em] text-white/60">
                                    когда и где
                                </div>
                                <div className="text-3xl font-bold leading-tight md:text-4xl">
                                    13 августа • 20:00
                                </div>
                                <div className="mt-1 text-white/70">домашняя сцена, ряд первый</div>
                            </div>

                            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white">
                                <div className="mb-2 text-xs uppercase tracking-[0.25em] text-white/60">
                                    в программе
                                </div>
                                <ul className="list-disc space-y-1 pl-5 text-white/80">
                                    <li>лучшие моменты за год</li>
                                    <li>премьера свежих мемов</li>
                                    <li>feat: друзья &amp; сюрпризы</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* бегущая строка */}
                    <div className="relative z-[1] mt-8 overflow-hidden rounded-xl border border-white/15">
                        <div className="animate-marquee flex whitespace-nowrap py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                            <span className="mx-6">release v16</span>
                            <span className="mx-6">one-man concert</span>
                            <span className="mx-6">limited seats</span>
                            <span className="mx-6">friends only</span>
                            <span className="mx-6">release v16</span>
                            <span className="mx-6">one-man concert</span>
                            <span className="mx-6">limited seats</span>
                            <span className="mx-6">friends only</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* локальные стили: marquee */}
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
        </section>
    );
}
