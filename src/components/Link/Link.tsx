//fazer o link navegar no modelo SPA
import NextLink from 'next/link'
import Text from '../Text/Text';
import React from 'react';

interface LinkProps {
    href: string;
    children: React.ReactNode
}


const Link = React.forwardRef(({ href, children, ...props }: LinkProps,ref) => {

    const isIExternalLink = href.startsWith('http');

    const linkProps = {
        ref,
        children,
        href,
        ...props
    }

    if(isIExternalLink) return <Text {...linkProps}/>


    return (
        <NextLink href={href} passHref>
            <Text 
                {...linkProps}
            >
                {children}
            </Text>

        </NextLink>

    )
})

export default Link;