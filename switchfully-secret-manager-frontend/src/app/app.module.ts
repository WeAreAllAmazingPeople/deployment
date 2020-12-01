import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecretService} from './secret.service';
import {HttpClientModule} from '@angular/common/http';
import {SecretListComponent} from './list-secrets/secret-list.component';
import {AddSecretComponent} from './add-secret/add-secret.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SecretListComponent,
    AddSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SecretService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
