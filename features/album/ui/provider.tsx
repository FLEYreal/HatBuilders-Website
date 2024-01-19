'use client'

// Basics
import {
    createContext,
    useState,
    ReactNode,
    useContext,
    SetStateAction,
    Dispatch
} from "react";
import { ImageProps } from "next/image";

// Types
import { AlbumModal } from "./AlbumModal";


/**
 * Interface for the Album Context
 * @property {ImageProps} image - Image data
 * @property {Dispatch<SetStateAction<ImageProps>>} setImage - Function to set the image data
 * @property {boolean} isOpen - State of the modal
 * @property {Dispatch<SetStateAction<boolean>>} setIsOpen - Function to set the state of the modal
 */
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

/**
 * React functional component that provides the context for the Album modal
 * @param {ReactNode} children - The child elements to render
 * @returns {JSX.Element} - The component JSX
 */
export function AlbumProvider({ children }: { children: ReactNode }) {

    // STATES

    // Image data
    const [image, setImage] = useState<ImageProps>({
        src: "/",
        alt: "Empty Image",
        width: 0,
        height: 0,
    });

    // Hook to define state of modal of image
    const [isOpen, setIsOpen] = useState(false);

    return (
        <albumContext.Provider value={{ image, setImage, isOpen, setIsOpen }}>
            <AlbumModal />
            {children}
        </albumContext.Provider>
    );
}

// Hook to get context data
/**
 * Hook to get context data
 * @returns {AlbumContextInterface} - The context data
 */
export const useAlbum = (): AlbumContextInterface => useContext(albumContext);
