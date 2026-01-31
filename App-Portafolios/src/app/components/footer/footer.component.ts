import { Component } from '@angular/core';

export interface FooterLink {
  name: string;
  url: string;
  icon?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  personalInfo = {
    name: 'Álvaro Developer',
    title: 'Desarrollador Full Stack',
    description: 'Especializado en crear soluciones digitales innovadoras con tecnologías modernas.',
    email: 'alvaro.developer@email.com',
    phone: '+34 612 345 678',
    location: 'Madrid, España'
  };

  footerSections: FooterSection[] = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', url: '#hero', icon: 'fas fa-home' },
        { name: 'Sobre Mí', url: '#about', icon: 'fas fa-user' },
        { name: 'Habilidades', url: '#skills', icon: 'fas fa-code' },
        { name: 'Experiencia', url: '#experience', icon: 'fas fa-briefcase' },
        { name: 'Proyectos', url: '#projects', icon: 'fas fa-folder-open' },
        { name: 'Contacto', url: '#contact', icon: 'fas fa-envelope' }
      ]
    },
    {
      title: 'Servicios',
      links: [
        { name: 'Desarrollo Web', url: '#services', icon: 'fas fa-globe' },
        { name: 'Apps Móviles', url: '#services', icon: 'fas fa-mobile-alt' },
        { name: 'APIs REST', url: '#services', icon: 'fas fa-server' },
        { name: 'Consultoría', url: '#services', icon: 'fas fa-lightbulb' },
        { name: 'Mantenimiento', url: '#services', icon: 'fas fa-tools' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Descargar CV', url: '/assets/documents/CV_Alvaro_Developer.pdf', icon: 'fas fa-download' },
        { name: 'Portfolio PDF', url: '/assets/documents/portfolio.pdf', icon: 'fas fa-file-pdf' },
        { name: 'Certificaciones', url: '#certifications', icon: 'fas fa-certificate' },
        { name: 'Blog', url: '/blog', icon: 'fas fa-blog' },
        { name: 'Newsletter', url: '#newsletter', icon: 'fas fa-newspaper' }
      ]
    }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/alvaro-dev',
      color: '#333333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/alvaro-developer',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/alvaro_dev',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/alvaro.developer',
      color: '#e4405f'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://youtube.com/c/alvaro-developer',
      color: '#ff0000'
    },
    {
      name: 'Discord',
      icon: 'fab fa-discord',
      url: 'https://discord.gg/alvaro-dev',
      color: '#5865f2'
    }
  ];

  technologies = [
    'Angular', 'React', 'Vue.js', 'JavaScript', 'TypeScript', 'Node.js',
    'Java', 'Spring Boot', 'Python', 'Flutter', 'PostgreSQL', 'MongoDB', 'Docker'
  ];

  quickStats = [
    { number: '50+', label: 'Proyectos Completados' },
    { number: '2+', label: 'Años de Experiencia' },
    { number: '15+', label: 'Tecnologías Dominadas' },
    { number: '98%', label: 'Satisfacción del Cliente' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  sendEmail() {
    window.location.href = `mailto:${this.personalInfo.email}`;
  }

  makeCall() {
    window.location.href = `tel:${this.personalInfo.phone}`;
  }
}
