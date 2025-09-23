import { Component } from '@angular/core';

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
  color: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
  username: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isFormSubmitting = false;
  formSubmitted = false;
  
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'alvaro.developer@email.com',
      link: 'mailto:alvaro.developer@email.com',
      color: '#e74c3c'
    },
    {
      icon: 'fas fa-phone',
      title: 'Teléfono',
      value: '+34 612 345 678',
      link: 'tel:+34612345678',
      color: '#27ae60'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ubicación',
      value: 'Madrid, España',
      color: '#3498db'
    },
    {
      icon: 'fas fa-calendar',
      title: 'Disponibilidad',
      value: 'Lun - Vie, 9:00 - 18:00',
      color: '#f39c12'
    }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/alvaro-dev',
      color: '#333333',
      username: '@alvaro-dev'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/alvaro-developer',
      color: '#0077b5',
      username: 'Álvaro Developer'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/alvaro_dev',
      color: '#1da1f2',
      username: '@alvaro_dev'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/alvaro.developer',
      color: '#e4405f',
      username: '@alvaro.developer'
    },
    {
      name: 'Discord',
      icon: 'fab fa-discord',
      url: 'https://discord.gg/alvaro-dev',
      color: '#5865f2',
      username: 'alvaro_dev#1234'
    },
    {
      name: 'Telegram',
      icon: 'fab fa-telegram',
      url: 'https://t.me/alvaro_developer',
      color: '#0088cc',
      username: '@alvaro_developer'
    }
  ];

  skills = [
    'Desarrollo Full Stack',
    'Aplicaciones Móviles',
    'APIs REST',
    'Bases de Datos',
    'DevOps & Cloud',
    'UI/UX Design'
  ];

  faqs = [
    {
      question: '¿Cuál es tu experiencia en desarrollo?',
      answer: 'Tengo más de 2 años de experiencia en desarrollo full-stack, especializándome en tecnologías como Java, Angular, Spring Boot y Flutter.',
      isOpen: false
    },
    {
      question: '¿Qué tipos de proyectos realizas?',
      answer: 'Desarrollo aplicaciones web, móviles, APIs REST, sistemas de gestión empresarial y soluciones de e-commerce. Me adapto a las necesidades específicas de cada cliente.',
      isOpen: false
    },
    {
      question: '¿Cuáles son tus tarifas?',
      answer: 'Las tarifas varían según la complejidad del proyecto. Ofrezco tanto proyectos a precio fijo como trabajo por horas. Contacta conmigo para un presupuesto personalizado.',
      isOpen: false
    },
    {
      question: '¿Trabajas en remoto?',
      answer: 'Sí, trabajo principalmente en remoto pero también estoy disponible para reuniones presenciales en Madrid. Utilizo herramientas modernas de colaboración para mantener una comunicación fluida.',
      isOpen: false
    },
    {
      question: '¿Cuánto tiempo tomas para un proyecto?',
      answer: 'El tiempo depende del alcance del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que una aplicación compleja puede requerir 2-6 meses. Siempre proporciono estimaciones detalladas.',
      isOpen: false
    }
  ];

  onSubmit() {
    if (this.isValidForm()) {
      this.isFormSubmitting = true;
      
      // Simular envío del formulario
      setTimeout(() => {
        this.isFormSubmitting = false;
        this.formSubmitted = true;
        this.resetForm();
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      }, 2000);
    }
  }

  isValidForm(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.subject.trim() &&
      this.contactForm.message.trim() &&
      this.isValidEmail(this.contactForm.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  downloadCV() {
    // Simular descarga de CV
    const link = document.createElement('a');
    link.href = '/assets/documents/CV_Alvaro_Developer.pdf';
    link.download = 'CV_Alvaro_Developer.pdf';
    link.click();
  }

  getResponseTime(): string {
    const hour = new Date().getHours();
    if (hour >= 9 && hour <= 18) {
      return 'Respuesta en 1-2 horas';
    } else {
      return 'Respuesta al siguiente día hábil';
    }
  }
}
