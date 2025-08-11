'use client';

import React from 'react';
// import Header from '@/components/layout/header';
import Link from 'next/link';
import Header from '@/components/layout/header';

const Hero = () => {
    return (
        <div className="w-full bg-[url('/pic/heroMini.jpg')] bg-contain bg-[position:right_0.6rem] bg-no-repeat md:bg-[url('/pic/hero.jpg')] md:bg-cover md:bg-center">
            <Header />
            <div className="container mx-auto mt-[1.875rem] md:mt-14">
                <div className="flex w-full flex-col items-center md:w-[55.125rem] md:items-start">
                    <div className="flex flex-col">
                        <p className="mr-5 text-center text-base font-light uppercase leading-[150%] tracking-[0.06rem] text-[#CACACA] md:mr-0 md:text-start md:text-base md:tracking-[0.38rem]">
                            Сын Роналдо
                        </p>
                        <div className="mt-2 flex flex-row items-center gap-1.5 md:mt-5 md:gap-5">
                            <p className="text-nowrap text-[3.375rem] font-bold lowercase leading-[82%] -tracking-wider md:text-[8.125rem]">
                                Alonator 2000
                            </p>
                        </div>
                        <p className="text-[3.375rem] font-bold lowercase leading-[82%] -tracking-wider md:text-[8.125rem]">
                            <span className="-ml-2 text-[3rem] font-extralight text-[#31A301] md:text-[7.125rem]">
                                [
                            </span>
                            ULTRA pro max
                            <span className="text-[3rem] font-extralight text-[#31A301] md:text-[7.125rem]">
                                ]
                            </span>
                        </p>
                        <div className="-mt-1 ml-auto flex flex-row items-center md:ml-14">
                            <p className="text-[3.375rem] font-bold lowercase leading-[82%] -tracking-wider md:text-[8.125rem]"></p>
                            <p className="mt-5 hidden whitespace-pre-line text-xl font-normal md:ml-5 md:block md:text-4xl">
                                Что за тигр а это лев
                            </p>
                        </div>
                    </div>

                    <div className="mt-[10.125rem] flex w-fit min-w-[22.25rem] flex-col items-stretch gap-[1.125rem] md:ml-12 md:mt-[3.625rem] md:min-w-0 md:flex-row md:items-center md:gap-[1.875rem]">
                        <Link
                            href={'https://discord.gg/xuzXW5GE'}
                            className="rounded-md bg-[#31A301] py-8 text-center text-base font-medium text-[#091C01] transition-transform duration-300 ease-in-out hover:scale-[1.015] md:rounded-lg md:px-9 md:py-10 md:text-xl"
                        >
                            Discord
                        </Link>
                        <Link
                            href={'https://www.instagram.com/dohl1u/'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-white py-8 text-center text-base font-medium text-[#091C01] transition-transform duration-300 ease-in-out hover:scale-[1.015] md:rounded-lg md:px-[3.25rem] md:py-10 md:text-xl"
                        >
                            Спонсор сайта и главная мать сервера
                        </Link>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center tracking-wide md:ml-3 md:mt-[4.75rem] md:flex-row">
                    <div className="flex w-full flex-col md:w-fit md:flex-row">
                        {/* Step 1 */}
                        <div className="flex flex-col gap-3 pb-3 md:gap-5 md:pb-7 md:pt-[1.125rem]">
                            <p className="text-2xl font-medium md:text-xl">Скорость</p>
                            <div className="flex flex-row items-start gap-3.5 md:gap-5">
                                <p className="whitespace-pre-line text-base font-medium md:text-xl">
                                    Разгоняется до 17 лет за{' '}
                                    <span className="text-xl font-semibold text-white">
                                        {' '}
                                        5 секунд.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="ml-[3.625rem] mr-[4.5rem] hidden h-[10.625rem] w-px bg-white opacity-20 md:block"></div>

                        {/* Step 2 */}
                        <div className="-mr-6 flex flex-col gap-3 pb-3 md:mr-0 md:gap-5 md:pb-7 md:pt-[1.125rem]">
                            <p className="text-2xl font-medium md:text-xl">Мощь</p>
                            <div className="flex flex-row items-start gap-3.5 md:gap-5">
                                <p className="whitespace-pre-line text-base font-medium md:text-xl">
                                    Запас мемов — бесконечный.{' '}
                                    <span className="text-xl font-semibold text-white">
                                        Рофл в каждой фразе
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="mr-[4.5rem] hidden h-[10.625rem] w-px bg-white opacity-20 md:ml-[3.625rem] md:block"></div>

                        {/* Step 3 */}
                        <div className="hidden flex-col gap-3 pb-3 md:flex md:w-fit md:gap-5 md:pb-7 md:pt-[1.125rem]">
                            <p className="text-2xl font-medium md:text-xl">Эксклюзив</p>
                            <div className="flex flex-row items-start gap-3.5 md:gap-5">
                                <p className="whitespace-pre-line text-base font-medium md:text-xl">
                                    <span className="text-xl font-semibold text-white">
                                        Официальный
                                    </span>{' '}
                                    поставщик угара в нашей компании.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col gap-3 pb-3 md:hidden md:w-fit md:gap-5 md:pb-7 md:pt-[1.125rem]">
                        <p className="text-2xl font-medium md:ml-10 md:text-xl">Эксклюзив</p>
                        <div className="flex flex-row items-start gap-3.5 md:gap-5">
                            <p className="whitespace-pre-line text-base font-medium md:text-xl">
                                <span className="text-xl font-semibold text-white">
                                    Официальный
                                </span>{' '}
                                поставщик угара в нашей компании.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
