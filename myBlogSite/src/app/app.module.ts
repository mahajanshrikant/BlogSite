import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { DashbaoardToolbarComponent } from './dashbaoard-toolbar/dashbaoard-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DemoMaterialModule } from './dashbaoard-toolbar/material-module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ActualToolbarComponent } from './actual-toolbar/actual-toolbar.component';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { JavaTutorialsComponent } from './java-tutorials/java-tutorials.component';
import { AboutComponent } from './about/about.component';
import { YouWriteComponent } from './you-write/you-write.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { FreshersComponent } from './freshers/freshers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { SponsoredPostsComponent } from './sponsored-posts/sponsored-posts.component';
import { ResumeWritingComponent } from './resume-writing/resume-writing.component';
@NgModule({
  declarations: [
    AppComponent,
    DashbaoardToolbarComponent,
    ActualToolbarComponent,
    HomeComponent,
    JavaTutorialsComponent,
    AboutComponent,
    YouWriteComponent,
    SpringBootComponent,
    FreshersComponent,
    AboutUsComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    AdvertiseComponent,
    SponsoredPostsComponent,
    ResumeWritingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ScrollingModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,MatRippleModule,MatFormFieldModule,MatInputModule,MatCardModule,MatSidenavModule,MatListModule
  ],

  exports:[
   
    MatToolbarModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
