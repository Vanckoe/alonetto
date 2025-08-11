'use client';
import React from 'react';
import Hero from '@/app/_components/hero';
import ForWho from './_components/forWho';
import WishesBlock from './_components/WishesBlock';

export default function Home() {
    return (
        <div>
            <Hero />
            <ForWho />
            <WishesBlock />
        </div>
    );
}
