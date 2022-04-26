import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';


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

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: any = null; // Variable to store file

  measurements: Measurements[] = [
    { value: 'cup-0', viewValue: 'Cup' },
    { value: 'spoon-1', viewValue: 'Spoon' },
    { value: 'bowl-2', viewValue: 'Bowl' },
  ];
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable 
        }
      }
    );
  }
}


