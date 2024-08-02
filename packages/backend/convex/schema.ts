import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  notes: defineTable({
    userId: v.string(),
    title: v.string(),
    content: v.string(),
    summary: v.optional(v.string()),
  }),
  textbooks: defineTable({
    title: v.string(),
    description: v.string(),
    language: v.string(),
    chapters: v.array(v.object({
      chapterName: v.string(),
      chapterIndex: v.string(),
      chapterDescription: v.string(),
      sections: v.array(v.object({
        sectionName: v.string(),
        sectionIndex: v.string(),
        sectionDescription: v.string(),
        sectionKeywords: v.optional(v.array(v.string())),
      })),
    })),
  }),
});

interface Section {
  sectionName: string;
  sectionIndex: string;
  sectionDescription: string;
}
interface Chapter {
  chapterName: string;
  chapterIndex: string;
  chapterDescription: string;
  sections: Section[];
}

interface TextBook {
  title: string;
  description: string;
  language: string;
  chapters: Chapter[];
}

const exampleChapter: Chapter = {
  chapterName: "Introduction to Physics",
  chapterIndex: "1",
  chapterDescription: "This chapter introduces the fundamental concepts of physics.",
  sections: [
    {
      sectionName: "What is Physics?",
      sectionIndex: "1.1",
      sectionDescription: "This section defines physics and its importance.",
    },
    // More sections...
  ],
};

const exampleTextbook: TextBook = {
  title: "Physics for Beginners",
  description: "An introductory textbook for students new to physics.",
  language: "English",
  chapters: [
    exampleChapter, 
    // More chapters...
  ],
};
