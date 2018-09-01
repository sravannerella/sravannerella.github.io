import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-writing',
  templateUrl: './header-writing.component.html',
  styleUrls: ['./header-writing.component.scss']
})
export class HeaderWritingComponent implements OnInit {

  lottieConfig: Object;
  anim:any;

  constructor() { 
    this.lottieConfig = {
      path: 'assets/pencil_write.json',
      autoplay: true,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
    this.anim.setSpeed(1);
  }

  ngOnInit() {
  }

}
