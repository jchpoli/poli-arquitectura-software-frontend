import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'https://pokeres.bastionbot.org/images/pokemon/25.png',
    'https://pokeres.bastionbot.org/images/pokemon/4.png',
    'https://pokeres.bastionbot.org/images/pokemon/1.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
