import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { streamComponent, streamWebsite } from "../services/ai.service.js";

export const streamComponentController = asyncHandler(
  async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const stream = await streamComponent(prompt);

    for await (const chunk of stream) {
      if (!chunk.content) continue;

      res.write(
        `data: ${JSON.stringify({
          type: "chunk",
          content: chunk.content,
        })}\n\n`
      );
    }

    res.write(
      `data: ${JSON.stringify({
        type: "done",
      })}\n\n`
    );

    res.end();
  }
);




export const streamWebsiteController = asyncHandler(
  async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }


    const stream = await streamWebsite(prompt);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of stream) {
      if (!chunk.content) continue;

      res.write(
        `data: ${JSON.stringify({
          type: "chunk",
          content: chunk.content,
        })}\n\n`
      );
    }

    res.write(
      `data: ${JSON.stringify({
        type: "done",
      })}\n\n`
    );

    res.end();
  }
);