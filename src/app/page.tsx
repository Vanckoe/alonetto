'use client';
import React from 'react';
import Hero from '@/app/_components/hero';
import ForWho from './_components/forWho';
import WishesBlock from './_components/WishesBlock';
import SoundPad from './_components/SoundPad';
import PosterV16 from './_components/PosterV16';
import Countdown18 from './_components/Countdown18';
import WiseAlonator from './_components/WiseAlonator';
import Footer from '@/components/layout/footer';

export default function Home() {
    return (
        <div>
            <Hero />
            <ForWho />
            <SoundPad src="/alone.mp3" title="ALONATOR — MAIN THEME" />

            <WishesBlock />

            <section className="relative overflow-hidden">
                <Countdown18 />
                <WiseAlonator />

                <PosterV16 />
            </section>
            <Footer />
        </div>
    );
}
