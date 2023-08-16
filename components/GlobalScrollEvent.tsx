'use client'
import React, { useRef, useEffect, useState } from "react";

function GlobalScrollEvent({ children }: { children: React.ReactNode}) {
    const divRef = useRef<HTMLDivElement>(null);
    const [documentHeight, setDocumentHeight] = useState(0);

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
        const handleScroll = () => {
            console.log("Произошло событие скролла!");
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
        <div ref={divRef} style={{ overflow: "auto", height: documentHeight }}>
            {children}
        </div>
    );
}

export default GlobalScrollEvent;
