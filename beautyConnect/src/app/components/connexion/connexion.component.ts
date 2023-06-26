import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;

  slides = [
    { imageSrc: '../../../assets/pexels-ozan-çulha-15859572.jpg', altText: 'Image 1' },
    { imageSrc: '../../../assets/pexels-bruno-silva-13931330.jpg', altText: 'Image 2' },
    { imageSrc: '../../../assets/pexels-tokuo-nobuhiro-12717731.jpg', altText: 'Image 3' }
  ];
  currentSlideIndex = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }, 3000);
  }
}