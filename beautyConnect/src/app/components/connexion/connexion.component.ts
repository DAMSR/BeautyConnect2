import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements AfterViewInit {
  email: string | undefined;
  password: string | undefined;
  ngAfterViewInit() {
    $(document).ready(function() {
      // Initialize the carousel
      const carousel = $('.carousel');
      const slides = carousel.find('.slide');

      // Set the initial state
      let currentSlide = 0;
      slides.eq(currentSlide).show();

      // Animate the carousel
      function animateCarousel() {
        slides.eq(currentSlide).animate({ 'opacity': 0 }, 500, function() {
          $(this).hide();
        });
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).css('opacity', 0).show().animate({ 'opacity': 1 }, 500);
      }

      // Start the carousel interval
      setInterval(animateCarousel, 3000); // Adjust the interval duration as needed
    });
  }
}