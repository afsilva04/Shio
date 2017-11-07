import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { FormsModule }  from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ AppSettings ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
