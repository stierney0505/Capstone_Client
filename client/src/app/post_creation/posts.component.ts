import { Component, ComponentRef, ViewChild, ViewContainerRef, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoryComponent } from './category-widget/category/category.component';
import { FieldComponent } from './custom-field/field/field.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostProjectComponent implements AfterViewInit {
  title: string | null = "";
  description: string | null  = ""; 
  responsibilities: string | null  = ""; 
  gpa: Number | null  = 3;
  major: string | null  = "";
  standing: string | null  = "";
  miscExperience: string | null  = "";
  url: string = environment.apiUrl;
  fileName: string = "";
  dateTime: Date = new Date();

  isPaid: boolean = true;
  needsExperience: boolean = true;

  @ViewChild('categories', {read: ViewContainerRef})
  categories!: ViewContainerRef;

  @ViewChild('customFieldsPage2', {read: ViewContainerRef})
  customFields!: ViewContainerRef;

  exampleData: Array<{name: string}> = [
    {
      name: 'Computer Science',
    },
    {
      name: 'Engineering'
    }
  ]

  exampleData2: Array<{name: string, instructions: string}> = [
    {
      name: 'Question 1',
      instructions: "instruction here"
    },
    {
      name: "Question 2",
      instructions: 'Backend or Frontend?'
    }
  ]

  constructor(private http: HttpClient, private router: Router) {
    
  }

  ngAfterViewInit() : void {
    this.exampleData.forEach(val => {
      this.createNewCategory(val.name);
    });
    this.exampleData2.forEach(val => {
      this.addCustomField(val.name, val.instructions)
    })
  }

  createCustomField() {

  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post("/api/thumbnail-upload", formData);

        upload$.subscribe();
    }
  }

  categoryObjects: Array<ComponentRef<CategoryComponent>> = [];
  customFieldObjects: Array<ComponentRef<FieldComponent>> = [];

  onSubmit() {
    const authToken = localStorage.getItem("jwt-auth-token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });
    const formData = {
      projectType: 'Active',
      professor: 'Adam',
      projectDetails: {
        project: {
          projectName: this.title,
          posted: new Date(),
          description: this.description,
          questions: [
            'this'
          ],
          requirements: [
            {
              requirementType: 1,
              requirementValue: 'yo',
              required: true
            }
          ]
        }
      }
    };
    console.log('FormData:', formData);
    // Make an HTTP request to your server
    this.http.post(`${this.url}/projects/createProject`, formData, { headers })
      .subscribe(response => {
        console.log('Project creation response:', response);
        this.router.navigate(['/faculty-dashboard']);
      });
  }

  addCustomField(name: string | null, instructions: string | null) {
    const category = this.customFields.createComponent(FieldComponent);
    category.setInput('fieldName', name != null ? name : "");
    category.setInput('fieldInstructions', instructions != null ? instructions : "");
    this.customFieldObjects.push(category);
    category.instance.deleted.subscribe(() => {
      let index = this.customFieldObjects.indexOf(category);
      if (index > -1) {
        this.customFieldObjects.splice(index, 1);
        category.destroy();
      }
    })
  }

  createNewCategory(name: string | null) {
    const category = this.categories.createComponent(CategoryComponent);
    category.setInput('name', name != null ? name : "");
    this.categoryObjects.push(category);
    category.instance.deleted.subscribe(() => {
      let index = this.categoryObjects.indexOf(category);
      if (index > -1) {
        this.categoryObjects.splice(index, 1);
        category.destroy();
      }
    })
  }
}