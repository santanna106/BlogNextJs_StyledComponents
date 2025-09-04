import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from './svgs/_index';

const iconSizes = {
    xs: '12px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '36px',
} as const;

type IconProps = {
    name: keyof typeof icons;
    styleSheet?: StyleSheet;
    size: keyof typeof iconSizes;
} & React.SVGProps<SVGSVGElement>;

export default function Icon({ size, name, styleSheet, ...svgProps }: IconProps) {
    const CurrentIcon = icons[name];
    if (!CurrentIcon) return <>“{name}” is not a valid &lt;Icon /&gt;</>;

    return (
        <BaseComponent
            as="svg"
            styleSheet={{
                width: iconSizes[size],
                height: iconSizes[size],
                color: 'inherit'
            }}
           
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            // cor via CSS (se quiser herdar):
            {...svgProps}
        >
            <CurrentIcon />
        </BaseComponent>
    );
}

Icon.defaultProps = {
    name: 'default_icon',
    size: 'md',
};