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
        this.isSelected[ingredientType] = [];
      });
    })
  }

  ngOnInit(){}

  findDishes(){
    let chosenIngredients: String[] = [];
    let time: number = -1;
    let calories: number = -1;
    Object.keys(this.isSelected).forEach((ingredType) => {
      if( ingredType == "Time"){
        if(this.isSelected[ingredType][0] != undefined)
          time = this.isSelected[ingredType][0]
      }
      else if(ingredType == "Calories"){
        if(this.isSelected[ingredType][0] != undefined)
          calories = this.isSelected[ingredType][0]
      }
      else{
        this.isSelected[ingredType].forEach((ingredient: string) => {
          chosenIngredients.push(ingredient.toLowerCase());
        });
        
      }
      
    })
    this.router.navigate(['show-dishes',{chosenIngredients: JSON.stringify(chosenIngredients), time: time, calories: calories}])
  }

  onClickIngredients(ingred: string, ingredType: string){
    if(this.isSelected[ingredType].includes(ingred)){
      this.isSelected[ingredType].splice(this.isSelected[ingredType].indexOf(ingred), 1);
    }
    else{
      if(ingredType == "Time" || ingredType == "Calories"){
        this.isSelected[ingredType][0] = ingred;
      }
      else{
        this.isSelected[ingredType].push(ingred);
      }
    }   
  }

}
