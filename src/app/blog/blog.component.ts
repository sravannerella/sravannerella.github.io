import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  lottieConfig: Object;
  anim: any;

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
