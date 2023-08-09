import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChatPageComponent } from './components/side-components/chat-page/chat-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/side-components/profile/profile.component';
import { GroupsComponent } from './components/side-components/groups/groups.component';
import { ContactsComponent } from './components/side-components/contacts/contacts.component';
import { SettingsComponent } from './components/side-components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'chat', component: ChatPageComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
