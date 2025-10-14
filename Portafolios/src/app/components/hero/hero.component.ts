import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  personalInfo = {
    name: 'Álvaro Castilla Cano',
    title: 'Técnico en Desarrollo de Aplicaciones Multiplataforma',
    subtitle: 'Desarrollador Full Stack',
    description: 'Desarrollador apasionado por aprender y mejorar como programador. Especializado en Java, Angular y Spring Boot con experiencia en desarrollo frontend y metodologías ágiles.',
    location: 'La Luisiana, Sevilla',
    email: 'alvarocasno06@gmail.com',
    github: 'https://github.com/alvarocastilla05',
    status: 'En formación (2023-2025)'
  };

  mainSkills = [
    { name: 'Java', level: 90, icon: 'fab fa-java' },
    { name: 'Angular', level: 80, icon: 'fab fa-angular' },
    { name: 'Spring Boot', level: 75, icon: 'fas fa-leaf' },
    { name: 'TypeScript', level: 75, icon: 'fas fa-code' },
    { name: 'PostgreSQL', level: 70, icon: 'fas fa-database' }
  ];

  languages = [
    { name: 'Español', level: 'Nativo', flag: '🇪🇸' },
    { name: 'Inglés', level: 'B1', flag: '🇬🇧' },
    { name: 'Francés', level: 'A2', flag: '🇫🇷' }
  ];

  quickStats = [
    { number: '2+', label: 'Años de Formación', icon: 'fas fa-graduation-cap' },
    { number: '8+', label: 'Tecnologías', icon: 'fas fa-code' },
    { number: '3', label: 'Idiomas', icon: 'fas fa-globe' },
    { number: '1', label: 'Empresa', icon: 'fas fa-briefcase' }
  ];

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/alvarocastilla05',
      icon: 'fab fa-github',
      color: '#333333'
    },
    {
      name: 'Email',
      url: 'mailto:alvarocasno06@gmail.com',
      icon: 'fas fa-envelope',
      color: '#e74c3c'
    },
    {
      name: 'LinkedIn',
      url: '#', // Puedes agregar tu LinkedIn aquí
      icon: 'fab fa-linkedin',
      color: '#0077b5'
    }
  ];

  currentWordIndex = 0;
  currentWord = '';
  isDeleting = false;
  typeSpeed = 100;

  dynamicWords = [
    'Desarrollador Java',
    'Frontend Angular',
    'Backend Spring Boot',
    'Estudiante DAM',
    'Programador Full Stack'
  ];

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    const current = this.currentWordIndex;
    const fullWord = this.dynamicWords[current];

    if (this.isDeleting) {
      this.currentWord = fullWord.substring(0, this.currentWord.length - 1);
      this.typeSpeed = 50;
    } else {
      this.currentWord = fullWord.substring(0, this.currentWord.length + 1);
      this.typeSpeed = 100;
    }

    if (!this.isDeleting && this.currentWord === fullWord) {
      this.typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentWord === '') {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.dynamicWords.length;
      this.typeSpeed = 500;
    }

    setTimeout(() => this.typeWriter(), this.typeSpeed);
  }

  downloadCV() {
    // Simular descarga de CV
    const link = document.createElement('a');
    link.href = '/assets/documents/CV_Alvaro_Castilla_Cano.pdf';
    link.download = 'CV_Alvaro_Castilla_Cano.pdf';
    link.click();
  }

  scrollToSection(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openGitHub() {
    window.open(this.personalInfo.github, '_blank');
  }

  sendEmail() {
    window.location.href = `mailto:${this.personalInfo.email}`;
  }

  scrollToProjects() {
    this.animatedScrollTo('#projects', 'projects');
  }

  scrollToContact() {
    this.animatedScrollTo('#contact', 'contact');
  }

  private animatedScrollTo(sectionId: string, buttonType: string) {
    const element = document.querySelector(sectionId);
    const button = document.querySelector(`.btn-${buttonType}`) as HTMLElement;
    
    if (element) {
      // Animación del botón
      if (button) {
        button.classList.add('clicking');
        setTimeout(() => {
          button.classList.remove('clicking');
        }, 600);
      }

      // Agregar clase de animación antes del scroll
      document.body.style.scrollBehavior = 'smooth';
      
      // Efecto de transición suave en el hero
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        heroSection.classList.add('scroll-transition');
      }

      // Pequeño delay para que se vea la animación del botón
      setTimeout(() => {
        // Scroll suave con configuración personalizada
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 200);

      // Remover clase después de la animación
      setTimeout(() => {
        if (heroSection) {
          heroSection.classList.remove('scroll-transition');
        }
      }, 1000);
    }
  }

  scrollToNext() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Si no existe #about, busca la siguiente sección
      const nextSection = document.querySelector('section:nth-of-type(2)');
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}