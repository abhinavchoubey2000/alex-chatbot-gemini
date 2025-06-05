// Types
type Message_Type = string;
type ChatOf_Type = "ai" | "user";
type CurrentTheme_Type = "red" | "black" | "blue" | "green";
type SetCurrentTheme_Type = (value: CurrentThemeType) => void;
type PromptText_Type = string;
type SetPromptText_Type = (value: PromptText_Type) => void;
type Chat_Type = { chatOf: ChatOf_Type; message: Message_Type };
type ChatArray_Type = Array<Chat_Type>;
type SetChatArray_Type = React.Dispatch<React.SetStateAction<ChatArray_Type>>;

// Component Props Interfaces
interface HeaderProps_Interface {
	currentTheme: CurrentTheme_Type;
	setCurrentTheme: SetCurrentTheme_Type;
}
interface PromptInputProps_Interface {
	promptText: PromptText_Type;
	setPromptText: SetPromptText_Type;
	chatArray: ChatArray_Type;
	setChatArray: SetChatArray_Type;
	currentTheme: CurrentTheme_Type;
}
interface ChatBodyProps_Interface {
	chatArray: ChatArray_Type;
	currentTheme: CurrentTheme_Type;
}
interface AIMessageProps_Interface {
	message: Message_Type;
	currentTheme: CurrentTheme_Type;
}
interface UserMessageProps_Interface {
	message: Message_Type;
	currentTheme: CurrentTheme_Type;
}
interface SpinnerProps_Interface {
	currentTheme: CurrentTheme_Type;
}
