import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Background from "./patterns/BackGround/Background";
import { Menu } from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";

export default function HomeScreen() {
    return (
        <Box
            tag="main"
            styleSheet={{
                backgroundColor:'gray',
                flex:1,
                alignItems:'center'
            }}
        >
            <Background />
            <Menu />
            <Feed>
                <Feed.Header/>
                    <Text 
                        variant="display1"
                    
                    >
                        Últimas Atualizações
                    </Text>
                 <Feed.Posts/>

            </Feed>
            <Footer />

        </Box>
    )

}