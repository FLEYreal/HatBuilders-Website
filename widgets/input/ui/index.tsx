'use client'
// Basic
import React, { CSSProperties } from "react";


// Styles


// Interfaces
export interface HatInputType {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
    color?: string;
    type?: 'normal' | 'active' | 'secondary'| 'error';
}

export function HatInput({
    value,
    onChange,
    style,
    color,
    type = 'normal'
}: HatInputType) {


    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            style={{                
                borderColor: color === 'primary' || color === 'info' || color === 'warning'
                    ? '#000000'
                    : '#ffffff',
                    
                ...style,
            }}
        />
    );
}