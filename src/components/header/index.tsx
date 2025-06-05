import {
	HStack,
	VStack,
	Text,
	Image,
	IconButton,
	Menu,
	Portal,
} from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/transition";
import { Menu as MenuIcon, ArrowLeft } from "lucide-react";
import Logo from "@/assets/logo-circle.png";
import { useState } from "react";
import { themes } from "../../components/ui/themes";

export function Header({
	currentTheme,
	setCurrentTheme,
}: HeaderProps_Interface) {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	function changeTheme(theme:CurrentTheme_Type){
		setCurrentTheme(theme)
		setIsMenuOpened(false)
	}
	return (
		<VStack bg={"#30303070"} py={2} px={4} position={"relative"}>
			<HStack width={"100%"} justifyContent={"space-between"}>
				<HStack spaceX={2}>
					<Image src={Logo} height={14} width={14} />

					<Text
						color={"white"}
						fontSize={"4xl"}
						textShadow={"0px 0px 14px white"}
						fontFamily={`"Kaushan Script", cursive`}
						letterSpacing={4}
					>
						Alex
					</Text>
				</HStack>

				<Menu.Root positioning={{ placement: "left-end" }}>
					<Menu.Trigger asChild>
						<IconButton
							border={"none"}
							outline={"none"}
							size={"2xl"}
							bg={"transparent"}
							width={12}
							height={12}
							onClick={() => setIsMenuOpened(!isMenuOpened)}
						>
							<ScaleFade initialScale={0.9} in>
								{isMenuOpened ? (
									<ArrowLeft size={22} color={themes[currentTheme].menu} />
								) : (
									<MenuIcon size={22} color={themes[currentTheme].menu} />
								)}
							</ScaleFade>
						</IconButton>
					</Menu.Trigger>
					<Portal>
						<Menu.Positioner>
							<Menu.Content>
								<Menu.Item value="black" onClick={() => changeTheme("black")}>
									Default(Black)
								</Menu.Item>
								<Menu.Item
									color={"#c20000"}
									value="red"
									onClick={() => changeTheme("red")}
								>
									Red Draculla
								</Menu.Item>
								<Menu.Item
									color={"#45ff00"}
									value="green"
									onClick={() => changeTheme("green")}
								>
									Green Leaf
								</Menu.Item>
								<Menu.Item
									color={"#6990ff"}
									value="blue"
									onClick={() => changeTheme("blue")}
								>
									Sky Blue
								</Menu.Item>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu.Root>
			</HStack>
		</VStack>
	);
}
