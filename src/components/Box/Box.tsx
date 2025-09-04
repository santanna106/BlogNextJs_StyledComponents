import React, { ReactNode } from 'react';
import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from "@src/theme/StyleSheet";


interface BoxProps {
    tag?: 'main' | 'div' | 'article' | 'section' | 'ul' |string;
    children?: ReactNode;
    styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {

    return (
        <BaseComponent  
            styleSheet={styleSheet}
            {...props}
        >
            {children}
        </BaseComponent>
    )
}