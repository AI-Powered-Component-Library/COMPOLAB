import { aiPromptSchema } from "../validators/ai.validator.js";
import { generateComponentCode } from "../services/ai.service.js";
import { APIResponse } from "../middlewares/response.middleware.js";


export const generateAIComponent = async (req, res) => {
  const validation = aiPromptSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      errors: validation.error.errors,
    });
  }

  const { prompt } = validation.data;

  const generatedCode = await generateComponentCode(prompt);

  return res.status(200).json(
    new APIResponse(true, "Component generated successfully", {
      code: generatedCode,
    })
  );
};