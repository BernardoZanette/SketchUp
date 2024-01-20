import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { YourSketchesComponent } from './components/your-sketches/your-sketches.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddSketchComponent } from './components/add-sketch/add-sketch.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent},
    {path: "about-us", component: AboutUsComponent},
    {path: "your-sketches", component: YourSketchesComponent},
    {path: "add-sketch", component: AddSketchComponent}
];
