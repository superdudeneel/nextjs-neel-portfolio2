"use client";


import React from 'react'
import {
    House,
    Github,
    Instagram,
    Facebook,
    Linkedin
} from 'lucide-react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {redirect} from 'next/navigation';


const Navbar = () => {
    const navlinks = [
        
        {icon: Github, href: 'https://github.com/superdudeneel'},
        {icon: Instagram, href: 'https://instagram.com/superdudeneel'},
        {icon: Facebook, href: 'https://facebook.com'},
        {icon: Linkedin, href: 'https://linkedin.com'},
    ]
    return (
        <div className="border border-gray-300 px-10 py-3 mx-auto flex items-center max-w-[470px] md:max-w-3xl rounded-xl sticky top-12 bg-white/80 md:gap-8 gap-6 z-50 backdrop-blur">
            <Link className="text-gray-600 hover:text-black" href="/"><House /></Link>
            <div className="h-8 w-px bg-gray-300"></div>
            {navlinks.map((link, index) => (
                <Link className="text-gray-600 hover:text-black" key={index} href={link.href}><link.icon /></Link>
            ))}
            <div className="h-8 w-px bg-gray-300"></div>
            <Button onClick = {()=>{
                redirect('/contact');

            }} className="md:px-7 md:py-5 rounded-md cursor-pointer px-4 py-1">Contact</Button>
        </div>
    )
}

export default Navbar