//fazer o link navegar no modelo SPA
import NextLink from 'next/link'
import Text from '../Text/Text';
import React from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import theme, { ThemeTypographyVariants } from '@src/theme/theme';

interface LinkProps {
    href: string;
    children: React.ReactNode;
    styleSheet?: StyleSheet;
    variant?: ThemeTypographyVariants;
    colorVariant: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
    colorVariantEnabled?: boolean;
}




const Link = React.forwardRef(({
    href,
    children,
    colorVariant='primary' ,
    styleSheet,
    colorVariantEnabled,
    ...props }: LinkProps, ref) => {



    

    const currentColorSet = {
        color: theme.colors[colorVariant ].x500 ,
        hover: {
            color: theme.colors[colorVariant ].x400,
        },
        focus: {
            color: theme.colors[colorVariant].x600,
        }
    };

    const linkProps = {
      
        ref,
        children,
        href,
        styleSheet: {
            textDecoration: 'none',
            ...colorVariantEnabled && {
                color: currentColorSet.color,
            },
            ...styleSheet,
            hover: {
                ...styleSheet?.hover,
                ...colorVariantEnabled && {
                    color: currentColorSet.focus.color,
                }
            },
            focus: {
                ...styleSheet?.focus,
                ...colorVariantEnabled && {
                    color: currentColorSet.focus.color,
                }
            },
        },
        ...props
    }


   

    return (
        <NextLink href={href} passHref>
            <Text
                {...{
                    target: '_blank',
                    ...linkProps,
                }}
            >
                {children}
            </Text>

        </NextLink>

    )
});



export default Link;