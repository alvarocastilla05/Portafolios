import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolios'; // Esta variable suele venir por defecto

  // Variable para controlar si el botón se muestra o no
  showScrollBtn: boolean = false;

  // Escucha el evento de scroll en toda la ventana del navegador
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el usuario ha bajado más de 300px, mostramos el botón
    if (window.scrollY > 300) {
      this.showScrollBtn = true;
    } else {
      this.showScrollBtn = false;
    }
  }

  // Función que se ejecuta al hacer clic en el botón
  scrollToTop() {
    // Sube al inicio de la página con un efecto suave
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}