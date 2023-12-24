'use client'

// Basics
import { ReactNode, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Features
import { animationDuration } from "@/features/router-transition";

export function HatLink({ children, href }: { children?: ReactNode, href: string }) {

    const router = useRouter()

    function handleRoute(e: MouseEvent<HTMLAnchorElement>) {

        e.preventDefault();

        const redirect = setTimeout(() => {
            console.log('How many time have I been sleeping?')
            router.push(href)
        }, animationDuration)

        return () => clearTimeout(redirect)
    }
    return (
        <Link href="/" onClick={handleRoute}>
            {children}
        </Link>
    )
}