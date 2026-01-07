import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Language {
  name: string;
  level: string;
  flag: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  phone: string;
  status: string;
  profileImage: string;
}

interface PersonalData {
  personalInfo: PersonalInfo;
  languages: Language[];
  softSkills: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  personalData: PersonalData | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPersonalData();
  }

  private loadPersonalData() {
    this.http.get<PersonalData>('assets/data/personal-info.json').subscribe({
      next: (data) => {
        this.personalData = data;
      },
      error: (error) => {
        console.error('Error loading personal data:', error);
      }
    });
  }

  getSoftSkillIcon(skill: string): string {
    const icons: { [key: string]: string } = {
      'Trabajo en equipo': 'fas fa-handshake',
      'Adaptación rápida': 'fas fa-sync-alt',
      'Comunicación efectiva': 'fas fa-comments',
      'Proactividad': 'fas fa-rocket',
      'Resolución de problemas': 'fas fa-puzzle-piece',
      'Aprendizaje continuo': 'fas fa-book-open'
    };
    return icons[skill] || 'fas fa-star';
  }

  getLanguageProgress(level: string): number {
    const levels: { [key: string]: number } = {
      'Nativo': 100,
      'C2': 95,
      'C1': 85,
      'B2': 75,
      'B1': 65,
      'A2': 45,
      'A1': 25
    };
    return levels[level] || 50;
  }
}
