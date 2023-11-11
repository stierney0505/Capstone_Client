import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmEmailComponent } from './confirmemail/email.component';
import { PostProjectComponent } from './post_creation/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},
  { path: "confirm-email/:emailtoken", component: ConfirmEmailComponent},
  { path: "create-post", component: PostProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
