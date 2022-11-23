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
  chosenIngredients: String[] = [];
  isSelected: {[key: string]: any} = {};

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit(){
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

  findDishes(){
    this.router.navigate(['show-dishes',{chosenIngredients: this.chosenIngredients}])
  }

  onClickIngredients(ingred: string){
    if(!this.chosenIngredients.includes(ingred)){
      this.chosenIngredients.push(ingred);
    }
    else{
      const ingredIndex = this.chosenIngredients.indexOf(ingred);
      if (ingredIndex !== -1) {
        this.chosenIngredients.splice(ingredIndex, 1);
      }
    }
    this.isSelected[ingred] = !this.isSelected[ingred];
    console.log(this.chosenIngredients);
    console.log(this.isSelected);
  }

}
