import { z } from "zod";

export const SubjectSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  name_cn: z.string().nullable(),
  images_large: z.string().nullable(),
  images_grid: z.string().nullable(),
  score: z.number().nullable(),
  rank: z.number().int().min(1).nullable(),
  collection_total: z.number().nullable(),
  average_comment: z.number().nullable(),
  drop_rate: z.number().min(0).max(1).nullable(),
  air_weekday: z.string().nullable(),
  meta_tags: z.array(z.string()),
  media_type: z.string().nullable(),
  rating: z.string().nullable(),
});

export type Subject = z.infer<typeof SubjectSchema>;

export const SubjectsSchema = z.array(SubjectSchema);
export type Subjects = z.infer<typeof SubjectsSchema>;
