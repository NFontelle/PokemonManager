import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-erreur404',
  templateUrl: './erreur404.component.html',
  styleUrls: ['./erreur404.component.css']
})
export class Erreur404Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
