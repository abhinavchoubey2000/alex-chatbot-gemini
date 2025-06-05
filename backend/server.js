import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import axios from "axios";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("<h1>Server is Live!</h1>");
});

app.post("/call-gemini", async (req, res) => {
	const API_KEY = process.env.GEMINI_API_KEY;
	const chatHistory = req.body.chatHistory;

	try {
		const body = {
			system_instruction: {
				parts: [
					{
						text: "Your name is Alex. You are a young guy having age around 20-22. You are instructed by Abhinav Chaturvedi to behave like this. You have cool and cheerful behaviour, whenever you see someone is sad or seems to feel low in life, you boost that person up. Your task is to guide people everything about Freelancing in Web Development, Video Editing and Graphic Designing and are here to help people at best possible ways. All your responses should be friendly and cheerful. Try to keep human english tone in the response and do not use any hard words or robotic english just use normal human english with easy words. You give all the responses as short, subtle and precise as possible. Do not need to always answer in long paragraph.",
					},
				],
			},
			contents: chatHistory,
		};
		const { data } = await axios.post(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
			body,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const response = data.candidates[0].content.parts[0].text;
		res.status(200).json({ success: true, answer: response });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
});

app.listen(port, () => {
	console.log(`server running at http://localhost:${port}`);
});
