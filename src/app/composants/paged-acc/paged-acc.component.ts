import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-paged-acc',
  templateUrl: './paged-acc.component.html',
  styleUrls: ['./paged-acc.component.css']
})
export class PagedAccComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
