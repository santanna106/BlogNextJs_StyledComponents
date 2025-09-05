import ButtonBase from "./ButtonBase";

interface ButtonProps{
    children:React.ReactNode;
}

export default function Button({children}:ButtonProps){
    return(
        <ButtonBase>
            {children}
        </ButtonBase>
    )
}


Button.Base= ButtonBase;