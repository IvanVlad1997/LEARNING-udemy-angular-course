import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('asdaaaaaaaaaaa', 'asdassd', 'https://i.imgur.com/gyWWvcg.jpg'),
    new Recipe('asdawsawsa', 'asdawwwwwwwsd', 'https://i.imgur.com/gyWWvcg.jpg')
  ];
  constructor() { }

  


  ngOnInit(): void {
  }


  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
