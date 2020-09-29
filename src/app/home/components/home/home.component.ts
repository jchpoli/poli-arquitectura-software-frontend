import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
