'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header';

export default function Hero() {
    return (
        <div className="relative w-full overflow-hidden bg-[#181818] text-white">
            {/* Фон */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 hidden bg-[url('/pic/hero.jpg')] bg-cover bg-center opacity-70 md:block" />
                <div className="absolute inset-0 bg-[url('/pic/heroMini.jpg')] bg-contain bg-right-top bg-no-repeat md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/50 to-transparent" />
            </div>

            {/* Контент */}
            <div className="relative z-10">
                <Header />

                <div className="container mx-auto flex min-h-[85vh] flex-col justify-center pt-16 md:pt-32">
                    {/* Заголовки */}
                    <div className="max-w-4xl">
                        <p className="text-base uppercase tracking-[0.3em] text-[#CACACA]">
                            Сын Роналдо
                        </p>
                        <h1 className="mt-4 text-[3rem] font-bold leading-[0.9] md:text-[7rem]">
                            Alonator 2000
                        </h1>
                        <h2 className="mt-2 text-[2.5rem] font-light text-[#31A301] md:text-[5.5rem]">
                            [ ULTRA pro max ]
                        </h2>
                        <p className="mt-6 text-lg text-gray-300 md:text-2xl">
                            Что за тигр, а это лев.
                        </p>
                    </div>

                    {/* Кнопки */}
                    <div className="mt-10 flex flex-col gap-4 md:flex-row">
                        <Link
                            href="https://discord.gg/xuzXW5GE"
                            className="rounded-lg bg-[#31A301] px-10 py-5 text-center text-lg font-medium text-black shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            Discord
                        </Link>
                        {/* <Link
                            href="https://www.instagram.com/dohl1u/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-white px-10 py-5 text-center text-lg font-medium text-black shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            Спонсор сайта и главная мать сервера
                        </Link> */}
                    </div>

                    {/* Фичи */}
                    <div className="mt-20 grid gap-8 md:grid-cols-3 md:gap-12">
                        <div>
                            <h3 className="text-xl font-semibold">Скорость</h3>
                            <p className="mt-2 text-gray-300">
                                Разгоняется до 17 лет за{' '}
                                <span className="font-bold text-white">5 секунд</span>.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Мощь</h3>
                            <p className="mt-2 text-gray-300">
                                Запас мемов — бесконечный.{' '}
                                <span className="font-bold text-white">Рофл в каждой фразе</span>.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Эксклюзив</h3>
                            <p className="mt-2 text-gray-300">
                                <span className="font-bold text-white">Официальный</span> поставщик
                                угара в нашей компании.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
