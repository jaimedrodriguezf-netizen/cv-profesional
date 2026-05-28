import { useState, useRef } from 'react'
import './App.css'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  User, 
  Trophy,
  Download,
  ShieldCheck,
  Cpu,
  Users,
  Camera,
  Loader2,
  FileText,
  Layout,
  Copy,
  Check
} from 'lucide-react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { CVDocument } from './CVDocument'
import { profiles } from './profiles'

function App() {
  const [profileImage, setProfileImage] = useState<string | null>('/perfil.jpeg');
  const [copied, setCopied] = useState<'to' | 'subject' | 'body' | null>(null);
  const [viewMode, setViewMode] = useState<'modern' | 'ats'>('modern');
  const [selectedProfileId, setSelectedProfileId] = useState<string>('master');
  const [companyName, setCompanyName] = useState<string>('');
  const cvRef = useRef<HTMLDivElement>(null);

  const currentProfile = profiles[selectedProfileId].data;
  const currentEmail = profiles[selectedProfileId].emailTemplate;
  const currentGap = profiles[selectedProfileId].gapAnalysis;

  const handleCopy = async (text: string, type: 'to' | 'subject' | 'body') => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback para contextos no seguros (HTTP / IPs de Tailscale)
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className={`app-layout ${viewMode}-mode`}>
      {/* Toolbar */}
      <nav className="no-print top-bar">
        <div className="top-bar-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="app-logo">Career Hub Pro</span>
            <select 
              value={selectedProfileId}
              onChange={(e) => setSelectedProfileId(e.target.value)}
              style={{
                background: 'var(--bg-secondary)',
                color: 'var(--text-main)',
                border: '1px solid var(--border)',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                outline: 'none',
                cursor: 'pointer',
                maxWidth: '250px',
                fontSize: '0.85rem'
              }}
            >
              {Object.values(profiles).map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
            <input 
              type="text"
              placeholder="Nombre de la empresa..."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              style={{
                background: 'var(--bg-secondary)',
                color: 'var(--text-main)',
                border: '1px solid var(--border)',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                outline: 'none',
                fontSize: '0.85rem',
                minWidth: '180px'
              }}
            />
          </div>
          
          <div className="view-selector">
            <button 
              className={`view-btn ${viewMode === 'modern' ? 'active' : ''}`}
              onClick={() => setViewMode('modern')}
            >
              <Layout size={16} /> Moderno
            </button>
            <button 
              className={`view-btn ${viewMode === 'ats' ? 'active' : ''}`}
              onClick={() => setViewMode('ats')}
            >
              <FileText size={16} /> ATS-Friendly
            </button>
          </div>

          <PDFDownloadLink 
            document={<CVDocument profile={currentProfile} mode={viewMode} profileImage={profileImage} />} 
            fileName={`CV_Jaime_Rodriguez_${companyName ? companyName.replace(/\s+/g, '_') + '_' : ''}${viewMode.toUpperCase()}_${new Date().getFullYear()}.pdf`}
            className="export-btn-fixed"
            style={{ textDecoration: 'none' }}
          >
            {({ loading }) =>
              loading ? (
                <><Loader2 size={18} className="animate-spin" /> Generando...</>
              ) : (
                <><Download size={18} /> Descargar PDF</>
              )
            }
          </PDFDownloadLink>
        </div>
      </nav>

      <div className={`cv-container ${viewMode}-view`} ref={cvRef}>
        {viewMode === 'modern' ? (
          <>
            {/* Modern Sidebar */}
            <aside className="sidebar">
              <header style={{ position: 'relative', textAlign: 'center' }}>
                <div className="profile-image-container" style={{ position: 'relative', display: 'inline-block' }}>
                  <div style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    background: profileImage ? `url(${profileImage}) center/cover no-repeat` : 'linear-gradient(135deg, var(--accent) 0%, #0ea5e9 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '3rem',
                    color: 'var(--bg-primary)',
                    fontWeight: '800',
                    border: '3px solid var(--accent)',
                    overflow: 'hidden'
                  }}>
                    {!profileImage && "JR"}
                  </div>
                  
                  <label className="no-print camera-btn">
                    <Camera size={18} />
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                      style={{ display: 'none' }} 
                    />
                  </label>
                </div>
                
                <h1 className="name">{currentProfile.personalInfo.fullName}</h1>
                <p className="title">{currentProfile.personalInfo.title}</p>
              </header>

              <section className="section">
                <h2 className="section-title"><User size={20} /> Contacto</h2>
                <div className="contact-item"><Mail size={16} /> <span>{currentProfile.personalInfo.email}</span></div>
                <div className="contact-item"><Phone size={16} /> <span>{currentProfile.personalInfo.phone}</span></div>
                <div className="contact-item"><MapPin size={16} /> <span>{currentProfile.personalInfo.location}</span></div>
              </section>

              <section className="section">
                <h2 className="section-title"><Cpu size={20} /> Skills Técnicas</h2>
                <div className="skill-list">
                  {currentProfile.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </section>

              <section className="section">
                <h2 className="section-title"><ShieldCheck size={20} /> Certificaciones</h2>
                {currentProfile.certifications.map(cert => (
                  <div key={cert} className="contact-item"><span>{cert}</span></div>
                ))}
              </section>
            </aside>

            {/* Modern Main Content */}
            <main className="main-content">
              <section className="section">
                <h2 className="section-title"><User size={24} /> Perfil Profesional</h2>
                <p className="item-desc">{currentProfile.summary}</p>
              </section>

              {currentProfile.projects.length > 0 ? (
                <section className="section">
                  <h2 className="section-title"><Trophy size={24} /> Proyectos Destacados</h2>
                  <div className="projects-grid">
                    {currentProfile.projects.map((project, idx) => (
                      <article key={idx} className="project-card">
                        <div className="item-header">
                          <h3 className="item-title">{project.name}</h3>
                          <span className="item-date">{project.role}</span>
                        </div>
                        <p className="item-desc">{project.description}</p>
                        <p className="item-desc"><strong>Impacto:</strong> {project.impact}</p>
                        <p className="item-desc"><strong>Stack:</strong> {project.stack}</p>
                        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                          {project.link}
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="section">
                <h2 className="section-title"><Briefcase size={24} /> Experiencia Laboral</h2>
                {currentProfile.experience.map((exp, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="item-header">
                      <h3 className="item-title">{exp.title}</h3>
                      <span className="item-date">{exp.date}</span>
                    </div>
                    <span className="item-subtitle">{exp.company}</span>
                    <div className="item-desc">
                      {exp.description.map((line, lidx) => (
                        <div key={lidx} style={{ marginBottom: '0.5rem' }}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section className="section">
                <h2 className="section-title"><GraduationCap size={24} /> Educación</h2>
                {currentProfile.education.map((edu, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="item-header">
                      <h3 className="item-title">{edu.title}</h3>
                      <span className="item-date">{edu.date}</span>
                    </div>
                    <span className="item-subtitle">{edu.school}</span>
                  </div>
                ))}
              </section>

              <section className="section">
                <h2 className="section-title"><Users size={24} /> Referencias</h2>
                <div className="projects-grid">
                  {currentProfile.references.map((ref, idx) => (
                    <div key={idx} className="project-card">
                      <h3 className="item-title">{ref.name}</h3>
                      <p className="item-subtitle">{ref.role}</p>
                      <p className="item-desc" style={{ fontFamily: 'var(--font-mono)' }}>Telf: {ref.phone}</p>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </>
        ) : (
          /* ATS-Friendly View */
          <div className="ats-content">
            <header className="ats-header">
              <h1>{currentProfile.personalInfo.fullName}</h1>
              <p>
                {currentProfile.personalInfo.location} | {currentProfile.personalInfo.phone} | {currentProfile.personalInfo.email}
              </p>
            </header>

            <section className="ats-section">
              <h2>RESUMEN PROFESIONAL</h2>
              <p>{currentProfile.summary}</p>
            </section>

            {currentProfile.projects.length > 0 ? (
              <section className="ats-section">
                <h2>PROYECTOS DESTACADOS</h2>
                {currentProfile.projects.map((project, idx) => (
                  <div key={idx} className="ats-item">
                    <div className="ats-item-header">
                      <strong>{project.name}</strong>
                      <span>{project.role}</span>
                    </div>
                    <div className="ats-item-subheader">
                      <em>{project.link}</em>
                    </div>
                    <ul className="ats-list">
                      <li>{project.description}</li>
                      <li>Impacto: {project.impact}</li>
                      <li>Stack: {project.stack}</li>
                    </ul>
                  </div>
                ))}
              </section>
            ) : null}

            <section className="ats-section">
              <h2>EXPERIENCIA LABORAL</h2>
              {currentProfile.experience.map((exp, idx) => (
                <div key={idx} className="ats-item">
                  <div className="ats-item-header">
                    <strong>{exp.title}</strong>
                    <span>{exp.date}</span>
                  </div>
                  <div className="ats-item-subheader">
                    <em>{exp.company}</em>
                  </div>
                  <ul className="ats-list">
                    {exp.description.map((line, lidx) => (
                      <li key={lidx}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="ats-section">
              <h2>EDUCACIÓN</h2>
              {currentProfile.education.map((edu, idx) => (
                <div key={idx} className="ats-item">
                  <div className="ats-item-header">
                    <strong>{edu.title}</strong>
                    <span>{edu.date}</span>
                  </div>
                  <div><em>{edu.school}</em></div>
                </div>
              ))}
            </section>

            <section className="ats-section">
              <h2>SKILLS TÉCNICAS</h2>
              <p>{currentProfile.skills.join(', ')}</p>
            </section>

            <section className="ats-section">
              <h2>CERTIFICACIONES</h2>
              <ul className="ats-list">
                {currentProfile.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>

      {/* Email Template Section */}
      <section className="no-print email-template-section">
        <div className="email-template-container">
          <h2 className="section-title"><Mail size={20} /> Estructura del Correo</h2>
          
          <div className="email-field">
            <div className="email-field-header">
              <label>Para (Destinatario):</label>
              <button onClick={() => handleCopy(currentEmail.to || '', 'to')} className="copy-btn">
                {copied === 'to' ? <Check size={14} /> : <Copy size={14} />}
                {copied === 'to' ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="email-content-box">{currentEmail.to || '[No especificado]'}</div>
          </div>

          <div className="email-field">
            <div className="email-field-header">
              <label>Asunto:</label>
              <button onClick={() => handleCopy(currentEmail.subject, 'subject')} className="copy-btn">
                {copied === 'subject' ? <Check size={14} /> : <Copy size={14} />}
                {copied === 'subject' ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="email-content-box">{currentEmail.subject}</div>
          </div>

          <div className="email-field">
            <div className="email-field-header">
              <label>Cuerpo del mensaje:</label>
              <button onClick={() => handleCopy(currentEmail.body, 'body')} className="copy-btn">
                {copied === 'body' ? <Check size={14} /> : <Copy size={14} />}
                {copied === 'body' ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="email-content-box body-content">
              {currentEmail.body.split('\n').map((line, i) => (
                <p key={i} style={{ margin: line === '' ? '1em 0' : '0' }}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gap Analysis Section */}
      <section className="no-print email-template-section" style={{ marginTop: '2rem' }}>
        <div className="email-template-container" style={{ borderColor: 'var(--accent)', background: 'rgba(56, 189, 248, 0.05)' }}>
          <h2 className="section-title" style={{ borderBottomColor: 'var(--accent)' }}><Trophy size={20} /> {currentGap?.title || 'Análisis / Preparación'}</h2>
          <ul className="gap-analysis-list">
            {currentGap?.items.map((item: string, idx: number) => (
              <li key={idx} className="gap-item">
                <Check size={16} className="gap-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style>{`
        .gap-analysis-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .gap-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--text-main);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .gap-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .email-template-section {
          max-width: 1000px;
          margin: 2rem auto 4rem auto;
          padding: 0 1rem;
        }

        .email-template-container {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 2rem;
        }

        .email-field {
          margin-bottom: 1.5rem;
        }

        .email-field-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .email-field-header label {
          font-weight: 700;
          color: var(--accent);
          font-size: 0.9rem;
          text-transform: uppercase;
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          color: var(--text-muted);
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .copy-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .email-content-box {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          padding: 1rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-main);
          white-space: pre-wrap;
        }

        .email-content-box.body-content {
          font-family: inherit;
          line-height: 1.5;
        }

        .app-layout {
          padding-top: 70px;
          min-height: 100vh;
        }

        .top-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .top-bar-content {
          width: 100%;
          max-width: 1000px;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 850px) {
          .app-logo {
            display: none;
          }
          .top-bar-content {
            justify-content: center;
          }
          .app-layout {
            padding-top: 110px;
          }
          .top-bar {
            height: auto;
            padding: 0.75rem 0;
          }
          .top-bar-content {
            flex-direction: column;
            gap: 0.75rem;
          }
          .export-btn-fixed {
            width: 100%;
            justify-content: center;
          }
        }

        .app-logo {
          font-weight: 800;
          font-size: 1.2rem;
          background: linear-gradient(135deg, var(--accent) 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .view-selector {
          display: flex;
          background: var(--bg-primary);
          padding: 4px;
          border-radius: 8px;
          border: 1px solid var(--border);
        }

        .view-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.2s;
        }

        .view-btn.active {
          background: var(--bg-secondary);
          color: var(--accent);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .export-btn-fixed {
          background: var(--accent);
          color: var(--bg-primary);
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }

        .export-btn-fixed:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .export-btn-fixed:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ATS View Styles */
        .ats-view {
          background: white !important;
          color: black !important;
          display: block !important;
          padding: 40px 60px !important;
          max-width: 800px !important;
          margin: 2rem auto !important;
          border-radius: 0 !important;
          font-family: 'Times New Roman', Times, serif !important;
          line-height: 1.4 !important;
        }

        @media (max-width: 850px) {
          .ats-view {
            padding: 30px 20px !important;
            margin: 0 !important;
            width: 100% !important;
          }
        }

        .ats-header {
          text-align: center;
          border-bottom: 2px solid #333;
          margin-bottom: 20px;
          padding-bottom: 10px;
        }

        .ats-header h1 {
          margin: 0;
          font-size: 24pt;
          text-transform: uppercase;
        }

        .ats-header p {
          margin: 5px 0 0 0;
          font-size: 11pt;
        }

        .ats-section {
          margin-bottom: 20px;
        }

        .ats-section h2 {
          font-size: 14pt;
          border-bottom: 1px solid #666;
          margin-bottom: 10px;
          color: #222;
        }

        .ats-item {
          margin-bottom: 15px;
        }

        .ats-item-header {
          display: flex;
          justify-content: space-between;
          font-size: 11pt;
        }

        .ats-list {
          margin: 5px 0;
          padding-left: 20px;
        }

        .ats-list li {
          margin-bottom: 3px;
        }

        @media print {
          .no-print { display: none !important; }
          .app-layout { padding-top: 0 !important; }
          body { background: white !important; }
          .cv-container { box-shadow: none !important; margin: 0 !important; border: none !important; }
          .modern-view { grid-template-columns: 200px 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default App
