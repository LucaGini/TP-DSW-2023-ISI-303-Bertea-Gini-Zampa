import {Component} from "@angular/core";

@Component({
    selector: 'app-bottom', 
    templateUrl: './bottom.component.html',
    styleUrls: ['./bottom.component.scss']
})

export class BottomComponent {

}

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');

if (scrollToTopButton) {
scrollToTopButton.addEventListener('click', () => {
    // Scroll suave a la parte superior
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});

  // Mostrar u ocultar el botón dependiendo de la posición de desplazamiento
window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
    scrollToTopButton.style.display = 'block';
    } else {
    scrollToTopButton.style.display = 'none';
    }
});
}
});