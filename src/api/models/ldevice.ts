import { z } from 'zod'

export const DevicesFSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  identifier: z.string().nonempty('Identifier is required'),
  extra: z.string().optional(),
  attributes: z.string().optional(),
})

export type DevicesForm = z.infer<typeof DevicesFSchema>
