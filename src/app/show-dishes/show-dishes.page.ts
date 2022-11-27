import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from 'src/app/dishesService/dishes-service.service';
import { Dish } from '../models/dish.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Console } from 'console';

export let allDishes: Dish[];
@Component({
  selector: 'app-show-dishes',
  templateUrl: './show-dishes.page.html',
  styleUrls: ['./show-dishes.page.scss'],
})
export class ShowDishesPage implements OnInit {
  ingredientsList: String[] = [];
  dishesList: Dish[] = [];
  
  constructor(private dishesService: DishesServiceService, private activatedRoute: ActivatedRoute, private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ingredientsList = JSON.parse(params['chosenIngredients']);
    })
    
    if (window.localStorage.getItem("getAllDishes") == null) {
      console.log("iffffffff")
      console.log("1st");

      this.dishesService.getDishes().subscribe((data: any) => {
        console.log("data", data["dishes"]);
        window.localStorage.setItem("getAllDishes", JSON.stringify(data["dishes"]));
        allDishes = JSON.parse(window.localStorage.getItem("getAllDishes")!);
        console.log("D1", allDishes)
        JSON.parse(window.localStorage.getItem("getAllDishes")!).forEach((dish: Dish) => {
          for (const ingred in dish["Ingredients"]) {
            if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
              this.dishesList.push(dish);
              break;
            }
          }

        });

        console.log("4th");
        
      })
      console.log("5th");
    }
    else{
      allDishes = JSON.parse(window.localStorage.getItem("getAllDishes")!);
      console.log("elseeee");
      JSON.parse(window.localStorage.getItem("getAllDishes")!).forEach((dish: Dish) => {
        for (const ingred in dish["Ingredients"]) {
          if (this.ingredientsList.includes(dish["Ingredients"][ingred].toLowerCase())) {
            console.log(dish);
            this.dishesList.push(dish);
            break;
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
