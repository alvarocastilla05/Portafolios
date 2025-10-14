import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  isScrolled = false;
  activeSection = 'home';
  isNavigating = false;

  ngOnInit() {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
    this.updateActiveSection();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  navigateToSection(sectionId: string) {
    this.isNavigating = true;
    this.activeSection = sectionId;
    this.closeMenu();

    // Animación de navegación
    setTimeout(() => {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 300);

    // Terminar animación de loading
    setTimeout(() => {
      this.isNavigating = false;
    }, 1000);
  }

  private updateActiveSection() {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const scrollPosition = window.pageYOffset + 100;

    for (const section of sections) {
      const element = document.querySelector(`#${section}`);
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop;
        const offsetHeight = (element as HTMLElement).offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}