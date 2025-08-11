'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BurgerMenu from './burder';
import Right from '@/assets/icons/right';

const Header = () => {
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const thresholdPx = 40 * rootFontSize;

        const onScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (window.innerWidth <= 768) {
                setIsSticky(scrollY > thresholdPx);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const isActive = (href: string) => {
        return pathname.endsWith(href);
    };

    const baseClass =
        'container mx-auto flex flex-row items-center justify-between pt-10 md:pt-[3.75rem] transition-all duration-300';

    const stickyClass =
        'fixed top-0 left-0 right-0 bg-black/80 pb-5 backdrop-blur-sm z-[99] shadow-md transform transition-transform duration-300 ease-in-out';

    return (
        <>
            <div
                className={`${isSticky ? stickyClass : ''} transition-transform duration-500 ease-in-out`}
            >
                <div className={baseClass}>
                    <Image
                        src={'/pic/logo.jpg'}
                        width={163}
                        height={78}
                        alt="logo"
                        className="size-[3.75rem] min-w-[3.75rem] rounded-3xl object-fill md:size-[5.1875rem] md:min-h-[5.1875rem] md:min-w-[5.1875rem]"
                    />
                    <div className="relative hidden flex-row items-center text-base font-medium md:flex">
                        <Link
                            href={`/`}
                            className={`px-6 py-4 text-black ${
                                isActive(`/`)
                                    ? 'font-semibold opacity-100'
                                    : 'opacity-30 hover:opacity-100'
                            }`}
                        >
                            Имитация
                        </Link>
                        <Link
                            href={`/consultation`}
                            className={`px-6 py-4 text-black ${
                                isActive(`/consultation`)
                                    ? 'font-semibold opacity-100'
                                    : 'opacity-30 hover:opacity-100'
                            }`}
                        >
                            крутого
                        </Link>

                        <div className="group relative hidden md:block">
                            <Link
                                href={`/blog`}
                                className={`group flex flex-row items-center gap-1.5 px-6 py-4 text-center text-black ${
                                    pathname.startsWith(`/blog`)
                                        ? 'font-semibold opacity-100'
                                        : 'opacity-30 hover:opacity-100'
                                }`}
                            >
                                сайта
                                <div className="rotate-90 transition-transform duration-500 ease-in-out group-hover:-rotate-90">
                                    <Right color="#FFFFFF" width="0.5rem" />
                                </div>
                            </Link>

                            <div className="absolute left-12 top-[80%] mt-3 hidden w-max grid-cols-1 gap-0.5 bg-white px-5 py-3 group-hover:grid">
                                <div className="absolute -left-2 -top-2 size-4 -rotate-45 bg-white [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]" />

                                <Link
                                    href={`/blog/all`}
                                    className={`py-2 text-sm text-black ${
                                        isActive(`/blog/all`)
                                            ? 'font-semibold opacity-100'
                                            : 'opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    ебало
                                </Link>
                                <div className="h-px w-full bg-black/10"></div>
                                <Link
                                    href={`/blog/ppc`}
                                    className={`py-2 text-sm text-black ${
                                        isActive(`/blog/ppc`)
                                            ? 'font-semibold opacity-100'
                                            : 'opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    опусти
                                </Link>
                                <div className="h-px w-full bg-black/10"></div>
                                <Link
                                    href={`/blog/experts`}
                                    className={`py-2 text-sm text-black ${
                                        isActive(`/blog/experts`)
                                            ? 'font-semibold opacity-100'
                                            : 'opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    любопытный
                                </Link>
                                <div className="h-px w-full bg-black/10"></div>
                                <Link
                                    href={`/blog/seo`}
                                    className={`py-2 text-sm text-black ${
                                        isActive(`/blog/seo`)
                                            ? 'font-semibold opacity-100'
                                            : 'opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    текст
                                </Link>
                            </div>
                        </div>

                        <Link
                            href={`/contacts`}
                            className={`px-6 py-4 text-black ${
                                isActive(`/contacts`)
                                    ? 'font-semibold opacity-100'
                                    : 'opacity-30 hover:opacity-100'
                            }`}
                        >
                            лмао
                        </Link>
                    </div>

                    <div className="flex flex-row items-center gap-3.5 md:items-stretch">
                        <BurgerMenu />
                    </div>
                </div>
            </div>

            {isSticky && <div className="h-20 md:hidden" />}
        </>
    );
};

export default Header;
