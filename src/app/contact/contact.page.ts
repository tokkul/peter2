import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  ContactPage=ContactPage;
  test:string="";
  constructor(){};
  eventHandler(event){
    console.log(event.target.value[event.target.value.length-1]);
    if (event.target.value.length%2!==0) {this.test=this.test+" ";} else {this.test=this.test+"a";};
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
      this.test=this.test+"F";
      break;
      case "5":
      this.test=this.test+"S";
      break;
      case "6":
      this.test=this.test+"G";
      break;
      case "7":
      this.test=this.test+"L";
      break;
      case "8":
      this.test=this.test+"B";
      break;
      case "9":
      this.test=this.test+"P";
      break;
      default:
      this.test="";
      console.log("Sorry, can't parse");
     }
     return false;
  };

}
