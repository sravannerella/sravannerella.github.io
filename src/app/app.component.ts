import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  lottieConfig: Object;
  projectConfigs: Array<Object> = [];
  anim: any;
  animationSpeed: number = 1;

  images= [
    {img: "../assets/SyntaxPacket.png", name: "Syntax Packet", color: "darkBlue", description: "A customizable modern file manager"},
    {img: "../assets/flickmatics.png", name: "FlickMatics", color: "danger", description: "Personalized Movie Blogger for all"},
    {img: "../assets/hashcode.png", name: "#Code", color: "violet", description: "A hackable text editor to your liking"}
  ]

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.showNavigationArrows = true;
    config.keyboard = false;
    config.pauseOnHover = false;

    this.lottieConfig = {
      path: 'assets/cycle_animation.json',
      autoplay: true,
      loop: true
    };

    let imgs = ['layers', 'spirit_geek', 'animated_laptop_'];

    for(let i in imgs){
      this.projectConfigs.push({
        path: 'assets/' + imgs[i] +'.json',
        autoplay: true,
        loop: true
      });
    }
    

  }

  handleAnimation(anim: any) {
    this.anim = anim;
    this.anim.setSpeed(2);
  }


}
