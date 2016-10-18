import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './author.component'
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AuthorsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
