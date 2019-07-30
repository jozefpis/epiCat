import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.sass'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('.photo_overlay', style({ transform: 'translateY(3%)', opacity: 0})),
        query('.photo_overlay',
          stagger('500ms', [
            animate('1000ms ease-in', style({ transform: 'translateY(0)',  opacity: 1}))
        ]))
      ])
    ])
  ]
})
export class VoteComponent implements OnInit {

  cat_photos;
  imageLoader = true;
  loadedImageCount = 0;

  constructor(private catService: CatService) {
    this.getCats();
  }

  ngOnInit() {
  }

  // get pair cats for vote
  getCats() {
    this.catService.getCats().subscribe(data => {
        this.cat_photos = data;
      });
  }

  vote(cat) {
    this.imageLoader = true;
    this.catService.createVote(this.cat_photos, cat).subscribe(res => {
      this.getCats();
    });
  }

  // check if all two pictures of pair are loaded
  load() {
    this.loadedImageCount++;
    if (this.loadedImageCount === 2) {
      this.imageLoader = false; // images are loaded hide loaders
      this.loadedImageCount = 0; // set loader to zero for next loading
    }
  }
}
