'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FakeNewsBlock() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto text-black">
                {/* Газетная рамка */}
                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                    {/* Мастхед */}
                    <div className="border-b border-black/10 bg-neutral-50 px-6 py-4 md:px-10">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                            <h3 className="font-serif text-2xl font-black tracking-wide md:text-3xl">
                                THE <span className="text-[#31A301]">ALONATOR</span> TIMES
                            </h3>
                            <div className="flex items-center gap-4 text-xs text-neutral-700 md:text-sm">
                                <span>Издание №2000</span>
                                <span className="hidden md:inline">Четверг • 20:16</span>
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#31A301]" />
                                    SPECIAL REPORT
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Шапка статьи */}
                    <div className="px-6 pb-6 pt-8 md:px-10 md:pt-10">
                        <p className="font-serif text-sm uppercase tracking-[0.25em] text-neutral-600">
                            экстренный выпуск • подтверждено очевидцами с места событий
                        </p>
                        <h1 className="mt-2 font-serif text-4xl font-extrabold leading-[1.05] md:text-6xl">
                            Алонатор 2000 официально признан&nbsp;фактором&nbsp;непредсказуемости
                        </h1>
                        <p className="mt-3 max-w-3xl font-serif text-lg text-neutral-800 md:text-xl">
                            После его появления у магазина «Светлана» три подъезда переименовали в
                            его честь, а во дворе ввели режим повышенного веселья.
                        </p>

                        {/* Автор/даталайн */}
                        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-700 md:text-sm">
                            <span>Автор: Редакция «Ultra Daily»</span>
                            <span className="hidden md:inline">•</span>
                            <span>Локация: Дворовая Арена им. Шрека Второго</span>
                        </div>
                    </div>

                    {/* Фото + подпись */}
                    <figure className="overflow-hidden">
                        <div className="relative h-[240px] w-full md:h-[420px]">
                            <Image
                                src="/pic/hero.jpg" // замени на своё фото
                                alt="Алонатор 2000 на импровизированной сцене"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <figcaption className="px-6 py-2 text-xs text-neutral-700 md:px-10">
                            На фото: момент, когда голубь задумался о смысле полётов и остался на
                            лавочке.
                        </figcaption>
                    </figure>

                    {/* Тело статьи */}
                    <div className="grid gap-8 px-6 pb-8 md:grid-cols-3 md:gap-10 md:px-10">
                        {/* Колонки текста */}
                        <article className="md:col-span-2">
                            <p className="mb-4 font-serif text-[1.05rem] leading-7 text-neutral-900 first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8]">
                                Свидетели утверждают: Алонатор зашёл «на минутку», но реальность в
                                радиусе двора стала ощущаться заметно веселее. По предварительным
                                данным, спонтанный апгрейд настроения населения произошёл без
                                вмешательства сторонних сил.
                            </p>
                            <p className="mb-4 font-serif text-[1.05rem] leading-7 text-neutral-900">
                                «Сначала он улыбнулся, потом поздоровался со всеми по именам — и
                                понеслось», — рассказала местная жительница. В буфете зафиксирован
                                внезапный дефицит доширака и соуса; охрана официально ничего не
                                комментирует, но кивает с уважением.
                            </p>
                            <p className="mb-4 font-serif text-[1.05rem] leading-7 text-neutral-900">
                                Эксперты называют происходящее «масштабным культурным явлением
                                дворового уровня». В ближайшее время ожидаются гастроли по маршруту:
                                двор → парк → кухня → снова двор.
                            </p>

                            {/* Редакционный модуль */}
                            <div className="mt-6 rounded-lg border border-black/10 bg-neutral-50 px-4 py-3">
                                <p className="font-serif text-sm text-neutral-800">
                                    Подробности — в разделе{' '}
                                    <Link
                                        href="#poster"
                                        className="underline decoration-[#31A301] underline-offset-2 hover:text-[#31A301]"
                                    >
                                        Большой релиз v16
                                    </Link>
                                    . А чтобы прочувствовать атмосферу — включайте{' '}
                                    <Link
                                        href="#soundpad"
                                        className="underline decoration-[#31A301] underline-offset-2 hover:text-[#31A301]"
                                    >
                                        Саундпад
                                    </Link>
                                    .
                                </p>
                            </div>
                        </article>

                        {/* Боковая колонка */}
                        <aside className="space-y-4">
                            <div className="rounded-xl border border-black/10 bg-white p-4">
                                <h4 className="font-serif text-lg font-bold">Факты дня</h4>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-800">
                                    <li>
                                        Свидетелей события: <b>много</b>
                                    </li>
                                    <li>
                                        Сторис загружено: <b>128+</b>
                                    </li>
                                    <li>
                                        Доширака не осталось: <b>да</b>
                                    </li>
                                </ul>
                            </div>

                            <blockquote className="rounded-xl border border-black/10 bg-neutral-50 p-4">
                                <p className="font-serif text-lg italic leading-snug">
                                    «Это не человек — это явление. Мы, возможно, не готовы».
                                </p>
                                <footer className="mt-2 text-xs text-neutral-600">
                                    — Комитет по общественной радости
                                </footer>
                            </blockquote>

                            <div className="rounded-xl border border-black/10 bg-white p-4">
                                <h4 className="font-serif text-lg font-bold">
                                    Как распознать Алонатора
                                </h4>
                                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-neutral-800">
                                    <li>Рядом внезапно становится теплее и веселее</li>
                                    <li>У голубей появляются экзистенциальные вопросы</li>
                                    <li>Ты вспоминаешь слова гимна из «Шрек 2»</li>
                                </ol>
                            </div>
                        </aside>
                    </div>

                    {/* Лента новостей */}
                    <div className="relative overflow-hidden border-t border-black/10 bg-neutral-50">
                        <div className="animate-marquee flex whitespace-nowrap py-3 text-xs tracking-[0.25em] text-neutral-800">
                            <span className="mx-6">breaking: введён режим повышенного веселья</span>
                            <span className="mx-6">update: переименованы три подъезда</span>
                            <span className="mx-6">live: буфет сообщает о дефиците соуса</span>
                            <span className="mx-6">opinion: «это явление, а не человек»</span>
                            <span className="mx-6">breaking: введён режим повышенного веселья</span>
                            <span className="mx-6">update: переименованы три подъезда</span>
                            <span className="mx-6">live: буфет сообщает о дефиците соуса</span>
                            <span className="mx-6">opinion: «это явление, а не человек»</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* локальные стили для marquee */}
            <style jsx>{`
                .animate-marquee {
                    animation: marquee 22s linear infinite;
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
