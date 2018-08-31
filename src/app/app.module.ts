import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LangsComponent } from './langs/langs.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LangsComponent,
    ProfileComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: ProfileComponent
      }, {
        path: "blog",
        component: BlogComponent
      }
    ]),
    LottieAnimationViewModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
