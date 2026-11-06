import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

declare const process: { env: Record<string, string | undefined> };
export default defineConfig({
  out: './src/db/drizzle',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
});
