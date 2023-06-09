import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  selectedRecipe!: Recipe;
  @Output() sendSelectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'Another test recipe',
      'this a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];

  catchSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.sendSelectedRecipe.emit(recipe);
  }
}
