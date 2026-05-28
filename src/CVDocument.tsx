import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { CVProject } from './profiles/base';

interface CVExperience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

interface CVEducation {
  title: string;
  school: string;
  date: string;
}

interface CVReference {
  name: string;
  role: string;
  phone: string;
}

interface CVData {
  personalInfo: {
    fullName: string;
    title: string;
    location: string;
    email: string;
    phone: string;
  };
  summary: string;
  experience: CVExperience[];
  projects: CVProject[];
  education: CVEducation[];
  skills: string[];
  certifications: string[];
  references: CVReference[];
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    fontSize: 10.5,
    fontFamily: 'Helvetica',
  },
  sidebarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '32%',
    backgroundColor: '#111827',
    borderRight: '1pt solid #334155',
    zIndex: -1,
  },
  sidebar: {
    width: '32%',
    padding: 25,
    paddingTop: 0,
    paddingBottom: 40,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 20,
    border: '2pt solid #38bdf8',
    alignSelf: 'center',
  },
  mainContent: {
    width: '68%',
    padding: 25,
    paddingTop: 0, // El margen ahora lo da el fixed header
    paddingBottom: 40,
    backgroundColor: '#1e293b',
  },
  headerSpacer: {
    height: 40,
    width: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#f8fafc',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 11,
    color: '#38bdf8',
    marginBottom: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#f8fafc',
    borderBottom: '1pt solid #334155',
    paddingBottom: 5,
    marginBottom: 15,
    marginTop: 0, // Eliminado para evitar desalineación en saltos de hoja
    textTransform: 'uppercase',
  },
  sectionContainer: {
    marginBottom: 25, // Espaciado entre secciones movido aquí
  },
  contactItem: {
    marginBottom: 8,
    color: '#cbd5e1',
    fontSize: 9.5,
  },
  skillTag: {
    backgroundColor: '#1e3a5f',
    color: '#38bdf8',
    padding: '4px 8px',
    borderRadius: 6,
    marginBottom: 6,
    marginRight: 6,
    fontSize: 8.5,
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  timelineItem: {
    marginBottom: 20,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#f8fafc',
    width: '75%',
  },
  itemDate: {
    fontSize: 9.5,
    color: '#38bdf8',
    fontWeight: 'bold',
  },
  itemCompany: {
    color: '#94a3b8',
    fontSize: 11,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  itemDesc: {
    color: '#cbd5e1',
    lineHeight: 1.5,
    marginBottom: 5,
    fontSize: 10,
  },
  projectLink: {
    color: '#38bdf8',
    fontSize: 9,
    marginTop: 3,
  },
  
  // ATS Styles
  atsPage: {
    padding: 40,
    fontFamily: 'Times-Roman',
    fontSize: 11,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  atsHeader: {
    textAlign: 'center',
    borderBottom: '2pt solid #000000',
    paddingBottom: 12,
    marginBottom: 20,
  },
  atsName: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  atsContact: {
    fontSize: 10.5,
    marginTop: 5,
  },
  atsSectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    borderBottom: '1pt solid #666666',
    marginBottom: 10,
    marginTop: 20,
    textTransform: 'uppercase',
  },
  atsItem: {
    marginBottom: 12,
  },
  atsItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  atsItemTitle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  atsItemCompany: {
    fontStyle: 'italic',
    marginBottom: 6,
    fontSize: 11,
  },
  atsDescLine: {
    marginBottom: 4,
    paddingLeft: 10,
    lineHeight: 1.4,
  }
});

export const CVDocument = ({ profile, mode, profileImage }: { profile: CVData, mode: 'modern' | 'ats', profileImage: string | null }) => {
  if (mode === 'ats') {
    return (
      <Document>
        <Page size="A4" style={styles.atsPage}>
          <View style={styles.atsHeader}>
            <Text style={styles.atsName}>{profile.personalInfo.fullName}</Text>
            <Text style={styles.atsContact}>{profile.personalInfo.location} | {profile.personalInfo.phone} | {profile.personalInfo.email}</Text>
          </View>

          <View style={styles.atsItem}>
            <Text style={styles.atsSectionTitle}>RESUMEN PROFESIONAL</Text>
            <Text style={styles.atsDescLine}>{profile.summary}</Text>
          </View>

          {profile.projects.length > 0 && (
            <View style={styles.atsItem}>
              <Text style={styles.atsSectionTitle}>PROYECTOS DESTACADOS</Text>
              {profile.projects.map((project, idx: number) => (
                <View key={idx} style={styles.atsItem} wrap={false}>
                  <View style={styles.atsItemHeader}>
                    <Text style={styles.atsItemTitle}>{project.name}</Text>
                    <Text>{project.role}</Text>
                  </View>
                  <Text style={styles.atsItemCompany}>{project.link}</Text>
                  <Text style={styles.atsDescLine}>• {project.description}</Text>
                  <Text style={styles.atsDescLine}>• Impacto: {project.impact}</Text>
                  <Text style={styles.atsDescLine}>• Stack: {project.stack}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={styles.atsItem}>
            <Text style={styles.atsSectionTitle}>EXPERIENCIA LABORAL</Text>
            {profile.experience.map((exp, idx: number) => (
              <View key={idx} style={styles.atsItem} wrap={false}>
                <View style={styles.atsItemHeader}>
                  <Text style={styles.atsItemTitle}>{exp.title}</Text>
                  <Text>{exp.date}</Text>
                </View>
                <Text style={styles.atsItemCompany}>{exp.company}</Text>
                {exp.description.map((line: string, i: number) => (
                  <Text key={i} style={styles.atsDescLine}>• {line}</Text>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.atsItem}>
            <Text style={styles.atsSectionTitle}>EDUCACIÓN</Text>
            {profile.education.map((edu, idx: number) => (
              <View key={idx} style={styles.atsItem} wrap={false}>
                <View style={styles.atsItemHeader}>
                  <Text style={styles.atsItemTitle}>{edu.title}</Text>
                  <Text>{edu.date}</Text>
                </View>
                <Text style={styles.atsItemCompany}>{edu.school}</Text>
              </View>
            ))}
          </View>

          <View style={styles.atsItem}>
            <Text style={styles.atsSectionTitle}>SKILLS TÉCNICAS</Text>
            <Text style={styles.atsDescLine}>{profile.skills.join(', ')}</Text>
          </View>

          <View style={styles.atsItem}>
            <Text style={styles.atsSectionTitle}>CERTIFICACIONES</Text>
            {profile.certifications.map((cert: string, idx: number) => (
              <Text key={idx} style={styles.atsDescLine}>• {cert}</Text>
            ))}
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View fixed style={styles.sidebarBackground} />
        
        <View style={styles.sidebar}>
          <View fixed style={styles.headerSpacer} />
          {profileImage && <Image src={profileImage} style={styles.profileImage} />}
          
          <Text style={styles.name}>{profile.personalInfo.fullName}</Text>
          <Text style={{ ...styles.title, marginBottom: 30 }}>{profile.personalInfo.title}</Text>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Contacto</Text>
            <Text style={styles.contactItem}>{profile.personalInfo.email}</Text>
            <Text style={styles.contactItem}>{profile.personalInfo.phone}</Text>
            <Text style={styles.contactItem}>{profile.personalInfo.location}</Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Skills Técnicas</Text>
            <View style={styles.skillContainer}>
              {profile.skills.map((skill: string, idx: number) => (
                <Text key={idx} style={styles.skillTag}>{skill}</Text>
              ))}
            </View>
          </View>

          <View style={styles.sectionContainer} break>
            <Text style={styles.sectionTitle}>Certificaciones</Text>
            {profile.certifications.map((cert: string, idx: number) => (
              <Text key={idx} style={styles.contactItem}>{cert}</Text>
            ))}
          </View>
        </View>

        <View style={styles.mainContent}>
          <View fixed style={styles.headerSpacer} />
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Perfil Profesional</Text>
            <Text style={{ ...styles.itemDesc, marginBottom: 10 }}>{profile.summary}</Text>
          </View>

          {profile.projects.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Proyectos Destacados</Text>
              {profile.projects.map((project, idx: number) => (
                <View key={idx} style={styles.timelineItem} wrap={false}>
                  <View style={styles.itemHeader}>
                    <Text style={styles.itemTitle}>{project.name}</Text>
                    <Text style={styles.itemDate}>{project.role}</Text>
                  </View>
                  <Text style={styles.itemDesc}>{project.description}</Text>
                  <Text style={styles.itemDesc}>• Impacto: {project.impact}</Text>
                  <Text style={styles.itemDesc}>• Stack: {project.stack}</Text>
                  <Text style={styles.projectLink}>{project.link}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
            {profile.experience.map((exp, idx: number) => (
              <View key={idx} style={styles.timelineItem} wrap={false}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{exp.title}</Text>
                  <Text style={styles.itemDate}>{exp.date}</Text>
                </View>
                <Text style={styles.itemCompany}>{exp.company}</Text>
                {exp.description.map((line: string, i: number) => (
                  <Text key={i} style={styles.itemDesc}>• {line}</Text>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.sectionContainer} break>
            <Text style={styles.sectionTitle}>Educación</Text>
            {profile.education.map((edu, idx: number) => (
              <View key={idx} style={styles.timelineItem} wrap={false}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{edu.title}</Text>
                  <Text style={styles.itemDate}>{edu.date}</Text>
                </View>
                <Text style={styles.itemCompany}>{edu.school}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Referencias</Text>
            {profile.references.map((ref, idx: number) => (
              <View key={idx} style={{ marginBottom: 8 }} wrap={false}>
                <Text style={styles.itemTitle}>{ref.name}</Text>
                <Text style={styles.itemCompany}>{ref.role}</Text>
                <Text style={styles.itemDesc}>Telf: {ref.phone}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
