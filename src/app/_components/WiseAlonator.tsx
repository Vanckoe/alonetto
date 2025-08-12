'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const advices = [
    'Работа не волк. Никто не волк. Только волк — волк.',
    'Настоящий мужчина, как ковер тети Зины — с каждым годом лысеет.',
    'Мама учила не ругаться матом, но жизнь научила не ругаться матом при маме.',
    'Если закрыть глаза, становится темно.',
    'Если тебе где-то не рады в рваных носках, то и в целых туда идти не стоит.',
    '«Жи-ши» пиши от души.',
    'Тут — это вам не там.',
    'Кто рано встает — тому весь день спать хочется.',
    'Если ты смелый, ловкий и очень сексуальный — иди домой, ты пьян.',
];

export default function WiseAlonatorStatham() {
    const [index, setIndex] = useState(0);
    const [shake, setShake] = useState(false);

    const nextAdvice = () => {
        setIndex((i) => (i + 1) % advices.length);
        setShake(true);
        setTimeout(() => setShake(false), 200);
    };

    const prevAdvice = () => {
        setIndex((i) => (i - 1 + advices.length) % advices.length);
        setShake(true);
        setTimeout(() => setShake(false), 200);
    };

    const currentAdvice = advices[index];

    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto text-center">
                <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
                    Совет от <span className="text-[#31A301]">Vanckoe*</span>
                </h2>
                <p className="mb-6 text-sm text-gray-500">*вчитывайся и следи за советами</p>

                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={prevAdvice}
                        className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50"
                    >
                        Назад
                    </button>
                    <button
                        onClick={nextAdvice}
                        className="rounded-full bg-[#31A301] px-6 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                        Следующий «умный» совет
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {currentAdvice && (
                        <motion.p
                            key={index} // ключ по индексу, чтобы анимация срабатывала при каждом шаге
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className={`mx-auto mt-6 max-w-2xl text-lg md:text-xl ${
                                shake ? 'animate-[wiggle_0.2s_linear]' : ''
                            }`}
                        >
                            «{currentAdvice}»
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            <style jsx>{`
                @keyframes wiggle {
                    0% {
                        transform: translateX(0);
                    }
                    25% {
                        transform: translateX(-2px);
                    }
                    50% {
                        transform: translateX(2px);
                    }
                    75% {
                        transform: translateX(-1px);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
}
