'use client'

// Basics
import { createContext, useState, ReactNode, } from "react";

// Types
import { imageData, albumContextType } from "@/types/image";
import AlbumModal from "../Album/AlbumModal";

// Context for Album Modal
export const albumContext = createContext<albumContextType>({

    // Image data
    image: {
        src: '/',
        alt: 'Empty Image'
    },
    setImage: function() {},

    // State of modal
    isOpen: false,
    setIsOpen: function() {}
})

function AlbumProvider({ children }: { children: ReactNode }) {

    // Image data
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