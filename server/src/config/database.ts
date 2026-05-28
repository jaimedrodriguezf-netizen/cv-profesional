import 'dotenv/config';

export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'cv_profesional',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  dialect: 'mysql' as const,
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
