import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post-ajout',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const titre = form.value['titre'];
    const content = form.value['content'];
    this.postService.addPost(titre, content);
    this.router.navigate(['/posts']);
  }

}
