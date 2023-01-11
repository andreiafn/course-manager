import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { StarComponent } from './star/star.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    StarComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'courses/info/:id', component: CourseInfoComponent},
      {path: '', redirectTo: 'courses', pathMatch: 'full'},
      {path: 'courses', component: CourseListComponent},
      {path: '**', component: Error404Component}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
