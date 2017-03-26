import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { BacicComponent } from './bacic/bacic.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: AboutComponent },  
  { path: 'basic', component: BacicComponent }, 
  { path: 'userinput', component: UserInputComponent },  
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    BacicComponent,
    UserInputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
