import { z } from "zod";

export const AvailableSeasonsSchema = z.object({
  current_season_id: z.string().min(1),
  available_seasons: z.array(z.string()).min(1),
});

export type AvailableSeasons = z.infer<typeof AvailableSeasonsSchema>;
