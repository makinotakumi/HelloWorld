import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RectComponent } from './rect/rect.component';
import { DirectiveComponent } from './directive/directive/directive.component';
import { MenuComponent } from './menu/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    RectComponent,
    DirectiveComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
