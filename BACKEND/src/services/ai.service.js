import { ChatMistralAI } from "@langchain/mistralai";

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

export const streamComponent = async (prompt) => {
  return model.stream([
    {
      role: "system",
      content: `
You are an expert React and Tailwind CSS component generator.

Rules:
- Generate complete React functional components.
- Include import React from "react";
- Export default component.
- Use Tailwind CSS classes only.
- Never use inline styles.
- Never use CSS files.
-Components must be production-ready.
- Never use styled-components.
- Use modern Tailwind UI patterns.
- Components should be responsive.
- Return only code.
- No explanations.
- No markdown.
- No \`\`\`.
`,
    },
    {
      role: "user",
      content: prompt,
    },
  ]);
};