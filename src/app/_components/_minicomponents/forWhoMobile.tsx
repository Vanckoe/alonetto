'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import For1 from '@/assets/forwho/for1';
import Setting from '@/assets/forwho/settings';
import Location from '@/assets/forwho/location';
import Case from '@/assets/forwho/case';

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
        <div className="relative w-full max-w-[18.5rem] flex-none md:h-[26.875rem] md:w-1/4 md:max-w-[22.25rem]">
            <Image
                src={link}
                width={241}
                height={300}
                alt="wqdq"
                className="h-[35rem] w-[75rem] rounded-2xl"
            />
        </div>
    );
};

const ForWhoMobile: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    );
    const [index, setIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    useEffect(() => {
        const updateScreen = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setVisibleCount(mobile ? 1 : 4);
            if (!mobile) setIndex(0);
        };

        updateScreen();
        window.addEventListener('resize', updateScreen);
        return () => window.removeEventListener('resize', updateScreen);
    }, []);

    const maxIndex = Math.max(cards.length - visibleCount, 0);
    const translatePercent = useMemo(() => {
        const percent = isMobile ? 100 : (100 / cards.length) * visibleCount;
        return -index * percent;
    }, [index, isMobile, visibleCount]);

    const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
    const prev = () => setIndex((i) => Math.max(i - 1, 0));

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        setTouchStart(e.touches[0].clientX);
    };
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.touches[0].clientX);
    };
    const handleTouchEndEvent = () => {
        if (touchStart !== null && touchEnd !== null) {
            const distance = touchStart - touchEnd;
            if (distance > minSwipeDistance) next();
            else if (distance < -minSwipeDistance) prev();
        }
    };

    return (
        <>
            {/* Заголовок и описание скрыты на md */}
            <div className="container mx-auto mt-[6.125rem] flex flex-col md:mt-[16.125rem] md:hidden">
                <div className="mb-[3.375rem] flex flex-col md:flex-row md:items-center">
                    <p className="order-1 text-[2.75rem] font-bold lowercase leading-[94%] md:text-[4rem]">
                        лучший деп за нашу жизнь (окуп){' '}
                    </p>
                    <div className="order-2 mt-[1.625rem] flex w-2/3 flex-row gap-3 md:flex-col md:pl-[5.625rem]">
                        <p className="text-base font-light leading-[163%] text-[#979797]">
                            чтоб мы без тебя делали?{' '}
                            <span className="font-medium text-white">да много че в целом.</span> но
                            это не то
                        </p>
                    </div>
                </div>
            </div>

            {/* Слайдер карточек */}
            <div
                className="overflow-hidden px-10 md:hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEndEvent}
            >
                <div
                    className="flex gap-8 transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(${translatePercent}%)`,
                        width: `${(cards.length / visibleCount) * 9.9}%`,
                    }}
                >
                    {cards.map((card) => (
                        <Card key={card.number} {...card} />
                    ))}
                </div>
            </div>

            {/* Кнопки навигации */}
            <div className="container mx-auto md:hidden">
                <div className="mx-auto mt-[2.875rem] flex w-fit items-stretch gap-2 rounded-xl border border-[#191919] p-2">
                    <button
                        onClick={prev}
                        disabled={index === 0}
                        className={`rounded-lg px-[3.125rem] py-[1.125rem] transition-opacity ${
                            index === 0 ? 'cursor-not-allowed' : 'bg-[#31A301]'
                        }`}
                    >
                        <p
                            className={`text-[1.625rem] font-bold leading-[84%] ${
                                index === 0 ? 'text-[#31A301]' : 'text-white'
                            }`}
                        >
                            {'<'}
                        </p>
                    </button>
                    <div className="h-[3.25rem] w-0 border border-[#191919]" />
                    <button
                        onClick={next}
                        disabled={index === maxIndex}
                        className={`rounded-lg px-[3.125rem] py-[1.125rem] transition-opacity ${
                            index === maxIndex ? 'cursor-not-allowed' : 'bg-[#31A301]'
                        }`}
                    >
                        <p
                            className={`text-[1.625rem] font-bold leading-[84%] ${
                                index === maxIndex ? 'text-[#31A301]' : 'text-white'
                            }`}
                        >
                            {'>'}
                        </p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ForWhoMobile;
