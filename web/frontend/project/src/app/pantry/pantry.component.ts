import { Component, OnInit } from '@angular/core';
import $ from 'jquery'

//$.ajax().then().catch().finnally()


@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  /*
    var fruits = ["Apples","Bananas","Oranges","Grapes"]
    var vegerables = ["Carrots","Asparagus","Beets","Broccoli"]
    var fridge = ["Greek Yogurt","Milk","Half & Half","Eggs"]
    var freezer = ["Frozen Pizza","Tatter Tots","Chicken Strips","Totino's Pizza Rolls"]

    this.makeItems(fruits, "#fruitPlace", "fruit");
  */
  }

/*
  public makeItems(flist:string[], location:string, type:string) {

    var outsideDiv = $(location)
    var fn = 0;
    for (var f of flist){
      var template = '<div class="col">' +
        '<div class="card ingredient">' +
          '<label for="%itemNum%">' +
            '<div class="card-body">' +
              '<input id="%itemNum%" type="checkbox" name="%itemName%" value="checked" />%itemName%' +
            '</div>' +
          '</label>' +
        '</div>' +
      '</div>'

      var fnam = f;
      var fnum = type + fn.toString;
      console.log(fn)

      var divContent = template.replace("%itemNum%", fnum).replace("%itemNum%", fnum).replace("%itemName%", fnam).replace("%itemName%", fnam);
      outsideDiv.append(divContent);
      fn ++;
    }

  }
  */
}
