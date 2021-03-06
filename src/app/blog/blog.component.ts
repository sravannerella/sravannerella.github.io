import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {

    writings: Observable<any[]>;
    scribbles: Observable<any[]>;
    guides: Observable<any[]>;

	constructor(private firebase: FirebaseServiceService) {
        this.writings = this.firebase.getPosts().valueChanges();
        this.scribbles = this.firebase.getScribbles().valueChanges();
        this.guides = this.firebase.getGuides().valueChanges();
    }

	ngOnInit() {
	}

}
