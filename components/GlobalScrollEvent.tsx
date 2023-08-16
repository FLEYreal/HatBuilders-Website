'use client'
import React, { useRef, useEffect, useState, createContext } from "react";

export const scrollContext = createContext<{value: number, isScrolled: boolean}>({
    value: 0,
    isScrolled: false
});

function GlobalScrollEvent({ children }: { children: React.ReactNode }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [documentHeight, setDocumentHeight] = useState<number>(0);
    const [scrollPos, setScrollPost] = useState<{value: number, isScrolled: boolean}>({
        value: 0,
        isScrolled: false
    })

    useEffect(() => {
        // Function to get size of document
        const getDocumentHeight = () => {
            const body = document.body;
            const html = document.documentElement;

            return Math.max(
                body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight
            );
        };

        // Set document height
        setDocumentHeight(getDocumentHeight());

        // Function to handle resize event
        const handleResize = () => {
            setDocumentHeight(getDocumentHeight());
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = (e: any) => {
            setScrollPost({
                value: divElement!.scrollTop,
                isScrolled: divElement!.scrollTop > 0 ? true : false
            })
        };

        const divElement = divRef.current;
        if (divElement) {
            divElement.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (divElement) {
                divElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <scrollContext.Provider value={scrollPos}>
            <div ref={divRef} style={{ overflow: "auto", height: documentHeight }}>
                {children}
            </div>
        </scrollContext.Provider>
    );
}

export default GlobalScrollEvent;
