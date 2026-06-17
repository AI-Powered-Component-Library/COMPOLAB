export class BaseAgent {
  constructor(model, systemPrompt) {
    this.model = model;
    this.systemPrompt = systemPrompt;
  }

  async stream(prompt) {
    return this.model.stream([
      {
        role: "system",
        content: this.systemPrompt,
      },
      {
        role: "user",
        content: prompt,
      },
    ]);
  }
}