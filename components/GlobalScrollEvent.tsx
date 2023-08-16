'use client'

// Basic imports
import React, { useRef, useEffect, useState, createContext } from "react";

// Scroll context to get scroll position
export const scrollContext = createContext<{value: number, isScrolled: boolean}>({
    value: 0, // Scroll position
    isScrolled: false // Is scrolled, defined by either value equals 0 or not
});

function GlobalScrollEvent({ children }: { children: React.ReactNode }) {

    // BASIC HOOKS

    // Get main div element
    const divRef = useRef<HTMLDivElement>(null);

    // State to store document height
    const [documentHeight, setDocumentHeight] = useState<number>(0);

    // State to store scroll position
    const [scrollPos, setScrollPost] = useState<{value: number, isScrolled: boolean}>({
        value: 0,
        isScrolled: false
    })

    // EFFECT HOOKS

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

        // Function to handle scroll event
        const handleScroll = (e: any) => {
            setScrollPost({
                value: divElement!.scrollTop,
                isScrolled: divElement!.scrollTop > 0 ? true : false
            })
        };

        // Add event listener
        const divElement = divRef.current;
        if (divElement) {
            divElement.addEventListener("scroll", handleScroll);
        }

        // Remove event listener on cleanup
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
