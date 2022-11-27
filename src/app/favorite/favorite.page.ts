import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DishesServiceService } from '../dishesService/dishes-service.service';
import { Dish } from '../models/dish.model';
import { allDishes } from '../show-dishes/show-dishes.page';

@Component({
  selector: 'app-favorite',
  templateUrl: 'favorite.page.html',
  styleUrls: ['favorite.page.scss']
})
export class favoritePage {

  favDishes: Dish[] = [];
  constructor(private router: Router, private dishesService: DishesServiceService, private alertController: AlertController) {}

  ionViewWillEnter(){
    this.getFavDishes();
  }

  getFavDishes(){
    this.favDishes = [];
    JSON.parse(window.localStorage.getItem("getAllDishes")!).forEach((dish: Dish) => {
      if(dish.isFavorite){
        this.favDishes.push(dish);
      }
    })
  }

  showRecipe(dish: Dish){
    this.router.navigate(['display-recipe',{dish: JSON.stringify(dish)}]);
  }

  async starClick(dish: Dish){

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
            this.favDishes.slice(this.favDishes.indexOf(dish), this.favDishes.indexOf(dish)+1);
            this.getFavDishes();
            console.log(this.favDishes)
          },
        },
      ],
    });
    await alert.present();


    

  }



}
