import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Dish } from '../models/dish.model';

export let myDishes: Dish[] = [];
@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class account {
  myRecipeDishes: Dish[] = [];
  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit(){
    this.myRecipeDishes = myDishes;
  }

  addMyRecipe(){
    this.router.navigate(['add-recipe',{}])
  }

  showRe(dish: Dish){
    this.router.navigate(['display-recipe',{dish: JSON.stringify(dish)}]);
  }

}
