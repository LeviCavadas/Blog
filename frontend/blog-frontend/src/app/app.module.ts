import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa o módulo de roteamento
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http'; // Importa o módulo HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Adiciona o módulo de roteamento
    HttpClientModule // Adiciona o módulo HttpClientModule para requisições HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
