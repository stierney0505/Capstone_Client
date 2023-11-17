import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmEmailComponent } from './confirmemail/email.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ResearchProjectCardComponent } from './research-project-card/research-project-card.component';
import { MatTableModule } from '@angular/material/table';
import { PostProjectComponent } from './post_creation/posts.component';
import { FacultyPostCreationPageComponent } from './faculty-post-creation-page/faculty-post-creation-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './post_creation/category-widget/category/category.component';
import { FieldComponent } from './post_creation/custom-field/field/field.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ConfirmEmailComponent,
    HeaderBarComponent,
    FacultyDashboardComponent,
    ResearchProjectCardComponent,
    PostProjectComponent,
    FacultyPostCreationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
