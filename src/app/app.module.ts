import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ptabcomponent } from './Product/ptab.component';
import { FormsModule } from '@angular/forms';
import { pformComponent } from './Product/pform.component';
import { PlistComponent } from './Product/plist.component';


@NgModule({
  declarations: [
    AppComponent,ptabcomponent,pformComponent, PlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
