import { PrismaClient } from "@/generated/prisma";
const globalForPrisma = global
as unknown as {
prisma: PrismaClient
}
const prisma
=
globalforPrisma-prisma
if (process. env. NODE_ENV !== 'production') globa
export default
prisma
I new PrismaClient ()
Prisma-prisma = prisma