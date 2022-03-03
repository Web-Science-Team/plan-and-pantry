import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'signin-component', component: SignInComponent},
  {path: 'signup-component', component: SignUpComponent},
  {path: 'recipes-component', component: RecipesComponent},
  {path: '', redirectTo: '/signin-component', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
