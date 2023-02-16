import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighLightDirectiveDirective } from './HighLightDirective.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { HoverClassDirective } from './HoverClass.directive';
import { ShowMovieDirective } from './showMovie.directive';

@NgModule({
  declarations: [				
    AppComponent,
      HighLightDirectiveDirective,
      DisplayGuestsDirective,
      HoverClassDirective,
      HoverClassDirective,
      ShowMovieDirective
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
