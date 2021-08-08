import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PipesComponent } from './components/pipes/pipes.component';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { BackendService } from './services/backendService';
import { ShortenPipe } from './custom-pipes/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ReactiveFormComponent,
    PipesComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
