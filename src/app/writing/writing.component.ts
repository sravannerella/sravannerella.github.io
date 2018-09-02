import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interfaces/post';
import { FirebaseServiceService } from '../../services/firebase-service.service';



@Component({
	selector: 'app-writing',
	templateUrl: './writing.component.html',
	styleUrls: ['./writing.component.scss']
})
export class WritingComponent implements OnInit {

	writings: any;
	title: String;
	img: String;
	content: String;
	author: String;
	createdOn: String;

	constructor(private route: ActivatedRoute, private firebase: FirebaseServiceService) {

		this.route.params.subscribe((params) => {
			this.firebase.getPostsById(params.id).valueChanges().subscribe( (data) => {
				if(data.length === 1) {
					this.writings = data[0];
					this.title = this.writings.title;
					this.content = this.writings.content;
					this.img = this.writings.coverImg;
					this.author = this.writings.author;
					this.createdOn = new Date(this.writings.createdOn).toDateString();
				} else {
					this.title = "NOT FOUND";
				}
			});
		});
	}

	ngOnInit() {
	}

}
