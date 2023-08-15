import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VideosComponent } from './pages/videos/videos.component';
import { PeopleComponent } from './pages/people/people.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { EventsComponent } from './pages/events/events.component';
import { CommunitiesComponent } from './pages/communities/communities.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    component : HomeComponent,
    path : '',
    title : "SALT-TEST"
  },
  {
    component : LoginComponent,
    path : 'login',
    title : 'login - pages'
  },
  {
    component : RegisterComponent,
    path : 'register',
    title : 'register - pages'
  },
  {
    component : VideosComponent,
    path : 'videos',
    title : 'Videos'
  },
  {
    component : PeopleComponent,
    path : "people",
    title : 'People pages'
  },
  {
    component : DocumentsComponent,
    path : 'docs',
    title : 'documents'
  },
  {
    component : EventsComponent,
    path : 'event',
    title : 'Events'
  },
  {
    component : CommunitiesComponent,
    path : 'communities',
    title : 'Communities'
  },
  {
    component : FavoritesComponent,
    path : 'favorites',
    title : "Favorites"
  },
  {
    component : ChannelsComponent,
    path : 'channels',
    title : 'Channels'
  },
  {
    component : DashboardComponent,
    path : 'dashboard',
    title : 'Dashboard'
  },{
    component : PostComponent,
    path : 'post',
    title : 'POST'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
