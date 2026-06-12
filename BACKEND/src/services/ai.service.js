import { ChatMistralAI } from "@langchain/mistralai";
import { MISTRAL_API_KEY } from "../configs/env.config.js";

const model = new ChatMistralAI({
  model: "mistral-medium-latest",
  apiKey: MISTRAL_API_KEY,
});

export async function generateResponse(messages) {
  const response = await model.invoke(messages);
  return response.content;
}

export async function getStream(messages) {
  const stream = await model.stream(messages);
  return stream;
}
