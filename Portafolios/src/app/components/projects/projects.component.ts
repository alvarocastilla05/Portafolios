import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  category: string;
  status: 'completed' | 'in-progress' | 'planning';
  year: number;
  duration: string;
  teamSize: number;
  challenges: string[];
  achievements: string[];
  screenshots?: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory = 'all';
  selectedTechnology = 'all';
  showFeaturedOnly = false;
  isLoading = false;

  categories = [
    { value: 'all', label: 'Todos los Proyectos', icon: 'fas fa-th' },
    { value: 'web', label: 'Desarrollo Web', icon: 'fas fa-globe' },
    { value: 'mobile', label: 'Aplicaciones Móviles', icon: 'fas fa-mobile-alt' },
    { value: 'api', label: 'APIs y Backend', icon: 'fas fa-server' },
    { value: 'desktop', label: 'Aplicaciones Desktop', icon: 'fas fa-desktop' },
    { value: 'ai', label: 'IA y Machine Learning', icon: 'fas fa-brain' }
  ];

  technologies = [
    'Angular', 'React', 'Vue.js', 'JavaScript', 'TypeScript', 'Node.js',
    'Python', 'Java', 'C#', 'Flutter', 'React Native', 'PostgreSQL',
    'MongoDB', 'Firebase', 'Docker', 'AWS', 'Azure'
  ];

  mockProjects: Project[] = [
    {
      id: 1,
      title: 'EcommerceHub - Plataforma de Comercio Electrónico',
      description: 'Plataforma completa de comercio electrónico con panel de administración, sistema de pagos integrado, gestión de inventario y analytics avanzados.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/tu-usuario/ecommerce-hub',
      demoUrl: 'https://ecommerce-hub-demo.netlify.app',
      featured: true,
      category: 'web',
      status: 'completed',
      year: 2024,
      duration: '6 meses',
      teamSize: 4,
      challenges: [
        'Implementación de pagos seguros con Stripe',
        'Optimización de rendimiento para gran volumen de productos',
        'Sistema de recomendaciones personalizadas'
      ],
      achievements: [
        '99.9% de uptime en producción',
        '3000+ usuarios activos mensuales',
        '40% mejora en conversión vs competencia'
      ]
    },
    {
      id: 2,
      title: 'TaskMaster - App de Gestión de Proyectos',
      description: 'Aplicación móvil multiplataforma para gestión de proyectos y equipos con funcionalidades avanzadas de colaboración y tracking en tiempo real.',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'Socket.io', 'Google Cloud'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/tu-usuario/taskmaster-app',
      demoUrl: 'https://taskmaster-demo.web.app',
      featured: true,
      category: 'mobile',
      status: 'completed',
      year: 2024,
      duration: '4 meses',
      teamSize: 3,
      challenges: [
        'Sincronización en tiempo real entre dispositivos',
        'Notificaciones push inteligentes',
        'Modo offline con sincronización automática'
      ],
      achievements: [
        '4.8★ en App Store y Google Play',
        '10,000+ descargas en primer mes',
        'Featured en Google Play Store'
      ]
    },
    {
      id: 3,
      title: 'DataInsight API - Analytics Intelligence',
      description: 'API RESTful robusta para análisis de datos empresariales con machine learning integrado, procesamiento en tiempo real y dashboards interactivos.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'TensorFlow', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/tu-usuario/datainsight-api',
      demoUrl: 'https://datainsight-api.herokuapp.com/docs',
      featured: true,
      category: 'api',
      status: 'completed',
      year: 2023,
      duration: '8 meses',
      teamSize: 5,
      challenges: [
        'Procesamiento de grandes volúmenes de datos',
        'Implementación de algoritmos ML personalizados',
        'Escalabilidad horizontal con microservicios'
      ],
      achievements: [
        'Procesa 1M+ eventos por minuto',
        '95% precisión en predicciones ML',
        'Reduce costos de análisis en 60%'
      ]
    },
    {
      id: 4,
      title: 'SmartHome Control Center',
      description: 'Aplicación desktop para control inteligente del hogar con IoT, automatización avanzada y interfaz intuitiva desarrollada con tecnologías modernas.',
      technologies: ['Electron', 'React', 'Node.js', 'SQLite', 'MQTT', 'Arduino'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/tu-usuario/smarthome-control',
      featured: false,
      category: 'desktop',
      status: 'in-progress',
      year: 2024,
      duration: '3 meses',
      teamSize: 2,
      challenges: [
        'Integración con múltiples protocolos IoT',
        'Interfaz responsive cross-platform',
        'Seguridad y encriptación de datos'
      ],
      achievements: [
        'Compatible con 50+ dispositivos IoT',
        'Reduce consumo energético 30%',
        'Interfaz galardonada por UX Design'
      ]
    },
    {
      id: 5,
      title: 'MediPredict - Sistema de Diagnóstico IA',
      description: 'Sistema de inteligencia artificial para asistencia en diagnósticos médicos utilizando deep learning y análisis de imágenes médicas.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'MongoDB', 'Docker'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/tu-usuario/medipredict-ai',
      featured: true,
      category: 'ai',
      status: 'completed',
      year: 2023,
      duration: '12 meses',
      teamSize: 6,
      challenges: [
        'Entrenamiento con datasets médicos extensos',
        'Cumplimiento de regulaciones HIPAA',
        'Optimización para tiempo real'
      ],
      achievements: [
        '96% precisión en diagnósticos',
        'Publicación en revista científica',
        'Premio a la Innovación en HealthTech'
      ]
    },
    {
      id: 6,
      title: 'CryptoTracker - Portfolio Manager',
      description: 'Aplicación web para seguimiento y gestión de portafolios de criptomonedas con analytics avanzados y alertas inteligentes.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'WebSocket', 'Chart.js', 'CoinGecko API'],
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/tu-usuario/crypto-tracker',
      demoUrl: 'https://crypto-tracker-pro.netlify.app',
      featured: false,
      category: 'web',
      status: 'completed',
      year: 2023,
      duration: '3 meses',
      teamSize: 2,
      challenges: [
        'Integración con múltiples exchanges',
        'Actualizaciones en tiempo real',
        'Cálculos complejos de P&L'
      ],
      achievements: [
        '5000+ usuarios registrados',
        'Tracking de $2M+ en assets',
        'API con 99.9% uptime'
      ]
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.isLoading = true;
    // Simular carga desde API
    setTimeout(() => {
      this.projects = this.mockProjects;
      this.filteredProjects = this.projects;
      this.isLoading = false;
    }, 1000);
  }

  filterProjects() {
    this.filteredProjects = this.projects.filter(project => {
      const categoryMatch = this.selectedCategory === 'all' || project.category === this.selectedCategory;
      const technologyMatch = this.selectedTechnology === 'all' || 
        project.technologies.some(tech => tech.toLowerCase().includes(this.selectedTechnology.toLowerCase()));
      const featuredMatch = !this.showFeaturedOnly || project.featured;
      
      return categoryMatch && technologyMatch && featuredMatch;
    });
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterProjects();
  }

  onTechnologyChange(technology: string) {
    this.selectedTechnology = technology;
    this.filterProjects();
  }

  toggleFeaturedOnly() {
    this.showFeaturedOnly = !this.showFeaturedOnly;
    this.filterProjects();
  }

  getTechnologyIcon(tech: string): string {
    const icons: { [key: string]: string } = {
      'Angular': 'fab fa-angular',
      'React': 'fab fa-react',
      'Vue.js': 'fab fa-vuejs',
      'JavaScript': 'fab fa-js-square',
      'TypeScript': 'fas fa-code',
      'Node.js': 'fab fa-node-js',
      'Python': 'fab fa-python',
      'Java': 'fab fa-java',
      'C#': 'fas fa-code',
      'Flutter': 'fas fa-mobile-alt',
      'React Native': 'fab fa-react',
      'PostgreSQL': 'fas fa-database',
      'MongoDB': 'fas fa-database',
      'Firebase': 'fas fa-fire',
      'Docker': 'fab fa-docker',
      'AWS': 'fab fa-aws',
      'Azure': 'fas fa-cloud'
    };
    return icons[tech] || 'fas fa-code';
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'completed': '#27ae60',
      'in-progress': '#f39c12',
      'planning': '#3498db'
    };
    return colors[status] || '#95a5a6';
  }

  getStatusText(status: string): string {
    const texts: { [key: string]: string } = {
      'completed': 'Completado',
      'in-progress': 'En Desarrollo',
      'planning': 'Planificación'
    };
    return texts[status] || 'Estado Desconocido';
  }

  getProjectStats() {
    return {
      total: this.projects.length,
      completed: this.projects.filter(p => p.status === 'completed').length,
      inProgress: this.projects.filter(p => p.status === 'in-progress').length,
      featured: this.projects.filter(p => p.featured).length,
      technologies: new Set(this.projects.flatMap(p => p.technologies)).size
    };
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'web': 'fas fa-globe',
      'mobile': 'fas fa-mobile-alt',
      'api': 'fas fa-server',
      'desktop': 'fas fa-desktop',
      'ai': 'fas fa-brain'
    };
    return icons[category] || 'fas fa-code';
  }

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      'web': 'Desarrollo Web',
      'mobile': 'Aplicación Móvil',
      'api': 'API/Backend',
      'desktop': 'Aplicación Desktop',
      'ai': 'IA/Machine Learning'
    };
    return labels[category] || 'Proyecto';
  }

  resetFilters() {
    this.selectedCategory = 'all';
    this.selectedTechnology = 'all';
    this.showFeaturedOnly = false;
    this.filterProjects();
  }
}
