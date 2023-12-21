'use client'

// Basics
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Libs
import { motion, AnimatePresence } from 'framer-motion'

export function PageTransition({ children }: { children?: ReactNode }) {

    const path = usePathname()

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={path}
                initial={{
                    transform: 'translateY(-100%)',
                    opacity: 0,
                }}
                animate={{
                    transform: 'translateY(0%)',
                    opacity: 1,
                }}
                exit={{}}
                transition={{ duration: 0.75 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}