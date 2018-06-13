import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../service/post.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onUpLove() {
    this.post.loveIts++;
    this.postService.onLoveChange(this.post.id, this.post.loveIts);
  }

  onDownLove() {
    this.post.loveIts--;
    this.postService.onLoveChange(this.post.id, this.post.loveIts);
  }

  onDeletePost() {
    this.postService.deletePost(this.post.id);
  }

}
