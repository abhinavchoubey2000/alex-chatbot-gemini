import { VStack, Text, HStack, Image } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import Logo from "@/assets/logo-circle.png";
import { ScaleFade } from "@chakra-ui/transition";
import { themes } from "../../../../components/ui/themes";

export function AIMessage({ message, currentTheme }: AIMessageProps_Interface) {
	return (
		<VStack display={"inline-flex"} alignSelf={"flex-start"} maxWidth={"90%"}>
			<ScaleFade initialScale={0.9} in>
				<VStack
					spaceY={2}
					display={"inline-flex"}
					width={"100%"}
					bg={themes[currentTheme].aiChatBg}
					color={"white"}
					px={2}
					py={2}
					alignItems={"flex-start"}
					borderRadius={10}
				>
					<HStack>
						<Image src={Logo} height={5} width={5} />
						<Text
							fontSize={"xs"}
							color={"white"}
							letterSpacing={2}
							fontWeight={"bold"}
							textShadow={"0px 0px 14px white"}
							fontFamily={`"Kaushan Script", cursive`}
						>
							Alex
						</Text>
					</HStack>
					<ReactMarkdown>{message}</ReactMarkdown>
				</VStack>
			</ScaleFade>
		</VStack>
	);
}
