import * as z from 'zod';

const UserSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, 'First name is required')
    .min(3, 'First name must be at least 3 characters long'),
  last_name: z
    .string()
    .trim()
    .min(1, 'Last name is required')
    .min(3, 'Last name must be at least 3 characters long'),
  email: z.string().email({message: 'Invalid email address'}),
});

export {UserSchema};
