import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SketchResponse, SketchService } from '../../Services/sketch.service';
import { RouterModule } from '@angular/router';
import { faPencil, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-your-sketches',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './your-sketches.component.html',
  styleUrl: './your-sketches.component.css'
})
export class YourSketchesComponent {

  constructor(private sketchService: SketchService) {}

  sketches!: SketchResponse[];
  plusIcon = faPlus;
  pencilIcon = faPencil;
  trashIcon = faTrash;

  ngOnInit() {
    this.getSketchesList();
  }

  getSketchesList() {
    this.sketchService.getSketches().subscribe((res:any) => {
      // console.log(res.data);
      this.sketches = res.data
    })
  }

}
