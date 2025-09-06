
import { useTheme } from "styled-components";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { ButtonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
    fullWidth?: boolean;
    children: React.ReactNode;
    colorVariant?: ColorVariant;
    variant?: Variant;
    size?: ButtonSize;

}

export default function Button({
    styleSheet,
    children,
    fullWidth,
    colorVariant = "primary", // valor padrão
    variant = "contained",    // valor padrão
    size
}: ButtonProps) {
    const theme = useTheme();
    return (
        <ButtonBase
            styleSheet={{
                alignSelf: 'flex-start',
                ...colorVariantBy(theme, colorVariant, variant),
                ...(fullWidth && {
                    alignSelf: 'initial'
                }),
                ...styleSheet
            }}
        >
            {children}
        </ButtonBase>
    )
}

Button.defaultProps = {
    fullWidth: false,
    variant: 'contained',
    colorVariant: 'primary'
}


Button.Base = ButtonBase;