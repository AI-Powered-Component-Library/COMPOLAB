import { ChatMistralAI } from "@langchain/mistralai";

import { ComponentAgent } from "../agents/component.agent.js";
import { WebsiteBuilderAgent } from "../agents/website.agent.js";

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

const componentAgent = new ComponentAgent(model);
const websiteAgent = new WebsiteBuilderAgent(model);

export const streamComponent = async (prompt) => {
  return componentAgent.stream(prompt);
};

export const streamWebsite = async (prompt) => {
  return websiteAgent.stream(prompt);
};