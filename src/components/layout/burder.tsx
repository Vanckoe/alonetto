'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';
import Facebook from '@/assets/icons/facebook';
import Instagram from '@/assets/icons/instagram';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <div className="relative z-[99] flex flex-row items-center gap-3 rounded-md border border-[#ffffff]/20 md:hidden">
                <button
                    onClick={toggleMenu}
                    className="z-[99] flex size-[3.125rem] max-h-[3.125rem] cursor-pointer flex-col items-center justify-center gap-1.5 border-none bg-transparent p-0 transition-transform duration-300 ease-in-out hover:scale-[1.015]"
                >
                    <div
                        className={clsx(
                            'h-[2px] bg-white transition-all duration-300 ease-linear',
                            isOpen ? 'w-6 translate-y-2 rotate-45' : 'w-5',
                        )}
                    />
                    <div
                        className={clsx(
                            'h-[2px] bg-white transition-all duration-300 ease-linear',
                            isOpen ? 'w-6 opacity-0' : 'w-5 opacity-100',
                        )}
                    />
                    <div
                        className={clsx(
                            'h-[2px] bg-white transition-all duration-300 ease-linear',
                            isOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5',
                        )}
                    />
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed left-0 top-0 z-[98] flex h-lvh w-full flex-col items-center justify-start bg-black pt-36"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(!isOpen)}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            href={`/`}
                            className="flex w-full flex-row items-center justify-between px-10 py-2.5 text-[1.625rem] -tracking-wider text-white no-underline transition-colors duration-500"
                        >
                            ewfewf
                        </Link>
                        <div className="my-4 h-px w-[25rem] bg-white opacity-20"></div>
                        <Link
                            href={`/consultation`}
                            className="flex w-full flex-row items-center justify-between px-10 py-2.5 text-[1.625rem] -tracking-wider text-white no-underline transition-colors duration-300"
                        >
                            ewfewf
                        </Link>
                        <div className="my-4 h-px w-[25rem] bg-white opacity-20"></div>
                        <div className="flex w-full flex-col px-10 text-[1.625rem] text-white no-underline transition-colors duration-300">
                            <Link
                                href={`/blog`}
                                className="mt-1 flex w-full flex-row items-center justify-between"
                            >
                                ewfewf
                            </Link>
                            <div className="my-7 flex flex-col gap-3">
                                <Link href={`/blog/all`} className="text-lg font-medium opacity-40">
                                    ewfewf
                                </Link>
                                <div className="h-px w-full bg-white opacity-10"></div>
                                <Link href={`/blog/ppc`} className="text-lg font-medium opacity-40">
                                    ewfewf
                                </Link>
                                <div className="h-px w-full bg-white opacity-10"></div>
                                <Link
                                    href={`/blog/experts`}
                                    className="text-lg font-medium opacity-40"
                                >
                                    ewfewf
                                </Link>
                                <div className="h-px w-full bg-white opacity-10"></div>
                                <Link href={`/blog/seo`} className="text-lg font-medium opacity-40">
                                    ewfewf
                                </Link>
                            </div>
                        </div>
                        <div className="my-4 h-px w-[25rem] bg-white opacity-20"></div>
                        <Link
                            href={`/contacts`}
                            className="flex w-full flex-row items-center justify-between px-10 py-2.5 text-[1.625rem] -tracking-wider text-white no-underline transition-colors duration-300"
                        >
                            ewfewf
                        </Link>
                        <div className="container fixed bottom-[3.75rem] flex w-full flex-row items-center justify-between">
                            <Link
                                href="https://www.facebook.com/SeomarketUa/"
                                className="flex flex-row items-center gap-4"
                            >
                                <Facebook width="0.6rem" />
                                <p className="relative text-xl font-normal underline-offset-8 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:opacity-30">
                                    facebook
                                </p>
                            </Link>
                            <Link
                                href="https://www.instagram.com/seomarket_ua"
                                className="flex flex-row items-center gap-3.5"
                            >
                                <Instagram width="1.125rem" />
                                <p className="relative text-xl font-normal underline-offset-8 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:opacity-30">
                                    instagram
                                </p>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default BurgerMenu;
