'use client'

// Basics
import { createContext, useState, ReactNode, useContext, SetStateAction, Dispatch } from "react";
import { ImageProps } from "next/image";

// Types
import { AlbumModal } from "./AlbumModal";

// Interfaces
export interface AlbumContextInterface {
    image: ImageProps,
    setImage: Dispatch<SetStateAction<ImageProps>>,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

// Context for Album Modal
export const albumContext = createContext<AlbumContextInterface>({

    // Image data
    image: {
        src: '/',
        alt: 'Empty Image',
        width: 0,
        height: 0
    },
    setImage: function () { },

    // State of modal
    isOpen: false,
    setIsOpen: function () { }
})

export function AlbumProvider({ children }: { children: ReactNode }) {

    // Image data
    const [image, setImage] = useState<ImageProps>({
        src: '/',
        alt: 'Empty Image',
        width: 0,
        height: 0
    })

    // Hook to define state of modal of image
    const [isOpen, setIsOpen] = useState(false)

    return (
        <albumContext.Provider value={{ image, setImage, isOpen, setIsOpen }}>
            <AlbumModal />
            {children}
        </albumContext.Provider>
    );
}

// Hook to get context data
export const useAlbum = () => useContext(albumContext)
