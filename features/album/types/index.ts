// Basics
import React, { SetStateAction, Dispatch } from "react";
import { ImageProps } from 'next/image'

// Interfaces
export interface AlbumImageInterface {
    src: string;
    alt: string;
    height: number;
    width: number;
    style?: React.CSSProperties;
    className?: string;
}

export interface AlbumContextInterface {
    image: ImageProps, 
    setImage: Dispatch<SetStateAction<ImageProps>>,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}