import { Component } from '@angular/core';

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'certification';
  status: 'completed' | 'current' | 'upcoming';
  logo: string;
  url: string;
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
      company: 'Babel Sistemas de Información',
      period: '2025',
      description: 'Desarrollo de aplicaciones web modernas con Angular y TypeScript.',
      type: 'work',
      status: 'completed',
      logo: 'https://www.fororsemalaga.es/wp-content/uploads/2015/10/BABEL1.png',
      url: 'https://babelgroup.com/',
      skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      company: 'Salesianos de Triana',
      period: '2023 - 2025',
      description: 'Formación completa en desarrollo multiplataforma con Java, Spring Boot, Angular, Flutter y metodologías ágiles.',
      type: 'education',
      status: 'completed',
      logo: 'https://www.salesianos.es/wp-content/uploads/2020/03/Logo-Salesianos_vertical.png',
      url: 'https://triana.salesianos.edu/',
      skills: ['Java', 'Spring Boot', 'Angular', 'Flutter', 'TypeScript', 'JavaScript', 'Python', 'PostgreSQL', 'HTML5', 'CSS3', 'Docker', 'Figma', 'Metodologías Ágiles']
    },
    {
      title: 'Bachillerato Científico-Tecnológico',
      company: 'IES Nicolás Copérnico',
      period: '2021 - 2023',
      description: 'Formación en ciencias y tecnología con especialización en matemáticas y física.',
      type: 'education',
      status: 'completed',
      logo: 'https://iesnicolascopernico.com/wp-content/uploads/2021/03/Escudo-Copernico-Aday-transp-265x300.png',
      url: 'https://iesnicolascopernico.com/',
      skills: ['Matemáticas', 'Física', 'Química', 'Tecnología']
    }
  ];

  getWorkExperience(): TimelineItem[] {
    return this.timelineItems.filter(item => item.type === 'work');
  }

  getEducation(): TimelineItem[] {
    return this.timelineItems.filter(item => item.type === 'education');
  }

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

  handleImageError(event: any): void {
    // Fallback to a default logo or hide the image
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    
    // Add a default icon or text as fallback
    const logoContainer = img.parentElement;
    if (logoContainer && !logoContainer.querySelector('.fallback-icon')) {
      const fallbackIcon = document.createElement('i');
      fallbackIcon.className = 'fas fa-building fallback-icon';
      fallbackIcon.style.fontSize = '24px';
      fallbackIcon.style.color = '#718096';
      logoContainer.appendChild(fallbackIcon);
    }
  }
}
