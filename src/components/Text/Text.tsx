import React from 'react';
import { ThemeTypographyVariants } from '@src/theme/theme';
import { StyleSheet } from '@src/theme/StyleSheet';
import { BaseComponent } from '@src/theme/BaseComponent';
import { useTheme } from '@src/theme/ThemeProvider';

interface TextProps {
    variant: ThemeTypographyVariants;
    tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'a';
    children:React.ReactNode;
    styleSheet?:StyleSheet

}

export default function Text({
    tag,
    styleSheet,
    variant,
    ...props
}: TextProps){

    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];
    return(
        <BaseComponent 
            as={tag}
            styleSheet={{
                fontFamily:theme.typography.fontFamily,
                ...textVariant,
                ...styleSheet
            }}
            {...props}
        />
    )
}

Text.defaultProps = {
    tag:'p',
    variant:'body2'
}