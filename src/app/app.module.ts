import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { AdditionalComponent } from './additional/additional.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//Note that we have one component 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    AdditionalComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
