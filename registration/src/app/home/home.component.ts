import { Component, OnInit } from '@angular/core';

//declare variable for Js file
declare var ExternalJSFileFunction;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Function to call External Js File
  CallExternalJSFileFunction(){
    ExternalJSFileFunction();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
