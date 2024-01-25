import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { YourSketchesComponent } from './components/your-sketches/your-sketches.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddSketchComponent } from './components/add-sketch/add-sketch.component';
import { EditSketchComponent } from './components/edit-sketch/edit-sketch.component';
import { SignInComponent } from './components/Signs/sign-in/sign-in.component';
import { SignUpComponent } from './components/Signs/sign-up/sign-up.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent},
    {path: "about-us", component: AboutUsComponent},
    {path: "your-sketches", component: YourSketchesComponent},
    {path: "add-sketch", component: AddSketchComponent},
    {path: "edit-sketch", component: EditSketchComponent},
    {path: "Signs/sign-in", component: SignInComponent},
    {path: "Signs/sign-up", component: SignUpComponent},
];
