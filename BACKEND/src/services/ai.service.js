import { openai } from "../configs/env.config.js";

export const generateComponentCode = async (prompt) => {
  const systemPrompt = `
    You are an expert React.js and Tailwind CSS developer.

Generate:
- Clean production-ready React component
- Responsive UI
- Tailwind CSS only
- Functional component only
- No explanations
- Return code only
- No markdown formatting
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  const generatedCode = completion.choices[0]?.message?.content;
  console.log("gernated code ", generatedCode);
  return generatedCode;
};
