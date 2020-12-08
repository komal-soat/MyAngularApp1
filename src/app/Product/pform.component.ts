import { Component } from "@angular/core";

@Component({
    selector:"pform",
    templateUrl:'./pform.component.html',
    styleUrls:['./pform.component.css']
})
 
export class pformComponent{
       pid:number;
         name: string;
         desg:string;
         dept:string;
       
         DisplayData()
         {
             console.log(this.pid+" "+this.name+" "+this.desg+" "+this.dept);
         }
    }
