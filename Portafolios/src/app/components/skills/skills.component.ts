import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Skill {
  name: string;
  icon: string;
  description: string;
  color: string;
}

interface Category {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

interface MethodologyItem {
  name: string;
  icon: string;
  color: string;
}

interface Methodologies {
  title: string;
  items: MethodologyItem[];
}

interface SkillsSection {
  title: string;
  subtitle: string;
  categories: Category[];
  methodologies: Methodologies;
}

interface PersonalData {
  skills: SkillsSection;
  // Puedes agregar otras propiedades si las necesitas
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsData: SkillsSection | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSkillsData();
  }

  private loadSkillsData() {
    // Configurar datos temporales como fallback
    this.setupTempData();
    
    // Intentar cargar el JSON real desde assets
    this.http.get<PersonalData>('assets/data/personal-info.json').subscribe({
      next: (data) => {
        if (data.skills) {
          this.skillsData = data.skills;
          setTimeout(() => this.animateElements(), 100);
        }
      },
      error: (error) => {
        // Continuar con datos temporales si falla
      }
    });
  }

  private setupTempData() {
    const tempData: SkillsSection = {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologías y herramientas que domino",
      categories: [
        {
          id: "languages",
          title: "Lenguajes",
          icon: "fas fa-code",
          skills: [
            {
              name: "Java",
              icon: "fab fa-java",
              description: "Lenguaje principal",
              color: "#f89820"
            },
            {
              name: "JavaScript/TypeScript",
              icon: "fab fa-js-square",
              description: "Frontend & Backend",
              color: "#f7df1e"
            },
            {
              name: "Python",
              icon: "fab fa-python",
              description: "Desarrollo general",
              color: "#3776ab"
            }
          ]
        },
        {
          id: "frameworks",
          title: "Frameworks",
          icon: "fas fa-layer-group",
          skills: [
            {
              name: "Angular",
              icon: "fab fa-angular",
              description: "Experiencia laboral",
              color: "#dd0031"
            },
            {
              name: "Spring Boot",
              icon: "fas fa-leaf",
              description: "Backend Java",
              color: "#6db33f"
            },
            {
              name: "Flutter",
              icon: "fas fa-mobile-alt",
              description: "Desarrollo móvil",
              color: "#02569b"
            }
          ]
        },
        {
          id: "web",
          title: "Tecnologías Web",
          icon: "fas fa-globe",
          skills: [
            {
              name: "HTML5",
              icon: "fab fa-html5",
              description: "Estructura web",
              color: "#e34f26"
            },
            {
              name: "CSS3",
              icon: "fab fa-css3-alt",
              description: "Estilos avanzados",
              color: "#1572b6"
            }
          ]
        },
        {
          id: "tools",
          title: "Herramientas",
          icon: "fas fa-tools",
          skills: [
            {
              name: "PostgreSQL",
              icon: "fas fa-database",
              description: "Base de datos",
              color: "#336791"
            },
            {
              name: "Docker",
              icon: "fab fa-docker",
              description: "Contenedores",
              color: "#2496ed"
            },
            {
              name: "Figma",
              icon: "fab fa-figma",
              description: "Prototipado",
              color: "#f24e1e"
            }
          ]
        }
      ],
      methodologies: {
        title: "Metodologías",
        items: [
          {
            name: "Metodologías Ágiles",
            icon: "fas fa-users-cog",
            color: "#667eea"
          },
          {
            name: "Jira",
            icon: "fab fa-jira",
            color: "#0052cc"
          },
          {
            name: "Azure DevOps",
            icon: "fab fa-microsoft",
            color: "#0078d4"
          },
          {
            name: "Control de Versiones",
            icon: "fas fa-code-branch",
            color: "#f05032"
          }
        ]
      }
    };

    this.skillsData = tempData;
  }

  private animateElements() {
    const categories = document.querySelectorAll('.skill-category');
    categories.forEach((category, index) => {
      setTimeout(() => {
        category.classList.add('animate');
      }, index * 200);
    });
  }

  getCategoryColor(categoryId: string): string {
    const colors = {
      'languages': '#667eea',
      'frameworks': '#764ba2',
      'web': '#f093fb',
      'tools': '#4facfe'
    };
    return colors[categoryId as keyof typeof colors] || '#667eea';
  }
}