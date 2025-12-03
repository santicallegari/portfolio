import React from 'react';
import { Network, Shield, Server, Terminal, GraduationCap, Mail, Linkedin, MapPin, ExternalLink, Cpu, Wifi } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      
      {/* Header / Hero Section */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Open to Work
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
                Santiago Ferreyra
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 mt-2 font-medium">
                Junior Network Engineer & NOC Analyst
              </h2>
              <p className="mt-4 text-slate-600 max-w-xl leading-relaxed">
                Especialista en administración LAN/WAN, seguridad Fortinet y monitoreo de redes. 
                Instructor de Networking y apasionado por la automatización.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-600">
                <a href="mailto:callegarisantiago0@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Mail size={18} /> callegarisantiago0@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/santiago-ferreyra-callegari-104b02303" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Linkedin size={18} /> LinkedIn Profile
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={18} /> Río Tercero, Córdoba, Argentina
                </div>
              </div>
            </div>
            
            {/* Badges Rápidos */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-100 rounded-lg border border-slate-200 shadow-sm">
                <Shield className="text-red-600" />
                <div>
                  <p className="font-bold text-slate-900">Fortinet FCA</p>
                  <p className="text-xs text-slate-500">Certified Associate</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-100 rounded-lg border border-slate-200 shadow-sm">
                <Network className="text-blue-600" />
                <div>
                  <p className="font-bold text-slate-900">Cisco CCNA</p>
                  <p className="text-xs text-slate-500">Modules 1-3 Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

        {/* Skills Section */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Cpu className="text-blue-600" /> Core Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              title="Networking" 
              items={['VLANs, STP, OSPF, BGP', 'IPv4/IPv6, L2 Segmentation', 'Fortinet (NAT, VPN IPsec)', 'DHCP, DNS, ARP, ICMP']}
            />
            <SkillCard 
              title="Monitoring" 
              items={['Zabbix (Server/Agents)', 'Dynatrace (Metrics/Logs)', 'Wireshark Analysis', 'SNMP & Syslog']}
            />
            <SkillCard 
              title="Systems & Tools" 
              items={['Linux (Ubuntu, Debian, Kali)', 'Windows Server', 'GNS3, Packet Tracer', 'ServiceNow, Jira']}
            />
            <SkillCard 
              title="Automation/Code" 
              items={['Bash Scripting', 'Python Basics', 'HTML/CSS/PHP', 'MySQL']}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Terminal className="text-blue-600" /> Professional Experience
          </h3>
          <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
            
            <ExperienceItem 
              title="Network Instructor"
              company="Instituto Técnico Río Tercero"
              period="Jun 2025 – Presente"
              description="Docente de networking para grupos de 24 estudiantes."
              points={[
                "Enseñanza de VLANs, DHCP, DNS, ACLs, enrutamiento y troubleshooting.",
                "Diseño de laboratorios prácticos con Packet Tracer y GNS3.",
                "Creación de documentación técnica y guías paso a paso."
              ]}
            />

            <ExperienceItem 
              title="Freelance Technical Support & Network Technician"
              company="Freelance"
              period="Mar 2023 – Presente"
              description="Soporte remoto y en sitio para pequeñas empresas (PyMEs)."
              points={[
                "Resolución de 50+ incidentes (L2, DHCP/DNS, Conectividad).",
                "Implementación de Zabbix Server y agentes en 10+ hosts.",
                "Diagnóstico de rendimiento con Dynatrace y Zabbix.",
                "Configuración de VLANs y ACLs para seguridad en oficinas."
              ]}
            />

            <ExperienceItem 
              title="FTTH Network Intern"
              company="Cooperativa de Obras y Servicios Públicos"
              period="Aug 2024 – Sep 2024"
              description="Pasantía técnica en infraestructura de fibra óptica."
              points={[
                "Aprovisionamiento y configuración de ONTs.",
                "Soporte L1 (Reseteos, problemas de registro, fallas de enlace).",
                "Mejora del 70% en la gestión de inventario mediante solución Excel + Barcode."
              ]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Wifi className="text-blue-600" /> Projects & Labs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Enterprise Network Lab"
              tech="Cisco / GNS3"
              desc="Diseño completo de red incluyendo VLANs, enrutamiento Inter-VLAN, filtrado ACL y servicios DHCP/DNS."
            />
            <ProjectCard 
              title="Zabbix Deployment"
              tech="Monitoring / Linux"
              desc="Instalación de servidor Zabbix desde cero, despliegue de agentes y creación de dashboards operativos."
            />
            <ProjectCard 
              title="FortiGate Security Lab"
              tech="Fortinet / Security"
              desc="Implementación de políticas de firewall, NAT y configuración de VPNs Site-to-Site (IPsec)."
            />
            <ProjectCard 
              title="Dynatrace Lab"
              tech="Observability"
              desc="Configuración de dashboards de métricas y logs para la detección de anomalías en tiempo real."
            />
          </div>
        </section>

        {/* Education & Certs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <GraduationCap className="text-blue-600" /> Education
            </h3>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-lg">Technical High School Diploma</h4>
              <p className="text-slate-600">Technician in Informatics</p>
              <p className="text-sm text-slate-400 mt-1">Instituto Técnico Río Tercero (2023)</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Shield className="text-blue-600" /> Certifications
            </h3>
            <ul className="space-y-4">
              <CertItem name="Fortinet Certified Associate (FCA)" detail="ID 1101209200SF (2025)" />
              <CertItem name="Cisco CCNA 1, 2 & 3" detail="Enterprise Networking, Security & Automation" />
              <CertItem name="ISC2 Certified in Cybersecurity" detail="Training Completed (2025)" />
              <CertItem name="Dynatrace Essentials" detail="(2024)" />
            </ul>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Santiago Ferreyra Callegari.</p>
          <p className="text-sm mt-2">Built with Next.js & Tailwind CSS. Deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  );
}

// Componentes Auxiliares para mantener el código limpio

function SkillCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
            <span className="text-blue-500 mt-1">▪</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ title, company, period, description, points }: any) {
  return (
    <div className="relative pl-8">
      <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-100 border-2 border-blue-600"></span>
      <h4 className="text-xl font-bold text-slate-900">{title}</h4>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-slate-500 mb-3">
        <span className="font-semibold text-blue-700">{company}</span>
        <span className="hidden sm:inline">•</span>
        <span>{period}</span>
      </div>
      <p className="text-slate-700 mb-3 italic">{description}</p>
      <ul className="list-disc list-outside ml-4 text-slate-600 space-y-1 text-sm">
        {points.map((point: string, i: number) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, tech, desc }: any) {
  return (
    <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h4>
        <Server size={18} className="text-slate-400 group-hover:text-blue-500" />
      </div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1 mb-3">{tech}</p>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function CertItem({ name, detail }: any) {
  return (
    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
      <div className="mt-1 text-green-500">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
      <div>
        <p className="font-medium text-slate-900">{name}</p>
        <p className="text-sm text-slate-500">{detail}</p>
      </div>
    </li>
  );
}