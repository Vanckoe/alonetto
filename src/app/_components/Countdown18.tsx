'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const targetDate = new Date(2026, 7, 13, 0, 0, 0); // 13.08.2026 (месяцы 0-11)

type Left = { total: number; d: number; h: number; m: number; s: number };

function getLeft(): Left {
    const now = new Date().getTime();
    const total = Math.max(0, +targetDate - now);
    const d = Math.floor(total / (1000 * 60 * 60 * 24));
    const h = Math.floor((total / (1000 * 60 * 60)) % 24);
    const m = Math.floor((total / (1000 * 60)) % 60);
    const s = Math.floor((total / 1000) % 60);
    return { total, d, h, m, s };
}

function pad2(n: number) {
    return n.toString().padStart(2, '0');
}

/** Плавное перелистывание одной «двузначной» ячейки */
function FlipUnit({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[6.5rem] rounded-2xl bg-white px-3 py-4 text-center shadow-sm md:w-[7.5rem]">
                <div className="relative overflow-hidden text-4xl font-bold tabular-nums md:text-5xl">
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                            key={value}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="inline-block"
                        >
                            {value}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-gray-500">{label}</div>
        </div>
    );
}

export default function Countdown18() {
    const [left, setLeft] = useState<Left>(() => getLeft());

    useEffect(() => {
        const id = setInterval(() => setLeft(getLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    const { d, h, m, s } = left;

    // Прогресс-бар до 18 (0% -> 100%)
    const progress = useMemo(() => {
        const start = new Date(2025, 7, 13, 0, 0, 0).getTime(); // 13.08.2025 — день 17
        const end = +targetDate;
        const now = Date.now();
        return Math.min(100, Math.max(0, ((now - start) / (end - start)) * 100));
    }, []);

    return (
        <section className="pt-16 md:pt-24">
            <div className="container mx-auto">
                <div className="mb-6 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        до совершеннолетия
                        <span className="h-1 w-1 rounded-full bg-[#31A301]" />
                    </span>
                    <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
                        Сколько дней до <span className="text-[#31A301]">18</span>
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Дедлайн: <b>13.08.2026</b>. Обновляется в реальном времени.
                    </p>
                </div>

                {/* Большие дни */}
                <div className="mx-auto mb-8 grid max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-sm uppercase tracking-[0.2em] text-gray-500">
                                осталось
                            </div>
                            <motion.div
                                key={d}
                                initial={{ scale: 0.98, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                className="text-7xl font-black tabular-nums leading-none text-[#31A301] md:text-8xl"
                            >
                                {d}
                            </motion.div>
                            <div className="mt-1 text-sm uppercase tracking-widest text-gray-500">
                                дней
                            </div>
                        </div>
                    </div>

                    <div className="hidden h-16 w-px bg-black/10 md:block" />

                    {/* Часы/мин/сек */}
                    <div className="flex items-center justify-center gap-4 text-[#31A301] md:justify-start">
                        <FlipUnit value={pad2(h)} label="часы" />
                        <FlipUnit value={pad2(m)} label="минуты" />
                        <FlipUnit value={pad2(s)} label="секунды" />
                    </div>
                </div>

                {/* Прогресс к 18 */}
                <div className="mx-auto max-w-3xl">
                    <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
                        <span>прогресс к 18</span>
                        <span className="tabular-nums">{progress.toFixed(1)}%</span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                        <motion.div
                            className="h-full bg-[#31A301]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
