import { Component } from '@angular/core';

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'certification';
  status: 'completed' | 'current' | 'upcoming';
  skills?: string[];
  achievements?: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  timelineItems: TimelineItem[] = [
    {
      title: 'Frontend Developer',
      company: 'Babel',
      period: '2025 - 2025',
      description: 'Desarrollo frontend con Angular, creación de interfaces de usuario modernas y responsivas.',
      type: 'work',
      status: 'current',
      skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      achievements: [
        'Desarrollo de aplicaciones web SPA',
        'Implementación de diseño responsivo',
        'Optimización de rendimiento frontend'
      ]
    },
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      company: 'Centro de Formación',
      period: '2023 - 2025',
      description: 'Formación completa en desarrollo de aplicaciones para múltiples plataformas.',
      type: 'education',
      status: 'current',
      skills: ['Java', 'Android', 'Flutter', 'Spring Boot', 'PostgreSQL', 'Git'],
      achievements: [
        'Desarrollo de aplicaciones móviles',
        'Creación de APIs REST',
        'Gestión de bases de datos'
      ]
    },
    {
      title: 'Bachillerato Científico-Tecnológico',
      company: 'Instituto de Educación Secundaria',
      period: '2021 - 2023',
      description: 'Formación en ciencias y tecnología.',
      type: 'education',
      status: 'completed',
      skills: ['Matemáticas', 'Física', 'Química', 'Tecnología']
    }
  ];

  getIcon(type: string): string {
    const icons = {
      work: 'fas fa-briefcase',
      education: 'fas fa-graduation-cap',
      certification: 'fas fa-certificate'
    };
    return icons[type as keyof typeof icons] || 'fas fa-circle';
  }

  getStatusText(status: string): string {
    const statusTexts = {
      current: 'Actual',
      completed: 'Completado',
      upcoming: 'Próximamente'
    };
    return statusTexts[status as keyof typeof statusTexts] || status;
  }

  getTypeText(type: string): string {
    const typeTexts = {
      work: 'Experiencia Laboral',
      education: 'Formación',
      certification: 'Certificación'
    };
    return typeTexts[type as keyof typeof typeTexts] || type;
  }

  getWorkExperienceCount(): number {
    return this.timelineItems.filter(item => item.type === 'work').length;
  }

  getEducationCount(): number {
    return this.timelineItems.filter(item => item.type === 'education').length;
  }

  getTotalYears(): number {
    // Calcular años totales basado en los períodos
    const currentYear = new Date().getFullYear();
    const years = this.timelineItems.map(item => {
      const yearMatch = item.period.match(/\d{4}/g);
      if (yearMatch && yearMatch.length >= 2) {
        const startYear = parseInt(yearMatch[0]);
        const endYear = item.status === 'current' ? currentYear : parseInt(yearMatch[1]);
        return endYear - startYear;
      }
      return 0;
    });
    return Math.max(...years, 2); // Mínimo 2 años
  }

  getTotalSkills(): number {
    const allSkills = new Set<string>();
    this.timelineItems.forEach(item => {
      if (item.skills) {
        item.skills.forEach(skill => allSkills.add(skill));
      }
    });
    return allSkills.size;
  }
}
