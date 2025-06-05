import { Text, Box } from "@chakra-ui/react";

export function Landing() {
	return (
		<Box
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			width={"100%"}
			height={"74vh"}
		>
			<Box
				bg={"white"}
				borderRadius={"10%"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				flexDirection={"column"}
				height={"80%"}
				width={"80%"}
			>
				<Text fontSize={"4xl"} fontWeight={"bold"}>
					👋🏻Hi, I am Alex!
				</Text>
				<Text fontSize={"2xl"}>Your freelancing guide</Text>
				<Text py={10}>Ask whatever you want to ask, I am here to help</Text>
			</Box>
		</Box>
	);
}
