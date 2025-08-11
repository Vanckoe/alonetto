'use client';

export default function RoflFooter() {
    return (
        <footer className="mt-20 bg-black text-white">
            <div className="container mx-auto flex flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
                {/* Лого и девиз */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">
                        An<span className="text-[#31A301]">teiku</span>
                    </h2>
                    <p className="text-sm text-gray-400">«Мы не обещаем, мы намекаем».</p>
                </div>

                {/* Навигация */}
                <nav className="flex flex-col gap-2 text-sm">
                    <a href="#" className="transition-colors hover:text-[#31A301]">
                        Главная (ну почти)
                    </a>
                    <a href="#" className="transition-colors hover:text-[#31A301]">
                        О нас (серьёзно?)
                    </a>
                    <a href="#" className="transition-colors hover:text-[#31A301]">
                        Блог (там пусто)
                    </a>
                    <a href="#" className="transition-colors hover:text-[#31A301]">
                        Контакты (попробуй дозвонись)
                    </a>
                </nav>

                {/* Соцсети */}
                <div className="flex flex-col gap-3 text-sm">
                    <p className="text-gray-400">Мы тут иногда бываем:</p>
                    <div className="flex gap-4">
                        <a
                            href="https://discord.gg/Zke72fVP"
                            className="transition-colors hover:text-[#31A301]"
                        >
                            discord
                        </a>
                        <a href="/lol" className="transition-colors hover:text-[#31A301]">
                            pornhub
                        </a>
                    </div>
                </div>
            </div>

            {/* Нижний бар */}
            <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} RoflCorp. Все права защищены. Использование сайта
                улучшает твоё чувство юмора. Cookies? Да, у нас есть печеньки.
            </div>
        </footer>
    );
}
