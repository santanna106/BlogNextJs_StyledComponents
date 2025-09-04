import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";
import { ReactNode } from "react";

interface FeedProps {
    children: ReactNode;
}

export default function Feed({ children }: FeedProps) {
    return (
        <Box>
            <Text>
                Feed Base
            </Text>
            {children}
        </Box>
    )
}

Feed.Header = () => {
    return (
        <Box
            styleSheet={{
                color: 'white',
            }}
        >
            <Image
                styleSheet={{
                    width:'128px',
                    heigth:'128px',
                    borderRadius:'100%'
                }}
                src="https://github.com/santanna106.png"
                alt="Imagem de Perfil de Gabriel" />
            <Icon name="youtube" size="xl" />
            <Icon name="twitter" size="xl" />
            <Icon name="instagram" size="xl" />
            <Icon name="github" size="xl" />
            <Text>
                Feed Header
            </Text>
        </Box>
    )
}

Feed.Posts = () => {
    return (
        <Box>
            <Text>
                Feed Posts
            </Text>
        </Box>
    )
}