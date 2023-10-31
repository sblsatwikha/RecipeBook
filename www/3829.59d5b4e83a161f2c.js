"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3829],{3829:(P,g,s)=>{s.r(g),s.d(g,{favoritePageModule:()=>F});var o=s(5035),u=s(6895),h=s(433),c=s(1407),v=s(655),f=s(5928),e=s(8256),p=s(4764);function m(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"ion-card",6),e._UZ(1,"img",7),e.TgZ(2,"ion-buttons",8),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.starClick(l))}),e._UZ(3,"ion-icon",9),e.qZA(),e.TgZ(4,"div",10)(5,"ion-card-title",11),e._uU(6),e.qZA(),e.TgZ(7,"ion-card-subtitle"),e._uU(8),e.qZA(),e.TgZ(9,"ion-card-subtitle"),e._uU(10),e.qZA(),e.TgZ(11,"ion-card-subtitle"),e._uU(12),e.qZA()(),e.TgZ(13,"div")(14,"ion-button",12),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.showRecipe(l))}),e._uU(15,"Recipe"),e.qZA()()()}if(2&i){const t=a.$implicit;e.xp6(1),e.s9C("src",t.image,e.LSH),e.xp6(2),e.Q6J("name",t.isFavorite?"star":"star-outline"),e.xp6(3),e.Oqu(t.dishName),e.xp6(2),e.hij(" Calories: ",t.calories," "),e.xp6(2),e.hij(" Time: ",t.time," "),e.xp6(2),e.hij(" Servings: ",t.servings," ")}}const x=[{path:"",component:(()=>{class i{constructor(t,r,n,l){this.router=t,this.dishesService=r,this.alertController=n,this.platform=l,this.favDishes=[]}ionViewWillEnter(){this.getFavDishes()}getFavDishes(){this.favDishes=[],(this.platform.is("ios")?f.e:JSON.parse(window.localStorage.getItem("getAllDishes"))).forEach(r=>{r.isFavorite&&this.favDishes.push(r)})}showRecipe(t){this.router.navigate(["display-recipe",{dish:JSON.stringify(t)}])}starClick(t){return(0,v.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:"Remove "+t.dishName+" from favorites?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:()=>{t.isFavorite=!t.isFavorite,f.e.forEach(n=>{t.ID==n.ID&&(n.isFavorite=t.isFavorite,window.localStorage.setItem("getAllDishes",JSON.stringify(f.e)))}),this.favDishes.slice(this.favDishes.indexOf(t),this.favDishes.indexOf(t)+1),this.getFavDishes(),console.log(this.favDishes)}}]})).present()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.F0),e.Y36(p.H),e.Y36(o.Br),e.Y36(o.t4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-favorite"]],decls:7,vars:3,consts:[[3,"translucent"],["color","tertiary"],[1,"ion-text-center"],[3,"fullscreen"],[2,"border-radius","15px","height","95%","overflow-y","auto"],["style","margin: 5%;",4,"ngFor","ngForOf"],[2,"margin","5%"],[2,"height","100px","width","100px","float","left",3,"src"],[2,"float","right","padding-right","5%","padding-top","10px",3,"click"],[2,"font-size","large",3,"name"],[2,"padding-left","5%","display","inline-block","padding-top","10px"],[2,"font-size","medium"],["color","success",2,"float","right",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),e._uU(3," Favourites "),e.qZA()()(),e.TgZ(4,"ion-content",3)(5,"ion-card",4),e.YNc(6,m,16,6,"ion-card",5),e.qZA()()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("ngForOf",r.favDishes))},dependencies:[o.YG,o.Sm,o.PM,o.tO,o.Dq,o.W2,o.Gu,o.gu,o.wd,o.sr,u.sg]}),i})()}];let Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz.forChild(x),c.Bz]}),i})(),F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[o.Pc,u.ez,h.u5,Z]}),i})()}}]);