import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mobile:boolean = false
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck() {
    if (window.screen.width <= 986) {
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }
}
