"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        imageUrl: string
        title: string;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 bg-[#121e2c] w-auto",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-[310px] w-[305px] bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <img src={item.imageUrl} width={70} height={62} className="invert" />
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-[296px] w-[288px] p-4 overflow-hidden bg-[#121e2c] border-2 border-white  dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <svg className="absolute bottom-0 -right-56 bg-transparent z-0 text-[#233341]" viewBox="0 0 275 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" width="436px" height={213} clip-rule="evenodd" d="M6.388 0.564883C5.227 1.05488 3.314 2.67988 2.138 4.17488C0.0079999 6.88188 0 7.11889 0 66.7109C0 107.591 0.344 127.283 1.085 128.911C1.682 130.221 3.439 132.042 4.99 132.958C7.581 134.488 18.284 134.623 137.357 134.623C228.375 134.623 267.614 134.3 269.288 133.538C274.506 131.16 275 128.675 275 104.784C275 92.6669 274.57 81.6219 274.045 80.2399C273.519 78.8579 272.057 77.0529 270.795 76.2279C268.724 74.8739 16.952 1.08988 11 0.0928829C9.625 -0.137117 7.55 0.0748827 6.388 0.564883Z" fill="currentColor"></path>
            </svg>
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
