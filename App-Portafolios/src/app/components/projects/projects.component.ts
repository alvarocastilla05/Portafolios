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
  challenges?: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'FilimuFy - Plataforma Multimedia de Alto Rendimiento',
      description: 'SPA avanzada para gestión y descubrimiento de contenido cinematográfico con integración profunda de API de terceros y arquitectura reactiva.',
      technologies: ['Angular', 'RxJS', 'Bootstrap', 'TMDB API', 'Vercel'],
      images: ['assets/images/filimufy.jpg'],
      githubLink: 'https://github.com/alvarocastilla05/FilimuFy',
      demoLink: 'https://filimufy.vercel.app/inicio',
      activeImageIndex: 0,
      type: 'Team',
      challenges: [
        'Sincronización Reactiva: Implementación de patrones RxJS para consultas paralelas de account_states, eliminando latencia perceptible en la UI.',
        'Arquitectura Environment-Agnostic: Flujo de autenticación OAuth inteligente que detecta el entorno de ejecución (window.origin) para CI/CD fluido.',
        'Optimización de Rendimiento: Uso estratégico de NgZone para rehidratación correcta tras callbacks asíncronos externos.'
      ]
    },
    {
      title: 'RecySell - Sistema de Economía Circular',
      description: 'Plataforma Full Stack empresarial para comercio y donación de dispositivos reacondicionados con gestión avanzada de roles y ciclo de vida del producto.',
      technologies: ['Angular 17+', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'JWT'],
      images: ['assets/images/recysell.jpg'],
      githubLink: 'https://github.com/alvarocastilla05/RecySell',
      activeImageIndex: 0,
      type: 'Full Stack',
      challenges: [
        'Containerización y Despliegue: Orquestación completa del entorno mediante Docker Compose, asegurando consistencia entre desarrollo y producción.',
        'Seguridad Granular (RBAC & JWT): Implementación robusta con Spring Security y Angular Guards, segregando paneles Cliente/Trabajador/Admin.',
        'Peticiones Multipart Complejas: Endpoints REST avanzados para subida simultánea de metadatos JSON y archivos binarios con persistencia optimizada.'
      ]
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
