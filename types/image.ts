import React, { SetStateAction, Dispatch } from "react";

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
    style?: React.CSSProperties;
    className?: string;
}

export interface albumContextType {
    image: imageData, 
    setImage: Dispatch<SetStateAction<imageData>>,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}