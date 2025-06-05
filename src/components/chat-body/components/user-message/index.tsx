import { VStack, Text } from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/transition";
import { themes } from "../../../../components/ui/themes";

export function UserMessage({
	message,
	currentTheme,
}: UserMessageProps_Interface) {
	return (
		<VStack display={"inline-flex"} maxWidth={"70%"}>
			<ScaleFade initialScale={0.9} in>
				<VStack
					display={"inline-flex"}
					width={"100%"}
					bg={themes[currentTheme].userChat.bg}
					color={themes[currentTheme].userChat.color}
					px={2}
					py={2}
					borderRadius={10}
				>
					<Text>{message}</Text>
				</VStack>
			</ScaleFade>
		</VStack>
	);
}
