import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '../../node_modules/@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from 'angularfire2/database';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  lottieConfig: Object;
  sent:Object;
  errors:Object;
  projectConfigs: Array<Object> = [];
  anim: any;
  email: String = "";
  animationSpeed: number = 1;

  images= [
    {img: "assets/SyntaxPacket.png", name: "Syntax Packet", color: "darkBlue", description: "A customizable modern file manager"},
    {img: "assets/flickmatics.png", name: "FlickMatics", color: "danger", description: "Personalized Movie Blogger for all"},
    {img: "assets/hashcode.png", name: "#Code", color: "violet", description: "A hackable text editor to your liking"}
  ]

  list;

  constructor(config: NgbCarouselConfig, afd: AngularFireDatabase, private modalService: NgbModal) {
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

    this.sent = {
      path: 'assets/email.json',
      autoplay: true,
      loop: false
    };

    this.errors = {
      path: 'assets/error.json',
      autoplay: true,
      loop: false
    }

    let imgs = ['layers', 'thumb', 'animated_laptop_'];

    for(let i in imgs){
      this.projectConfigs.push({
        path: 'assets/' + imgs[i] +'.json',
        autoplay: true,
        loop: true
      });
    }

    this.list = afd.list('/emails');
  }

  validateEmail(){
    var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.email.match(validateEmail);
  }

  sendEmail(content){
    if(this.validateEmail()) {
      this.list.push({email: this.email});
    }
    this.modalService.open(content, {centered: true});
  }

  handleAnimation(anim: any) {
    this.anim = anim;
    this.anim.setSpeed(2);
  }


}
