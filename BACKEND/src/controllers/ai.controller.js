import { getStream } from "../services/ai.service.js";

export async function handleMessage(req, res) {
  const message = req.body.message;

  const messages = [
    {
      role: "user",
      content: message,
    },
  ];

  const stream = await getStream(messages);

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  for await (const chunk of stream) {
    const aiChunk = chunk.content;
    console.log("chunk", aiChunk);

    res.write(`data: ${JSON.stringify({ chunk: aiChunk })}\n\n`);
  }

  res.end();
}
