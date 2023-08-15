import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    VideosComponent,
    PeopleComponent,
    DocumentsComponent,
    EventsComponent,
    CommunitiesComponent,
    FavoritesComponent,
    ChannelsComponent,
    DashboardComponent,
    PostComponent
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
export class AppModule { }
