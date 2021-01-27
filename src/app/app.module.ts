import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './components/posts/post/post.component';
import {PostResolveService} from "./services/post-resolve.service";
import { PostsBodyInfoComponent } from './components/posts/posts-body-info/posts-body-info.component';


const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'posts', component: PostsComponent, resolve: {allPostsData: PostResolveService}, children: [{
      path: ':id', component: PostsBodyInfoComponent
    }]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    PostsBodyInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
