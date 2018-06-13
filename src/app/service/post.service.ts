import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Post} from '../models/Post.model';

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) { }

  postSubject = new Subject<Post[]>();

  private posts = [  ];

  addPost(title: string, content: string) {

    const newPost = new Post(0, '', '', 0 , new Date());

    newPost.title =  title;
    newPost.content = content;
    newPost.id = this.posts[this.posts.length - 1].id + 1;
    this.posts.push(newPost);
    this.savePostToServer();
    this.emitPostSubject();
  }

  deletePost(id: number) {
    const tmp = this.posts.findIndex(
      (postObject) => {
        if ( postObject.id === id) {
          return true;
        }
      }
    );
    this.posts.splice(tmp, 1);
    this.savePostToServer();
    this.emitPostSubject();
  }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }


  onLoveChange(id: number, love: number ) {
    const tmp = this.posts.findIndex(
      (postObject) => {
        if ( postObject.id === id) {
          return true;
        }
      }
    );
    this.posts[tmp].loveIts = love;
    this.savePostToServer();
    this.emitPostSubject();
  }


  savePostToServer() {
    this.httpClient.put('https://http-client-demo-a43a6.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('save ok');
        },
        (error) => {
          console.log('erreur ' + error);
        }

      );
  }

  getPostsFromServer() {
    this.httpClient.get<Post[]>('https://http-client-demo-a43a6.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('erreur' + error);
        }

      );
  }
}




