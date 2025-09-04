import React, { ReactNode } from 'react';
import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from "@src/theme/StyleSheet";


interface BoxProps {
    tag?: any;
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