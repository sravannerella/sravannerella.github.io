import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {

	anim: any;
	writings: Observable<any[]>;

	constructor(private firebase: FirebaseServiceService) {

		this.writings = this.firebase.getPosts().valueChanges();

		// this.writings = [
		// 	{
		// 		id: 1,
		// 		author: "Sravan Nerella",
		// 		title: "Gather Around",
		// 		content: "test content",
		// 		coverImg: "../../assets/event.jpeg",
		// 		published: false,
		// 		createdOn: new Date()
		// 	},
		// 	{
		// 		id: 2,
		// 		author: "Sravan Nerella",
		// 		title: "Gather Around",
		// 		content: "test content",
		// 		coverImg: "../../assets/event.jpeg",
		// 		published: false,
		// 		createdOn: new Date()
		// 	},
		// 	{
		// 		id: 3,
		// 		author: "Sravan Nerella",
		// 		title: "Gather Around",
		// 		content: "test content",
		// 		coverImg: "../../assets/event.jpeg",
		// 		published: false,
		// 		createdOn: new Date()
		// 	},
		// 	{
		// 		id: 4,
		// 		author: "Sravan Nerella",
		// 		title: "Gather Around",
		// 		content: "test content",
		// 		coverImg: "../../assets/event.jpeg",
		// 		published: false,
		// 		createdOn: new Date()
		// 	},
		// 	{
		// 		id: 5,
		// 		author: "Sravan Nerella",
		// 		title: "Gather Around",
		// 		content: "test content",
		// 		coverImg: "../../assets/event.jpeg",
		// 		published: false,
		// 		createdOn: new Date()
		// 	},
		// 	{
		// 		id: 6,
		// 		author: "Sravan Nerella",
		// 		title: "Gather Around",
		// 		content: "test content",
		// 		coverImg: "../../assets/event.jpeg",
		// 		published: false,
		// 		createdOn: new Date()
		// 	}, {
		// 		id: 7,
		// 		author: "Sravan Nerella",
		// 		title: "Gather Around",
		// 		content: "test content",
		// 		coverImg: "../../assets/event.jpeg",
		// 		published: false,
		// 		createdOn: new Date()
		// 	}
		// ]
	}

	ngOnInit() {
	}

}
