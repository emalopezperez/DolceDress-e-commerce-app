# Description

## Run in Development

1. Clone the repository.
2. Create a copy of `.env.template` and rename it to `.env`, then change the environment variables.
3. Install dependencies with `npm install`.
4. Start the database with `docker compose up -d`.
5. Run Prisma migrations with `npx prisma migrate dev`.
6. Execute seed with `npm run seed`.
7. Start the project with `npm run dev`.

## Run in Production

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
