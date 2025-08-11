'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Wish = {
    name: string;
    photo: string;
    text: string;
};

const wishes: Wish[] = [
    {
        name: 'Даня',
        photo: '/pic/carusel/1.jpg',
        text: 'С днюхой, бро! Желаю, чтобы мемы никогда не заканчивались, а рофлы сами к тебе приходили!',
    },
    {
        name: 'Aйнур',
        photo: '/wish/ainur.gif',
        text: 'Алон, алоша и просто бузик с днем твоего ррррожденией, рада что с тобой познакомилась, и желаю тебе много золото, роналдо, власть над одором и здоровые😎 🤝 😈 🤍',
    },
    {
        name: 'Игорь',
        photo: '/pic/carusel/1.jpg',
        text: 'Желаю лутать только легендарки и катать жизнь без респаунов.',
    },
    {
        name: 'Кирилл',
        photo: '/pic/carusel/1.jpg',
        text: 'Пусть каждый твой день будет как пятничный вечер в нашем дворе.',
    },
    {
        name: 'Кирилл',
        photo: '/pic/carusel/1.jpg',
        text: 'Пусть каждый твой день будет как пятничный вечер в нашем дворе.',
    },
    {
        name: 'Кирилл',
        photo: '/pic/carusel/1.jpg',
        text: 'Пусть каждый твой день будет как пятничный вечер в нашем дворе.',
    },
    {
        name: 'Кирилл',
        photo: '/pic/carusel/1.jpg',
        text: 'Пусть каждый твой день будет как пятничный вечер в нашем дворе.',
    },
    {
        name: 'Кирилл',
        photo: '/pic/carusel/1.jpg',
        text: 'Пусть каждый твой день будет как пятничный вечер в нашем дворе.',
    },
];

export default function WishesBlock() {
    const [openPhoto, setOpenPhoto] = useState<string | null>(null);
    const [anim, setAnim] = useState<'in' | 'out' | null>(null);

    // esc to close
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    function openModal(src: string) {
        setOpenPhoto(src);
        // чуть-чуть задержки для css-анимации
        requestAnimationFrame(() => setAnim('in'));
    }

    function closeModal() {
        setAnim('out');
        // подождать окончание анимации
        setTimeout(() => {
            setOpenPhoto(null);
            setAnim(null);
        }, 180);
    }

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto">
                {/* Заголовок */}
                <div className="mb-10 flex flex-col items-center text-center md:mb-14">
                    <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                        Личные <span className="text-[#31A301]">пожелания</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-base text-gray-500 md:text-lg">
                        Каждый из нас сказал бы это лично, но оставим и здесь — на память.
                    </p>
                </div>

                {/* Mobile: scroll */}
                <div className="md:hidden">
                    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2">
                        {wishes.map((w, i) => (
                            <button
                                key={`m-${i}`}
                                onClick={() => openModal(w.photo)}
                                className="min-w-[16rem] flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur active:scale-[0.995]"
                            >
                                <div className="relative mb-4 h-40 w-full cursor-zoom-in overflow-hidden rounded-lg">
                                    {w.photo.endsWith('.gif') ? (
                                        <img
                                            src={w.photo}
                                            alt={w.name}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <Image
                                            src={w.photo}
                                            alt={w.name}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-black">{w.name}</h3>
                                <p className="text-sm text-gray-300">{w.text}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop: grid */}
                <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-4">
                    {wishes.map((w, i) => (
                        <button
                            key={`d-${i}`}
                            onClick={() => openModal(w.photo)}
                            className="rounded-2xl border border-black/10 bg-white p-6 text-left shadow-sm transition-transform duration-300 hover:-translate-y-1 active:translate-y-0.5"
                        >
                            <div className="relative mb-4 h-48 w-full cursor-zoom-in overflow-hidden rounded-lg">
                                <Image src={w.photo} alt={w.name} fill className="object-cover" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-black">{w.name}</h3>
                            <p className="text-gray-600">{w.text}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {openPhoto && (
                <div
                    onClick={closeModal}
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
                        anim === 'in' ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* контент, клик по нему не закрывает */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative h-[72vh] w-[92vw] max-w-3xl overflow-hidden rounded-2xl bg-black transition-transform duration-200 md:h-[80vh] md:max-w-5xl ${
                            anim === 'in' ? 'scale-100' : 'scale-95'
                        }`}
                    >
                        <Image
                            src={openPhoto}
                            alt="wish photo"
                            fill
                            className="object-contain"
                            priority
                        />
                        <button
                            onClick={closeModal}
                            aria-label="Закрыть"
                            className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-black hover:bg-white"
                        >
                            закрыть
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
