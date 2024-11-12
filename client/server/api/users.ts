import type { User } from '~/types/user'

export default defineEventHandler(async () => {
  return await $fetch<User[]>('http://nginx/api/users')
})
