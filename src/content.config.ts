import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const lessons = defineCollection({
  loader: glob({
    base: "./src/content/lessons",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    course: z.enum([
      "fisicoquimica",
      "fisica",
      "matematicas",
      "experimentos",
      "aplicaciones",
    ]),

    module: z.string(),
    order: z.number().int().positive(),

    level: z.enum([
      "inicial",
      "basico",
      "intermedio",
      "avanzado-secundario",
    ]),

    cycle: z.enum([
      "basico",
      "orientado",
      "ambos",
    ]),

    yearsApprox: z
      .array(z.number().int().min(1).max(7))
      .default([]),

    jurisdictions: z
      .array(
        z.enum([
          "nacional",
          "caba",
          "pba",
          "otras",
        ]),
      )
      .default([]),

    prerequisites: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),

    hasExercises: z.boolean().default(false),
    hasQuiz: z.boolean().default(false),
    hasExperiment: z.boolean().default(false),

    deepening: z.boolean().default(false),

    status: z
      .enum([
        "draft",
        "review",
        "complete",
      ])
      .default("draft"),
  }),
});

export const collections = {
  lessons,
};
