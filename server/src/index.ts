import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import multipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from './db.js';
import { profileRoutes } from './routes/profiles.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isDev = process.env.NODE_ENV !== 'production';
const PORT = Number(process.env.PORT) || 3001;

const app = Fastify({ logger: true });

await app.register(helmet, { contentSecurityPolicy: false });
await app.register(cors, { origin: isDev ? 'http://localhost:5173' : true });
await app.register(rateLimit, { max: 100, timeWindow: '1 minute' });
await app.register(multipart, { limits: { fileSize: 5 * 1024 * 1024 } });

app.register(profileRoutes);

await app.register(fastifyStatic, {
  root: join(__dirname, '../../uploads'),
  prefix: '/uploads/',
  decorateReply: false,
});

if (!isDev) {
  await app.register(fastifyStatic, {
    root: join(__dirname, '../../dist'),
    prefix: '/',
  });

  app.setNotFoundHandler((_req, reply) => {
    reply.sendFile('index.html');
  });
}

try {
  await sequelize.authenticate();
  app.log.info('MySQL connected');

  await sequelize.sync({ alter: isDev });
  app.log.info('Tables synced');

  await app.listen({ port: PORT, host: '0.0.0.0' });
  app.log.info(`Server running on port ${PORT}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
