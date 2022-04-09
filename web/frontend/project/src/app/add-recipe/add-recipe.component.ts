import { Component, OnInit } from '@angular/core';


import { FormBuilder } from '@angular/forms';


interface Measurements {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  measurements: Measurements[] = [
    {value: 'cup-0', viewValue: 'Cup'},
    {value: 'spoon-1', viewValue: 'Spoon'},
    {value: 'bowl-2', viewValue: 'Bowl'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}


