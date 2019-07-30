import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { CatService } from './services/cat.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './navbar/navbar.component';
import { TopComponent } from './top/top.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    NavbarComponent,
    TopComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    CatService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
