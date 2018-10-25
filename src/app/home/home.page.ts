import { Component } from '@angular/core';
import { HostListener } from '@angular/core'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  HomePage=HomePage;
  test:number="";
  constructor(){};
  eventHandler(event){
    console.log(event.target.value[event.target.value.length-1]);
    if (event.target.value.length%2!==0) {this.test=this.test+" ";};
    switch (event.target.value[event.target.value.length-1]) {
      case "0":
      this.test=this.test+"D";
      break;
      case "1":
      this.test=this.test+"T";
      break;
      case "2":
      this.test=this.test+"N";
      break;
      case "3":
      this.test=this.test+"M";
      break;
      case "4":
      this.test=this.test+"5";
      break;
      default:
      console.log("Sorry, can't parse");
     }
     return false;
  };
}
