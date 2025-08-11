/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Micsher from '@/assets/icons/micsher';
import For1 from '@/assets/forwho/for1';
import Setting from '@/assets/forwho/settings';
import Location from '@/assets/forwho/location';
import Case from '@/assets/forwho/case';
import Image from 'next/image';
import ForWhoMobile from './_minicomponents/forWhoMobile';
import { link } from 'fs';

const cards = [
    {
        number: '01',
        text: 'card1',
        Icon: For1,
        link: '/pic/carusel/1.jpg',
    },
    {
        number: '02',
        text: 'card2',
        Icon: Setting,
        link: '/pic/carusel/8.jpg',
    },
    {
        number: '03',
        text: 'card3',
        link: '/pic/carusel/7.jpg',
        Icon: Location,
    },
    {
        number: '04',
        link: '/pic/carusel/6.jpg',
        text: 'card4',
        Icon: Case,
    },
    {
        number: '05',
        link: '/pic/carusel/5.jpg',
        text: 'card1',
        Icon: For1,
    },
    {
        number: '06',
        link: '/pic/carusel/4.jpg',
        text: 'card2',
        Icon: Setting,
    },
    {
        number: '07',
        link: '/pic/carusel/3.jpg',
        text: 'card3',
        Icon: Location,
    },
    {
        number: '08',
        link: '/pic/carusel/2.jpg',
        text: 'card4',
        Icon: Case,
    },
] as const;

type Card = {
    number: string;
    text: string;
    link: string;
    Icon: React.ComponentType<{ width: string }>;
};

const Card = ({ link }: Card) => {
    return (
        <div className="relative w-full max-w-80 flex-none md:w-1/4 md:max-w-[22.25rem]">
            <Image
                src={link}
                width={241}
                height={300}
                alt="wqdq"
                className="h-[35rem] w-[25rem] rounded-2xl"
            />
        </div>
    );
};

const ForWho = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    );
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const updateScreenState = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setVisibleCount(mobile ? 1 : 4);
        };
        updateScreenState();
        window.addEventListener('resize', updateScreenState);
        return () => window.removeEventListener('resize', updateScreenState);
    }, []);

    const maxIndex = Math.max(cards.length - visibleCount, 0);

    const translateMobile = useMemo(() => {
        const slideWidthPercent = 100;
        return `translateX(-${index * slideWidthPercent}%)`;
    }, [index]);

    const translateDesktop = useMemo(() => {
        const slideWidthPercent = 30 / cards.length;
        return `translateX(-${index * slideWidthPercent * visibleCount}%)`;
    }, [index, visibleCount]);

    const translate = isMobile ? translateMobile : translateDesktop;

    const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
    const prev = () => setIndex((i) => Math.max(i - 1, 0));

    return (
        <>
            <div className="container mx-auto mt-[6.125rem] hidden flex-col md:mt-[16.125rem] md:flex">
                <div className="mb-[3.375rem] flex flex-col md:mb-20 md:flex-row md:items-center">
                    <p className="order-1 w-fit text-[2.75rem] font-bold lowercase leading-[94%] md:text-[4rem]">
                        лучший деп за нашу жизнь (окуп)
                    </p>
                    <div className="order-2 mt-[1.625rem] flex flex-row gap-3 md:mt-0 md:max-w-72 md:flex-col md:pl-[5.625rem]">
                        <p className="text-xs font-light leading-[163%] text-[#979797]">
                            чтобы мы без тебя делали?{' '}
                            <span className="font-medium text-white">да много че в целом.</span> но
                            это не то
                        </p>
                    </div>

                    {/* Кнопки для desktop */}
                    <div className="order-3 ml-auto hidden flex-row items-stretch gap-4 rounded-xl border border-[#191919] p-3.5 md:flex">
                        <button
                            onClick={prev}
                            disabled={index === 0}
                            className={`rounded-lg px-20 py-[1.875rem] transition-opacity ${
                                index === 0 ? 'cursor-not-allowed' : 'bg-[#31A301]'
                            }`}
                        >
                            <p
                                className={`text-[1.625rem] font-bold leading-[84%] ${
                                    index === 0 ? 'text-[#31A301]' : 'text-white'
                                }`}
                            >
                                {`<`}
                            </p>

                            {/* <Right color={index === 0 ? '#31A301' : '#FFFFFF'} /> */}
                        </button>
                        <div className="h-20 w-0 border border-[#191919]" />
                        <button
                            onClick={next}
                            disabled={index === maxIndex}
                            className={`rounded-lg px-20 py-[1.875rem] transition-opacity ${
                                index === maxIndex ? 'cursor-not-allowed' : 'bg-[#31A301]'
                            }`}
                        >
                            <p
                                className={`text-[1.625rem] font-bold leading-[84%] ${
                                    index === maxIndex ? 'text-[#31A301]' : 'text-white'
                                }`}
                            >
                                {`>`}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            {/* Слайдер карточек */}
            <div className="hidden overflow-hidden px-[13.25rem] md:block md:overflow-auto md:pb-20">
                <div
                    className="flex gap-8 transition-transform duration-500 ease-out"
                    style={{
                        transform: translate,
                        width: `${(cards.length / visibleCount) * 100}%`,
                    }}
                >
                    {cards.map((card) => (
                        <Card key={card.number} {...card} />
                    ))}
                </div>
            </div>
            <ForWhoMobile />
        </>
    );
};

export default ForWho;
