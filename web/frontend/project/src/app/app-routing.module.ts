import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { HomeinComponent } from './homein/homein.component';
import { PantryComponent } from './pantry/pantry.component';

const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'recipe-search', component: RecipesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pantry', component: PantryComponent},
  {path: 'home2', component: HomeinComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
