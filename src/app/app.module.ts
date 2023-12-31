import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChatPageComponent } from './components/side-components/chat-page/chat-page.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/side-components/profile/profile.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupsComponent } from './components/side-components/groups/groups.component';
import { ContactsComponent } from './components/side-components/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './components/side-components/settings/settings.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddGroupComponent } from './components/side-components/groups/add-group/add-group.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GetFirstLetterPipe } from './utils/get-first-letter.pipe';
import { AddContactsComponent } from './components/side-components/contacts/add-contacts/add-contacts.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatPageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GroupsComponent,
    ContactsComponent,
    SettingsComponent,
    AddGroupComponent,
    GetFirstLetterPipe,
    AddContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    NgbModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
