import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports
import { ChartsModule } from 'ng2-charts';

// Components
import { HypopressGameComponent } from './hypopress-game/hypopress-game.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, HypopressGameComponent, ProgressComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTabsModule,
    MatIconModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
