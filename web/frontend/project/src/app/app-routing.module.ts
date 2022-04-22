import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'recipe-search', component: RecipesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'single-view', component: SingleRecipeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
