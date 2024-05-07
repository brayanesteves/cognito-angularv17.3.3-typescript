import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { MessageModalComponent } from "./components/message-modal/message-modal.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        AppComponent,
        SignUpComponent,
        SignInComponent,
        MessageModalComponent,
        HomeComponent,
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers:[],
    bootstrap: [AppComponent],
})

export class AppModule {  }