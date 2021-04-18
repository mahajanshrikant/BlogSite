import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FreshersComponent } from './freshers/freshers.component';
import { HomeComponent } from './home/home.component';
import { JavaTutorialsComponent } from './java-tutorials/java-tutorials.component';
import { ResumeWritingComponent } from './resume-writing/resume-writing.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { YouWriteComponent } from './you-write/you-write.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
 { path: 'home/java', component: JavaTutorialsComponent },
 { path: 'home/freshers', component: FreshersComponent },
 { path: 'home/springboot', component: SpringBootComponent },
 { path: 'youwrite', component: YouWriteComponent },

 { path: 'resumewriting', component: ResumeWritingComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
