import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  githubLink: string;
  demoLink?: string;
  activeImageIndex: number;
  type?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'RecySell - Marketplace de Economía Circular',
      description: 'Plataforma Full Stack para la compraventa de productos reciclados con autenticación JWT y pagos.',
      technologies: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'Docker'],
      images: ['assets/images/recysell.jpg'],
      githubLink: 'https://github.com/alvarocastilla05/RecySell',
      activeImageIndex: 0,
      type: 'Full Stack'
    },
    {
      title: 'FilimuFy - Buscador de Cine & TV',
      description: 'SPA desarrollada en equipo consumiendo la API de TMDB. Gestión de ramas Git y filtrado avanzado de contenidos.',
      technologies: ['Angular', 'TypeScript', 'TMDB API', 'Git', 'Teamwork'],
      images: ['assets/images/filimufy.jpg'],
      githubLink: 'https://github.com/alvarocastilla05/FilimuFy',
      activeImageIndex: 0,
      type: 'Team'
    },
    {
      title: 'Conecta - Gestión de Comunidades',
      description: 'Solución web para conectar usuarios y organizaciones. Gestión de eventos, roles y notificaciones.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      images: ['assets/images/conecta.jpg'],
      githubLink: 'https://github.com/alvarocastilla05/ProyectoConecta',
      activeImageIndex: 0,
      type: 'Full Stack'
    }
  ];

  prevImage(project: Project, event: Event): void {
    event.stopPropagation();
    project.activeImageIndex = project.activeImageIndex - 1 < 0 
      ? project.images.length - 1 
      : project.activeImageIndex - 1;
  }

  nextImage(project: Project, event: Event): void {
    event.stopPropagation();
    project.activeImageIndex = project.activeImageIndex + 1 >= project.images.length 
      ? 0 
      : project.activeImageIndex + 1;
  }
}
