import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RedesComponent } from './components/redes/redes.component';
import { ButtonRedesComponent } from './components/button-redes/button-redes.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    RedesComponent,
    ButtonRedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
