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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WritingComponent } from './writing/writing.component';
import { HeaderWritingComponent } from './header-writing/header-writing.component';

@NgModule({
  declarations: [
    AppComponent,
    LangsComponent,
    ProfileComponent,
    BlogComponent,
    WritingComponent,
    HeaderWritingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: ProfileComponent
      }, {
        path: "writings",
        component: BlogComponent
      }, {
        path: "writing/:id",
        component: WritingComponent
      }, {
        path: "**",
        component: ProfileComponent
      }
    ]),
    LottieAnimationViewModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
