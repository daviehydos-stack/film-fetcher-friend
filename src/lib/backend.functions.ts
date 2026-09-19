import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { backendCreatePayment, backendAuthorizeContent, backendVerifyPayment } from './backend.server'

const customerSchema = z.object({
  name: z.string().trim().min(1).optional(),
  email: z.string().email().optional(),
  mobile: z.string().trim().min(9).optional(),
})

export const createPayment = createServerFn({ method: 'POST' })
  .validator(z.object({
    productId: z.string().trim().min(1),
    customer: customerSchema,
    provider: z.enum(['mpesa', 'card']),
  }))
  .handler(async ({ data }) => backendCreatePayment(data as any))

export const verifyPayment = createServerFn({ method: 'POST' })
  .validator(z.object({ reference: z.string().trim().min(1) }))
  .handler(async ({ data }) => backendVerifyPayment(data.reference))

export const authorizeContent = createServerFn({ method: 'POST' })
  .validator(z.object({
    customerId: z.string().trim().min(1),
    contentId: z.string().trim().min(1),
    seasonId: z.string().trim().min(1).optional(),
  }))
  .handler(async ({ data }) => backendAuthorizeContent(data as any))
