import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModuleComponent } from './menu-module/menu-module.component';
import { MaterialModule } from './material/material.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { DefaultModule } from './layouts/default/default.module';
import { AppRoutingModuleModule } from './app-routing-module.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuModuleComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModuleModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
