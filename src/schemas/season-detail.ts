import { z } from "zod";

export const SubjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  name_cn: z.string(),
  images_large: z.string(),
  images_grid: z.string(),
  score: z.number().nullable(),
  rank: z.number().int().min(1),
  collection_total: z.number(),
  average_comment: z.number(),
  drop_rate: z.number().min(0).max(1),
  air_weekday: z.string().nullable(),
  meta_tags: z.array(z.string()),
});

export type Subject = z.infer<typeof SubjectSchema>;

export const SeasonDetailSchema = z.object({
  subjects: z.array(SubjectSchema),
  updated_at: z.string(),
});

export type SeasonDetail = z.infer<typeof SeasonDetailSchema>;
