import { ComponentGenerator } from "../services/ai.service.js";
import { AppError, asyncHandler } from "../utils/error.utils.js";

export const generateComponent = asyncHandler(async (req, res) => {

    const { prompt } = req.body;

    res.setHeader("Content-Type", "text/event-stream")
    res.setHeader("Cache-Control", "no-cache")
    res.setHeader("Connection", "keep-alive")

    let usage = {}

    const { stream, user } = await ComponentGenerator({ prompt, userId: req.user.id })

    for await (const chunk of stream) {
        res.write(`chunk: ${JSON.stringify({ response: chunk[0].contentBlocks[0].text })}\n\n`);
        usage = chunk[0].usage_metadata
    }

    let deductToken = Math.round((usage.total_tokens - 4600) / 10)

    console.log("Deducted Token : ", deductToken)

    if (user.role === "user") {
        user.aiCredits -= deductToken;
        // await user.save();
    }

    res.write(`data: ${JSON.stringify({ type: "done" })}\n\n`)
    res.end()
})