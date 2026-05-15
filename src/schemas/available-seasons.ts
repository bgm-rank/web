import { z } from "zod";

export const SeasonSchema = z.object({
  season_id: z.number(),
  year: z.number(),
  season: z.enum(["WINTER", "SPRING", "SUMMER", "FALL"]),
  name: z.string().nullable(),
  updated_at: z.string(),
});

export type Season = z.infer<typeof SeasonSchema>;

export const SeasonsSchema = z.array(SeasonSchema).min(1);
export type Seasons = z.infer<typeof SeasonsSchema>;
