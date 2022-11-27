import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.page.html',
  styleUrls: ['./display-recipe.page.scss'],
})
export class DisplayRecipePage implements OnInit {

  dish: any;
  constructor(private activatedRoute: ActivatedRoute, private iab: InAppBrowser) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      
      this.dish = JSON.parse(params['dish']);
      console.log("display-recipe", this.dish);
      console.log(JSON.parse(params['dish']));

    })
  }

  findMore(){
    this.iab.create(this.dish.findMore);
  }

}
