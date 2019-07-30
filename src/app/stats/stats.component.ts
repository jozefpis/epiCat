import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  countPairs: number;
  stats: any;

  constructor(private catService: CatService) {
    this.getStats();
  }

  ngOnInit() {
  }

  getStats() {
    this.catService.getStats().subscribe(res => {
      this.stats = res;
      this.countPairs = this.stats.length;
    });
  }

}
