import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MovieListComponent } from './movie-list/movie-list.component'; // Asegúrate de importar el componente
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // Si estás usando ngx-pagination

import { AppRoutingModule, routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withInterceptorsFromDi())],
  
};
@NgModule({
  declarations: [
    MovieListComponent // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule a los módulos importados
    NgxPaginationModule,
    AppRoutingModule
  ]}) 
  export class AppModule { }
