import React from "react";

export interface imageData {
    src: string;
    alt: string;
    height?: number;
    width?: number;
}

export interface albumImage {
    src: string;
    alt: string;
    height: number;
    width: number;
    style: React.CSSProperties
}