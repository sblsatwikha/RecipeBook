import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myPantry',
  templateUrl: 'my-pantry.page.html',
  styleUrls: ['my-pantry.page.scss']
})
export class myPantry {
  ingredientsList: any = [];
  ingredientsType: any =[];
  isSelected: {[key: string]: any} = {};


  constructor(private http: HttpClient, private router: Router) {
    this.http.get('assets/data/ingredients.json').subscribe((data)=>{
      this.ingredientsList = data;
      this.ingredientsType = Object.keys(this.ingredientsList[0]);
      this.ingredientsType.forEach((ingredientType: string) => {
        this.ingredientsList[0][ingredientType].forEach((ingredient: string) => {
          this.isSelected[ingredient] = false;
        });
      });
    })
  }

  ngOnInit(){}

  findDishes(){
    let chosenIngredients: String[] = [];
    Object.keys(this.isSelected).forEach((ingredient) => {
      if( this.isSelected[ingredient] == true )
        chosenIngredients.push(ingredient.toLowerCase());
    })
    console.log(chosenIngredients);
    this.router.navigate(['show-dishes',{chosenIngredients: JSON.stringify(chosenIngredients)}])
  }

  onClickIngredients(ingred: string){
    this.isSelected[ingred] = !this.isSelected[ingred];
    console.log(this.isSelected);
  }

}
