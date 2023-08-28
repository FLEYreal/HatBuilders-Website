'use client'

// Basics
import { createContext, useState, ReactNode, } from "react";

// Types
import { imageData, albumContextType } from "@/types/image";
import AlbumModal from "../Album/AlbumModal";

export const albumContext = createContext<albumContextType>({
    image: {
        src: '/',
        alt: 'Empty Image'
    },
    setImage: function() {},

    isOpen: false,
    setIsOpen: function() {}
})

function AlbumProvider({ children }: { children: ReactNode }) {

    const [image, setImage] = useState<imageData>({
        src: '/',
        alt: 'Empty Image'
    })

    // Hook to define state of modal of image
    const [isOpen, setIsOpen] = useState(false)

    return (
        <albumContext.Provider value={{image, setImage, isOpen, setIsOpen}}>
            <AlbumModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                image={{
                    src: image.src,
                    alt: image.alt
                }}
            />
            {children}
        </albumContext.Provider>
    );
}

export default AlbumProvider;