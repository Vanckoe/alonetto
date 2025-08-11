'use client';
import React from 'react';
import Hero from '@/app/_components/hero';
import ForWho from './_components/forWho';
import WishesBlock from './_components/WishesBlock';
import SoundPad from './_components/SoundPad';
import PosterV16 from './_components/PosterV16';

export default function Home() {
    return (
        <div>
            <Hero />
            <ForWho />
            <SoundPad src="/alone.mp3" title="ALONATOR — MAIN THEME" />
            <section className="relative overflow-hidden">
                <WishesBlock />
                <PosterV16 />
            </section>
        </div>
    );
}
