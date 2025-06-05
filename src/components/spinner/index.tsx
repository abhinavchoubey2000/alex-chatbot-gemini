import { ProgressCircle } from "@chakra-ui/react";
import { themes } from "../ui/themes";

export function Spinner({ currentTheme }: SpinnerProps_Interface) {
	return (
		<ProgressCircle.Root value={null} size="sm">
			<ProgressCircle.Circle css={{ "--thickness": "2px" }}>
				<ProgressCircle.Track stroke={themes[currentTheme].menu} />
				<ProgressCircle.Range />
			</ProgressCircle.Circle>
		</ProgressCircle.Root>
	);
}
