import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RectComponent } from './rect/rect.component';
import { DirectiveComponent } from './directive/directive/directive.component';
import { MenuComponent } from './menu/menu/menu.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipeComponent } from './pipe/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RectComponent,
    DirectiveComponent,
    MenuComponent,
    EmployeeComponent,
    PipeComponent
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
