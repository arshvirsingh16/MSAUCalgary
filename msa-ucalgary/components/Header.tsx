'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Nav } from './Nav';
import { NavItem } from './NavItem';

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Header = () => {

  return (
    <header className='flex justify-between items-center px-4 border-b-2 border-msa-green h-24 sticky'>
      <Link href="/">
        <Image
        src="/images/msa-logo.png"
        alt="MSA Logo"
        width={100}
        height={50}
        />
      </Link>
      <Nav>
        <NavItem link="" label="Home"></NavItem>
        <NavItem link="about" label="About"></NavItem>
        <NavItem link="event" label="Events"></NavItem>
        <NavItem link="prayer" label="Prayers"></NavItem>
        <NavItem link="merch" label="Merch"></NavItem>
        <NavItem link="contact" label="Contact"></NavItem>
      </Nav>
      <button className='bg-msa-green h-10 w-24 rounded-md text-white'>Donate
        {/* <Link href="/donate" onClick={() => console.log(segment)}>Donate</Link> */}
      </button>
    </header>
  )
}
