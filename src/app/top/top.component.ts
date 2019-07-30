import { Component, OnInit, HostListener } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {

  topCats = [];
  order_by = 'count';
  filter = {order_by: this.order_by, order: '-1', skip: 0, limit: 9};

  constructor(private catService: CatService) {
    this.getTopCats();
  }

  ngOnInit() {
  }

  getTopCats() {
    this.catService.getTopCats(this.filter).subscribe(results => this.onSuccess(results));
  }

  // push new results to topCats after load & infinity scroll
  onSuccess(res) {
    if (res !== undefined) {
      res.forEach(item => {
        this.topCats.push(item);
      });
    }
  }

  // simple infinity scroll
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight))   {
      this.filter.skip = this.filter.skip + 9;
      this.getTopCats();
    }
  }

  resetFilter() {
    this.topCats = [];
    this.filter = {order_by: this.order_by, order: '-1', skip: 0, limit: 9};
  }

  // function for change order
  changeOrder(order) {
    this.resetFilter();
    this.filter.order = order;
    this.getTopCats();
  }

  changeSort(sort) {
    this.order_by = sort;
    this.resetFilter();
    this.getTopCats();
  }

}
