import OpenAI from "openai";
import { internalAction, internalMutation, query } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { missingEnvVariableUrl } from "./utils";

export const openaiKeySet = query({
  args: {},
  handler: async () => {
    return !!process.env.OPENAI_API_KEY;
  },
});

export const summary = internalAction({
  args: {
    id: v.id("notes"),
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, { id, title, content }) => {
    const prompt = `Take in the following note and return a summary: Title: ${title}, Note content: ${content}`;

    // const apiKey = process.env.OPENAI_API_KEY;
    const apiKey = process.env.TOGETHER_API_KEY;
    if (!apiKey) {
      const error = missingEnvVariableUrl(
        "OPENAI_API_KEY",
        "https://platform.openai.com/account/api-keys",
      );
      console.error(error);
      await ctx.runMutation(internal.openai.saveSummary, {
        id: id,
        summary: error,
      });
      return;
    }
    const baseURL = "https://api.together.xyz/v1" 
    // const modelName = "google/gemma-2-27b-it"
    const modelName = "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"

    const openai = new OpenAI({ baseURL, apiKey });
    const output = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            'You are a helpful assistant designed to output JSON in this format: {"summary": string}.',
        },
        { role: "user", content: prompt },
      ],
      model: modelName,
      response_format: { type: "json_object" },
    });

    // Pull the message content out of the response
    const messageContent = output.choices[0]?.message.content;

    console.log({ messageContent });

    const parsedOutput = JSON.parse(messageContent!);
    console.log({ parsedOutput });

    await ctx.runMutation(internal.openai.saveSummary, {
      id: id,
      summary: parsedOutput.summary,
    });
  },
});

export const saveSummary = internalMutation({
  args: {
    id: v.id("notes"),
    summary: v.string(),
  },
  handler: async (ctx, { id, summary }) => {
    await ctx.db.patch(id, {
      summary: summary,
    });
  },
});
