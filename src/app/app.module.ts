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

@NgModule({
  declarations: [
    AppComponent,
    LangsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    LottieAnimationViewModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
