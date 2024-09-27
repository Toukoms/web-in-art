import { z } from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.').max(240, 'Title must be less than 240 characters.'),
  description: z.string().min(20, 'Description must be at least 20 characters.').max(1000, 'Description must be at least 1000 characters.'),
  location: z.string().min(3, 'Location must be at least 3 characters.').max(400, 'Location must be at least 400 characters.'),
  imageUrl: z.string().url(),
  categoryId: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  isFree: z.boolean(),
  price: z.string(),
  url: z.string().url(),
})