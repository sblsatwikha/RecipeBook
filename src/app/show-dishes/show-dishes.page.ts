import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from 'src/app/dishesService/dishes-service.service';
import { Dish } from '../models/dish.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

export let allDishes: Dish[];
@Component({
  selector: 'app-show-dishes',
  templateUrl: './show-dishes.page.html',
  styleUrls: ['./show-dishes.page.scss'],
})
export class ShowDishesPage implements OnInit {
  ingredientsList: String[] = [];
  dishesList: Dish[] = [];
  time: any = -1;
  calories: any = -1;
  
  constructor(private dishesService: DishesServiceService, private activatedRoute: ActivatedRoute, private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ingredientsList = JSON.parse(params['chosenIngredients']);
      this.time = params['time']
      this.calories = params['calories']
    })
    
    if (window.localStorage.getItem("getAllDishes") == null) {
      console.log("iffffffff")
      this.dishesService.getDishes().subscribe((data: any) => {
        allDishes = data["dishes"];
        window.localStorage.setItem("getAllDishes", JSON.stringify(allDishes));
        allDishes.forEach((dish: Dish) => {
          if(this.time == -1 && this.calories == -1){
            for (const ingred in dish["Ingredients"]) {
              if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
                this.dishesList.push(dish);
                break;
              }
            }
          }
          else if(this.time == -1){
            if(dish["calories"] <= this.calories){
              for (const ingred in dish["Ingredients"]) {
                if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
                  this.dishesList.push(dish);
                  break;
                }
              }
            }
          }
          else if(this.calories == -1){
            if(dish["time"] <= this.time){
              for (const ingred in dish["Ingredients"]) {
                if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
                  this.dishesList.push(dish);
                  break;
                }
              }
            }
          }
          else {
            if(dish["time"] <= this.time && dish["calories"] <= this.calories){
              for (const ingred in dish["Ingredients"]) {
                if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
                  this.dishesList.push(dish);
                  break;
                }
              }
            }
          }
        });
      })
    }
    else{
      console.log("elseeee");
      allDishes = JSON.parse(window.localStorage.getItem("getAllDishes")!);
      allDishes.forEach((dish: Dish) => {
        if(this.time == -1 && this.calories == -1){
          for (const ingred in dish["Ingredients"]) {
            if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
              this.dishesList.push(dish);
              break;
            }
          }
        }
        else if(this.time == -1){
          if(dish["calories"] <= this.calories){
            for (const ingred in dish["Ingredients"]) {
              if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
                this.dishesList.push(dish);
                break;
              }
            }
          }
        }
        else if(this.calories == -1){
          if(dish["time"] <= this.time){
            for (const ingred in dish["Ingredients"]) {
              if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
                this.dishesList.push(dish);
                break;
              }
            }
          }
        }
        else {
          if(dish["time"] <= this.time && dish["calories"] <= this.calories){
            for (const ingred in dish["Ingredients"]) {
              if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
                this.dishesList.push(dish);
                break;
              }
            }
          }
        }
      });
    }    
    
  }

  showRecipe(dish: Dish){
    console.log("show-dishes", JSON.stringify(dish));
    this.router.navigate(['display-recipe',{dish: JSON.stringify(dish)}]);
  }

  async starClick(dish: Dish){
    if(dish.isFavorite){
      const alert = await this.alertController.create({
        message: 'Remove ' + dish.dishName + ' from favorites?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              dish.isFavorite = !dish.isFavorite
              allDishes.forEach((Dish: { ID: string; isFavorite: boolean; }) => {
                if (dish.ID == Dish.ID) {
                  Dish.isFavorite = dish.isFavorite;
                  window.localStorage.setItem("getAllDishes", JSON.stringify(allDishes));
                }
              })
              
            },
          },
        ],
      });
      await alert.present();
    }
    else{
      dish.isFavorite = !dish.isFavorite
      allDishes.forEach((Dish: { ID: string; isFavorite: boolean; }) => {
        if (dish.ID == Dish.ID) {
          Dish.isFavorite = dish.isFavorite;
          window.localStorage.setItem("getAllDishes", JSON.stringify(allDishes));
        }
      })  
    }
    
  }

}
