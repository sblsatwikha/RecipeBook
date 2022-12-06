import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { Dish } from '../models/dish.model';
import { myDishes } from '../my-recipes/account.page';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  dish: any = {dishName: ''};

  constructor(public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {}

  submitForm(dish: Dish) {
    console.log(dish.calories);
    console.log(dish.time);
    myDishes.push({
      "ID": dish.dishName,
      "image": "assets/data/myRecipeDefault.png",
      "dishName": dish.dishName,
      "Ingredients": dish.Ingredients,
      "time": dish.time,
      "calories": dish.calories,
      "recipe": dish.recipe,
      "servings": dish.servings,
      "isFavorite": false,
      "findMore": "https://www.youtube.com/results?search_query="+ dish.dishName +" recipe"
    })
    this.router.navigate(['tabs/my-recipes',{}])
  }

  cancel(){
    this.router.navigate(['tabs/my-recipes',{}])
  }


}
