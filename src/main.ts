import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgxPaginationModule } from 'ngx-pagination'; // Si estás usando ngx-pagination
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {providers: [provideHttpClient()]})
  .catch((err) => console.error(err));
    @NgModule({
      declarations: [
      ],
      imports: [
        BrowserModule,
        FormsModule, // Agrega FormsModule a los módulos importados
        NgxPaginationModule, 
        HttpClientModule
      ]}) 
      export class AppModule { }
    
