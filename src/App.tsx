import dotenv from "dotenv";
import { useState } from "react";
import { Container } from "@chakra-ui/react";
import { themes } from "./components/ui/themes";
import BackgroundOverlay from "@/assets/overlay-new.png";
import { Header, ChatBody, PromptInput } from "./components";

function App() {
	dotenv.config();
	const [promptText, setPromptText] = useState("");
	const [currentTheme, setCurrentTheme] = useState<CurrentTheme_Type>("black");
	const [chatArray, setChatArray] = useState<ChatArray_Type>([]);

	return (
		<Container
			bgImage={`${themes[currentTheme].bg}, url(${BackgroundOverlay})`}
			padding={0}
			position={"relative"}
			maxWidth={"lg"}
			h={"100vh"}
		>
			<Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
			<PromptInput
				promptText={promptText}
				chatArray={chatArray}
				setPromptText={setPromptText}
				setChatArray={setChatArray}
				currentTheme={currentTheme}
			/>
			<ChatBody chatArray={chatArray} currentTheme={currentTheme} />
		</Container>
	);
}

export default App;
