import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.sass']
})
export class VoteComponent implements OnInit {

  constructor(private catService: CatService) {
    this.getCats();
  }

  ngOnInit() {
  }

  getCats() {
    this.catService.getCats().subscribe(data => {
      console.log(data);
    });
  }

}
