import { Component } from '@angular/core';
import { HostListener } from '@angular/core'; 

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  AboutPage=AboutPage;
  test:string="";
  constructor(){};
  eventHandler(event){
    console.log(event.target.value[event.target.value.length-1]);
    if (event.target.value.length%2!==0) {this.test=this.test+" ";};
    switch (event.target.value[event.target.value.length-1]) {
      case "D":
      this.test=this.test+"0";
      break;
      case "T":
      this.test=this.test+"1";
      break;
      case "N":
      this.test=this.test+"2";
      break;
      case "M":
      this.test=this.test+"3";
      break;
      case "F":
      this.test=this.test+"4";
      break;
      case "S":
      this.test=this.test+"5";
      break;
      case "G":
      this.test=this.test+"6";
      break;
      case "L":
      this.test=this.test+"7";
      break;
      case "B":
      this.test=this.test+"8";
      break;
      case "P":
      this.test=this.test+"9";
      break;
      default:
      this.test=" ";
      console.log("Sorry, can't parse");
     }
     return false;
  };

}
