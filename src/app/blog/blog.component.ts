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
	}

	ngOnInit() {
	}

}
