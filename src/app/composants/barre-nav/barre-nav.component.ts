import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-nav',
  templateUrl: './barre-nav.component.html',
  styleUrls: ['./barre-nav.component.css']
})
export class BarreNavComponent implements OnInit {

  imagePok = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';

  constructor() { }

  ngOnInit() {
  }

}
