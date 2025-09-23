import { Component } from '@angular/core';

interface Skill {
  id: number;
  name: string;
  description: string;
  level: string;
  percentage: number;
  category: string;
  experience: string;
  icon: string;
  color: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Certification {
  title: string;
  institution: string;
  year: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  selectedCategory = 'all';

  categories: Category[] = [
    { id: 'all', name: 'Todas', icon: 'fas fa-th' },
    { id: 'frontend', name: 'Frontend', icon: 'fas fa-laptop-code' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'mobile', name: 'Móvil', icon: 'fas fa-mobile-alt' },
    { id: 'database', name: 'Base de Datos', icon: 'fas fa-database' },
    { id: 'tools', name: 'Herramientas', icon: 'fas fa-tools' }
  ];

  skills: Skill[] = [
    {
      id: 1,
      name: 'Java',
      description: 'Programación orientada a objetos y desarrollo de aplicaciones empresariales',
      level: 'Avanzado',
      percentage: 85,
      category: 'backend',
      experience: '2+ años',
      icon: 'fab fa-java',
      color: '#f89820'
    },
    {
      id: 2,
      name: 'Angular',
      description: 'Framework para desarrollo de aplicaciones web SPA',
      level: 'Intermedio',
      percentage: 75,
      category: 'frontend',
      experience: '1+ año',
      icon: 'fab fa-angular',
      color: '#dd0031'
    },
    {
      id: 3,
      name: 'Spring Boot',
      description: 'Framework para desarrollo de APIs REST y microservicios',
      level: 'Intermedio',
      percentage: 70,
      category: 'backend',
      experience: '1+ año',
      icon: 'fas fa-leaf',
      color: '#6db33f'
    },
    {
      id: 4,
      name: 'Flutter',
      description: 'Desarrollo de aplicaciones móviles multiplataforma',
      level: 'Intermedio',
      percentage: 65,
      category: 'mobile',
      experience: '1 año',
      icon: 'fas fa-mobile-alt',
      color: '#02569b'
    },
    {
      id: 5,
      name: 'PostgreSQL',
      description: 'Sistema de gestión de bases de datos relacionales',
      level: 'Intermedio',
      percentage: 70,
      category: 'database',
      experience: '1+ año',
      icon: 'fas fa-database',
      color: '#336791'
    },
    {
      id: 6,
      name: 'Docker',
      description: 'Containerización y despliegue de aplicaciones',
      level: 'Básico',
      percentage: 50,
      category: 'tools',
      experience: '6 meses',
      icon: 'fab fa-docker',
      color: '#2496ed'
    },
    {
      id: 7,
      name: 'HTML5',
      description: 'Lenguaje de marcado para la estructura web',
      level: 'Avanzado',
      percentage: 90,
      category: 'frontend',
      experience: '2+ años',
      icon: 'fab fa-html5',
      color: '#e34f26'
    },
    {
      id: 8,
      name: 'CSS3',
      description: 'Estilos y diseño responsivo para aplicaciones web',
      level: 'Avanzado',
      percentage: 85,
      category: 'frontend',
      experience: '2+ años',
      icon: 'fab fa-css3-alt',
      color: '#1572b6'
    },
    {
      id: 9,
      name: 'JavaScript',
      description: 'Lenguaje de programación para desarrollo frontend',
      level: 'Avanzado',
      percentage: 80,
      category: 'frontend',
      experience: '2+ años',
      icon: 'fab fa-js-square',
      color: '#f7df1e'
    },
    {
      id: 10,
      name: 'TypeScript',
      description: 'JavaScript tipado para aplicaciones escalables',
      level: 'Intermedio',
      percentage: 75,
      category: 'frontend',
      experience: '1+ año',
      icon: 'fas fa-code',
      color: '#3178c6'
    },
    {
      id: 11,
      name: 'Python',
      description: 'Programación general y automatización de tareas',
      level: 'Intermedio',
      percentage: 60,
      category: 'backend',
      experience: '1 año',
      icon: 'fab fa-python',
      color: '#3776ab'
    },
    {
      id: 12,
      name: 'Figma',
      description: 'Diseño de interfaces y prototipado',
      level: 'Intermedio',
      percentage: 65,
      category: 'tools',
      experience: '1 año',
      icon: 'fab fa-figma',
      color: '#f24e1e'
    },
    {
      id: 13,
      name: 'Git',
      description: 'Control de versiones y colaboración en equipo',
      level: 'Avanzado',
      percentage: 85,
      category: 'tools',
      experience: '2+ años',
      icon: 'fab fa-git-alt',
      color: '#f05032'
    },
    {
      id: 14,
      name: 'MySQL',
      description: 'Sistema de gestión de bases de datos',
      level: 'Intermedio',
      percentage: 75,
      category: 'database',
      experience: '1+ año',
      icon: 'fas fa-database',
      color: '#4479a1'
    },
    {
      id: 15,
      name: 'Node.js',
      description: 'Runtime de JavaScript para backend',
      level: 'Básico',
      percentage: 55,
      category: 'backend',
      experience: '6 meses',
      icon: 'fab fa-node-js',
      color: '#339933'
    },
    {
      id: 16,
      name: 'React',
      description: 'Biblioteca de JavaScript para interfaces de usuario',
      level: 'Intermedio',
      percentage: 70,
      category: 'frontend',
      experience: '1+ año',
      icon: 'fab fa-react',
      color: '#61dafb'
    },
    {
      id: 17,
      name: 'MongoDB',
      description: 'Base de datos NoSQL orientada a documentos',
      level: 'Básico',
      percentage: 50,
      category: 'database',
      experience: '6 meses',
      icon: 'fas fa-database',
      color: '#47a248'
    },
    {
      id: 18,
      name: 'AWS',
      description: 'Servicios en la nube de Amazon',
      level: 'Básico',
      percentage: 45,
      category: 'tools',
      experience: '3 meses',
      icon: 'fab fa-aws',
      color: '#232f3e'
    }
  ];

  certifications: Certification[] = [
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      institution: 'Centro de Formación Profesional',
      year: '2023-2025',
      icon: 'fas fa-graduation-cap',
      color: '#3498db'
    },
    {
      title: 'Frontend Developer with Angular',
      institution: 'Babel Academy',
      year: '2025',
      icon: 'fas fa-certificate',
      color: '#dd0031'
    },
    {
      title: 'Java Programming Fundamentals',
      institution: 'Oracle Academy',
      year: '2024',
      icon: 'fas fa-award',
      color: '#f89820'
    },
    {
      title: 'Spring Boot Microservices',
      institution: 'Udemy',
      year: '2024',
      icon: 'fas fa-trophy',
      color: '#6db33f'
    },
    {
      title: 'Database Design and PostgreSQL',
      institution: 'Coursera',
      year: '2024',
      icon: 'fas fa-medal',
      color: '#336791'
    }
  ];

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  getFilteredSkills(): Skill[] {
    if (this.selectedCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  getSkillsByLevel(level: string): Skill[] {
    return this.skills.filter(skill => skill.level === level);
  }

  getAverageExperience(): string {
    const experiences = this.skills.map(skill => {
      const exp = skill.experience.replace(/[^\d.]/g, '');
      return parseFloat(exp) || 0;
    });
    const average = experiences.reduce((a, b) => a + b, 0) / experiences.length;
    return average.toFixed(1);
  }

  getTotalSkills(): number {
    return this.skills.length;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

}