import { z } from 'zod'

export const AccountForm = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  phone: z.string().min(10, 'Phone number must be 10 digits'),
  defaultMap: z.string().nonempty('Default map is required'),
  coordinatesFormat: z.string().nonempty('Coordinates format is required'),
  speedUnit: z.string().nonempty('Speed unit is required'),
  distanceUnit: z.string().nonempty('Distance unit is required'),
  altitudeUnit: z.string().nonempty('Altitude unit is required'),
  volumeUnit: z.string().nonempty('Volume unit is required'),
  latitude: z
    .number()
    .min(-90, 'Latitude must be between -90 and 90')
    .max(90, 'Latitude must be between -90 and 90'),
  longitude: z
    .number()
    .min(-180, 'Longitude must be between -180 and 180')
    .max(180, 'Longitude must be between -180 and 180'),
  zoom: z.number().int().min(-180).max(180),
  expiration: z.string().nonempty('Expiration date is required'),
  deviceLimit: z
    .number()
    .min(-1000, 'Device limit must be at least -1000')
    .max(1000, 'Device limit must be at most 1000'),
  userLimit: z
    .number()
    .min(-1000, 'User limit must be at least -1000')
    .max(1000, 'User limit must be at most 1000'),
})

export type daccountForm = z.infer<typeof AccountForm>
