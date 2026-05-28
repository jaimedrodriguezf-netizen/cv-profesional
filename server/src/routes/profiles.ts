import type { FastifyInstance } from 'fastify';
import type { InferCreationAttributes } from 'sequelize';
import { Profile } from '../models/Profile.js';

export async function profileRoutes(app: FastifyInstance) {
  app.get('/api/profiles', async () => {
    const profiles = await Profile.findAll({
      where: { isActive: true },
      order: [['createdAt', 'DESC']],
    });
    return profiles;
  });

  app.get<{ Params: { slug: string } }>('/api/profiles/:slug', async (req, reply) => {
    const { slug } = req.params;
    const profile = await Profile.findOne({ where: { slug } });
    if (!profile) {
      return reply.status(404).send({ error: 'Profile not found' });
    }
    return profile;
  });

  app.post<{ Body: InferCreationAttributes<Profile> }>('/api/profiles', async (req, reply) => {
    const data = req.body;
    const existing = await Profile.findOne({ where: { slug: data.slug } });
    if (existing) {
      return reply.status(409).send({ error: 'Profile with this slug already exists' });
    }
    const profile = await Profile.create(data);
    return reply.status(201).send(profile);
  });

  app.put<{ Params: { slug: string }; Body: Partial<InferCreationAttributes<Profile>> }>('/api/profiles/:slug', async (req, reply) => {
    const { slug } = req.params;
    const data = req.body;
    const [updated] = await Profile.update(data, { where: { slug } });
    if (!updated) {
      return reply.status(404).send({ error: 'Profile not found' });
    }
    const profile = await Profile.findOne({ where: { slug } });
    return profile;
  });

  app.delete<{ Params: { slug: string } }>('/api/profiles/:slug', async (req, reply) => {
    const { slug } = req.params;
    const deleted = await Profile.destroy({ where: { slug } });
    if (!deleted) {
      return reply.status(404).send({ error: 'Profile not found' });
    }
    return reply.status(204).send();
  });

  app.post<{ Params: { slug: string } }>('/api/profiles/:slug/photo', async (req, reply) => {
    const { slug } = req.params;
    const file = await req.file();
    if (!file) {
      return reply.status(400).send({ error: 'No file uploaded' });
    }
    const buffer = await file.toBuffer();
    const ext = file.filename.split('.').pop() || 'jpg';
    const filename = `${slug}_${Date.now()}.${ext}`;
    const { writeFileSync, mkdirSync, existsSync } = await import('fs');
    const { join } = await import('path');
    const uploadDir = join(process.cwd(), 'uploads');
    if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
    const filepath = join(uploadDir, filename);
    writeFileSync(filepath, buffer);
    const photoUrl = `/uploads/${filename}`;
    await Profile.update({ photoUrl }, { where: { slug } });
    return { photoUrl };
  });

  app.get<{ Params: { slug: string } }>('/api/profiles/:slug/duplicate', async (req, reply) => {
    const { slug } = req.params;
    const original = await Profile.findOne({ where: { slug } });
    if (!original) {
      return reply.status(404).send({ error: 'Profile not found' });
    }
    const dupSlug = `${slug}_copy`;
    const existing = await Profile.findOne({ where: { slug: dupSlug } });
    if (existing) {
      return reply.status(409).send({ error: 'A copy already exists. Delete it first.' });
    }
    const copy = await Profile.create({
      ...original.toJSON(),
      slug: dupSlug,
      name: `${original.name} (Copia)`,
    } as InferCreationAttributes<Profile>);
    return reply.status(201).send(copy);
  });
}
