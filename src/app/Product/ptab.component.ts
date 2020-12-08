import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component(
{
        selector:"ptab",
        templateUrl:'./ptab.component.html',
        styleUrls:['./ptab.component.css']
})

export class ptabcomponent
{
        name="komal";
        sal=23456;
        flag=true;
        flag1=false;
      p={id:10,name:'komal',desg:'manager',dept:'electronics'};

      parr=[
        {id:10,name:'komal',desg:'manager',dept:'electronics'},
        {id:20,name:'pooja',desg:'CEO',dept:'Mechanical'},
        {id:30,name:'seeta',desg:'Developer',dept:'Cse'},
        {id:40,name:'ram',desg:'hacker',dept:'IT'},
        {id:50,name:'vishwa',desg:'soldger',dept:'Army'}];
        onclickflag()
        {
                this.flag=!this.flag;
        }
}