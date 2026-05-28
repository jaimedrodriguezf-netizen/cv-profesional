import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize';
import { sequelize } from '../db.js';

export interface ExperienceEntry {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export interface ProjectEntry {
  name: string;
  role: string;
  description: string;
  impact: string;
  stack: string;
  link: string;
}

export interface EducationEntry {
  title: string;
  school: string;
  date: string;
}

export interface ReferenceEntry {
  name: string;
  role: string;
  phone: string;
}

export interface EmailTemplate {
  to: string;
  subject: string;
  body: string;
}

export interface GapAnalysis {
  title: string;
  items: string[];
}

export class Profile extends Model<InferAttributes<Profile>, InferCreationAttributes<Profile>> {
  declare id: CreationOptional<number>;
  declare slug: string;
  declare name: string;
  declare fullName: string;
  declare title: string;
  declare specialty: string;
  declare location: string;
  declare email: string;
  declare phone: string;
  declare summary: string;
  declare experience: ExperienceEntry[];
  declare projects: ProjectEntry[];
  declare education: EducationEntry[];
  declare skills: string[];
  declare certifications: string[];
  declare references: ReferenceEntry[];
  declare emailTemplate: EmailTemplate;
  declare gapAnalysis: GapAnalysis;
  declare photoUrl: CreationOptional<string | null>;
  declare isActive: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    experience: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    projects: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    education: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    skills: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    certifications: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    references: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    emailTemplate: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    gapAnalysis: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    photoUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: 'profiles',
    timestamps: true,
  },
);
