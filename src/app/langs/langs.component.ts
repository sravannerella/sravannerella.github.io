import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-langs',
	templateUrl: './langs.component.html',
	styleUrls: ['./langs.component.scss']
})
export class LangsComponent implements OnInit {

	constructor() { }

	apps = [
		{
			name: "HTML",
			icon: "html.png"
		}, {
			name: "CSS",
			icon: "css.png"
		}, {
			name: "JavaScript",
			icon: "js.png"
		}, {
			name: "Angular",
			icon: "angular.png"
		}, {
			name: "Bootstrap",
			icon: "bootstrap.png"
		}, {
			name: "Sass",
			icon: "sass.png"
		}, {
			name: "Ionic",
			icon: "ionic.png"
		}, {
			name: "Python",
			icon: "python.png"
		}, {
			name: "MongoDB",
			icon: "mongo.png"
		}, {
			name: "Laravel",
			icon: "laravel.png"
		}, {
			name: "Photoshop",
			icon: "photoshop.png"
		}, {
			name: "Swift",
			icon: "swift.png"
		}
	]

	ngOnInit() {
	}

}
