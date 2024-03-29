import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
