import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './service/post.service';
import {RouterModule, Routes} from '@angular/router';
import { NewPostComponent } from './new-post-component/new-post.component';
import {FormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: 'posts', component: PostListComponentComponent },
  { path: 'new', component: NewPostComponent },
  { path: '' , component: PostListComponentComponent },
  { path: '**' , component: PostListComponentComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
