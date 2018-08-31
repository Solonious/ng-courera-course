import { Component, OnInit } from '@angular/core';

import transcribe from 'rune-converter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nordicHeader = transcribe('Nordic');

  constructor() { }

  ngOnInit() {
  }

}
