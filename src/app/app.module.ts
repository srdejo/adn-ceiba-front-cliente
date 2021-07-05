import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { PedidoModule } from '@pedido/pedido.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ProductoModule,
    PedidoModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
