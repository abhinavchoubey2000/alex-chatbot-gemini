import { Box } from "@chakra-ui/react";
import { AIMessage, UserMessage } from "./components";
import { Landing } from "../landing";

export function ChatBody({ chatArray, currentTheme }: ChatBodyProps_Interface) {
	return chatArray.length === 0 ? (
		<Landing />
	) : (
		<Box
			display={"flex"}
			flexDirection={"column-reverse"}
			gap={2}
			alignItems={"flex-end"}
			width={"100%"}
			px={4}
			py={2}
			overflowY={"auto"}
			height={"74vh"}
		>
			{chatArray
				.slice()
				.reverse()
				.map((chat, index) =>{
					return chat.chatOf === "ai" ? (
						<AIMessage
							key={index}
							message={chat.message}
							currentTheme={currentTheme}
						/>
					) : (
						<UserMessage
							key={index}
							message={chat.message}
							currentTheme={currentTheme}
						/>
					);
				}
				)}
		</Box>
	);
}
