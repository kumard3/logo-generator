/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import Svg from '../components/Svg';

export default function Home() {
  return (
      <main className=" w-full h-full font-[sans-serif]">
        <section className='bg-white w-full'>
        <Svg name={'test'} />
        </section>
        <a href='/components/Svg.tsx' download>Click to download</a>
      </main>
  );
}