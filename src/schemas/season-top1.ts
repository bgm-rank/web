import { z } from "zod";
import { SubjectSchema } from "./season-detail";

export const SeasonTop1ItemSchema = z.object({
  season_id: z.number(),
  subject: SubjectSchema,
});

export type SeasonTop1Item = z.infer<typeof SeasonTop1ItemSchema>;

export const SeasonsTop1Schema = z.array(SeasonTop1ItemSchema);
export type SeasonsTop1 = z.infer<typeof SeasonsTop1Schema>;
