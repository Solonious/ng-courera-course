import { Component, OnInit } from '@angular/core';

import transcribe from 'rune-converter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nordicHeader = transcribe('N o r d i c', {spacing: 'normal'});

  constructor() { }

  ngOnInit() {
  }

}
