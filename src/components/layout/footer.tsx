'use client';

import React from 'react';
import Image from 'next/image';
import Facebook from '@/assets/icons/facebook';
import Instagram from '@/assets/icons/instagram';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="container mx-auto mb-[4.75rem] mt-[5.625rem] bg-[url('/bg/developmentMini.png')] bg-contain bg-[position:right_17rem] bg-no-repeat md:my-[10.75rem] md:bg-none">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col">
                    <Link href={'/'}>
                        <Image
                            src={'/icons/logo.png'}
                            width={194}
                            height={98}
                            alt="logo"
                            className="w-[11.375rem] min-w-[11.375rem] md:w-[12.125rem] md:min-w-[12.125rem]"
                        />
                    </Link>
                    <p className="mb-3.5 mt-5 text-lg font-normal md:mb-4 md:text-xl">ewfwe</p>
                    <p className="mb-9 text-lg font-normal md:mb-0 md:text-xl">ewfwe</p>
                </div>
                <div className="flex flex-col gap-4">ewfwe</div>
                <div className="hidden flex-col gap-5 md:flex">
                    <Link
                        href="https://www.facebook.com/SeomarketUa/"
                        className="ml-1 flex flex-row items-center gap-5"
                    >
                        <Facebook width="0.625rem" />
                        <p className="relative text-xl font-normal underline-offset-8 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:opacity-30">
                            ewfwe
                        </p>
                    </Link>

                    <Link
                        href={'https://www.instagram.com/seomarket_ua'}
                        className="flex flex-row items-center gap-3"
                    >
                        <Instagram width="1.375rem" />
                        <p className="relative text-xl font-normal underline-offset-8 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:opacity-30">
                            ewfwe
                        </p>
                    </Link>
                </div>
            </div>
            <div className="my-[3.125rem] h-px w-[87.5%] bg-white opacity-20 md:w-full"></div>
            <p className="w-11/12 text-sm font-normal leading-[161%] text-[#ffffff66] md:text-base">
                ewfwe ewfwe
            </p>
            <div className="mt-[3.25rem] flex flex-row gap-6 md:hidden">
                <Link
                    href="https://www.facebook.com/SeomarketUa/"
                    className="flex flex-row items-center gap-4"
                >
                    <Facebook width="0.5rem" />
                    <p className="relative text-base font-normal underline-offset-8 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:opacity-30">
                        ewfwe
                    </p>
                </Link>

                <Link
                    href={'https://www.instagram.com/seomarket_ua'}
                    className="flex flex-row items-center gap-3.5"
                >
                    <Instagram width="1rem" />
                    <p className="relative text-base font-normal underline-offset-8 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:opacity-30">
                        ewfwe
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
