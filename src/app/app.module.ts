import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgRedux, NgReduxModule } from '@angular-redux/store';
//import { serviceListReducer, InitialState } from './reduxState/store';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor (ngRedux: NgRedux<any>) {
  //   ngRedux.configureStore(serviceListReducer, InitialState);
  // }
}
