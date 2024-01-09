'use client'

// Basics
import React, { useRef, useEffect } from 'react';

// Interfaces
export interface VideoPlayerInterface {
    src: string;
    styles?: React.CSSProperties;
    className?: string;
    doControl?: boolean;
    doLoop?: boolean;
    doStart?: boolean;
    volume?: number;
}

// Component

/**
 * Creates a better way to work with video component.
 * 
 * @param src - Source of the video
 * @param styles - Basic style tag, applies CSS styles to component.
 * @param className - Applies CSS classnames to component.
 * @param doControl - Is user able to control video, hides video UI if "false".
 * @param doLoop - If "true", video will play infinitely, combination with "doControl: false" you can make background video for example.
 * @param doStart - By default you have to click on video to start and if "doControl: false", you have to use this param to play video by default.
 * @param volume - Default volume of the video. Important: To play video automatically volume has to be 0. It's browser's requirements to avoid screamers and else. 
 */
export const HatVideo = ({
    src,
    styles,
    className,
    doControl = false,
    doLoop = false,
    doStart = false,
    volume = 50,
}: VideoPlayerInterface) => {

    // Reference to video tag
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {

        // Assign video tag to variable
        const videoElement = videoRef.current;
        if (!videoElement) return;

        // Set attributes to video tag
        videoElement.controls = doControl;
        videoElement.loop = doLoop;
        videoElement.volume = volume / 100;

        // If "doStart" is true, play it automatically
        if (doStart) videoElement.play(); // P.S. It will only work if volume is 0

    }, [doControl, doLoop, doStart, volume]);

    return (
        <video ref={videoRef} src={src} style={styles} className={className} />
    );
};
