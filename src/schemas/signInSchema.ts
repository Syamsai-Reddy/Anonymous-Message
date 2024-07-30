import { z } from 'zod'

export const signInSchema = z.object({
  identifier: z.string(),    //email/username our wish
  password: z.string(),
});
