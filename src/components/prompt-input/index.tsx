import { Input, InputGroup, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { Send } from "lucide-react";
import axios from "axios";
import axiosRetry from "axios-retry";
import { Spinner } from "../spinner";
import { themes } from "../../components/ui/themes";

axiosRetry(axios, {
	retries: 3,
	retryDelay: (retryCount) => retryCount * 1000,
	retryCondition: (error) =>
		axiosRetry.isNetworkOrIdempotentRequestError(error) ||
		error.response?.status === 503 ||
		error.response?.status === 400,
});

export function PromptInput({
	promptText,
	setPromptText,
	chatArray,
	setChatArray,
	currentTheme,
}: PromptInputProps_Interface) {
	const [loading, setLoading] = useState(false);

	async function sendPrompt() {
		setLoading(true);
		setChatArray((prev) => [...prev, { chatOf: "user", message: promptText }]);
		const question = promptText;
		setPromptText("");

		const updatedChatArray = [
			...chatArray,
			{ chatOf: "user", message: question },
		];
		const chatHistory = updatedChatArray.map((msg) => ({
			role: msg.chatOf === "user" ? "user" : "model",
			parts: [{ text: msg.message }],
		}));

		try {
			if (!navigator.onLine) {
				setChatArray((prev) => [
					...prev,
					{
						chatOf: "ai",
						message: `Opps! It seems you are offline. I can only work when you have an internet connection. Please make sure you have an good internet connection and I will see you.`,
					},
				]);
			} else {
				const { data } = await axios.post(
					`${process.env.Backend_URL}/call-gemini`,
					{
						chatHistory,
					},
					{ headers: { "Content-Type": "application/json" } }
				);
				setChatArray((prev) => [
					...prev,
					{ chatOf: "ai", message: data.answer },
				]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setChatArray((prev) => [
				...prev,
				{
					chatOf: "ai",
					message:
						"Ahh! Sorry for the inconvenience, actually I am busy handling few tasks right now. I will be right back please try after sometime.",
				},
			]);
			setLoading(false);
		}
	}

	return (
		<InputGroup
			width={"90%"}
			position={"absolute"}
			bottom={3}
			left={7}
			bgColor={"#30303070"}
			endElement={
				loading ? (
					<Spinner currentTheme={currentTheme} />
				) : promptText !== "" ? (
					<IconButton size={"2xl"} bg={"transparent"} onClick={sendPrompt}>
						<Send color={themes[currentTheme].sendButton} />
					</IconButton>
				) : null
			}
			borderRadius={15}
		>
			<Input
				border={"none"}
				outline={"none"}
				color={"white"}
				value={promptText}
				onKeyDown={(event) => {
					if (event.key === "Enter" && promptText !== "" && loading === false)
						sendPrompt();
				}}
				onChange={(event) => setPromptText(event.target.value)}
				_placeholder={{ color: themes[currentTheme].placeholder }}
				type="text"
				placeholder="Enter your prompt here"
				size={"2xl"}
			/>
		</InputGroup>
	);
}
