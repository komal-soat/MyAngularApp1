import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent  {
  parr=[
    {id:10,name:'komal',desg:'manager',dept:'electronics'},
    {id:20,name:'pooja',desg:'CEO',dept:'Mechanical'},
    {id:30,name:'seeta',desg:'Developer',dept:'Cse'},
    {id:40,name:'ram',desg:'hacker',dept:'IT'},
    {id:50,name:'vishwa',desg:'soldger',dept:'Army'}];

}
