import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  headers = new HttpHeaders().set('x-api-key', '9926b5a0-4569-4934-940b-8746328ca0aa');

  constructor(private http: HttpClient) {
  }

  getCats() {
    localStorage.setItem('voteCount', (parseInt(localStorage.getItem('voteCount'), 10) + 1).toString()); // count how many times i voted

    const user_id = { sub_id: localStorage.getItem('user_id') };
    const getCats1 = this.http.get('/thecatapi/images/search?limit=2&size=med', { headers: this.headers }); // call to cats api
    const getCats2 = this.http.get('/api/pairs/onepair', { params: user_id }); // call to my backend
    // check if my count of votes is bigger that 10, if yes call used or new pair with 0.5 - 0.5 probability
    return ((parseInt(localStorage.getItem('voteCount'), 10) < 10) || (Math.floor(Math.random() * 10) + 1)) < 5 ? getCats1 : getCats2;
  }

  createVote(cats: any, cat: any) {
    const vote = { cats: cats, cat_id: cat.id, sub_id: localStorage.getItem('user_id'), cat_url: cat.url};
    return this.http.post('/api/votes', vote);
  }

  getStats() {
    return this.http.get('/api/pairs/getstats');
  }

  getTopCats(filter) {
    return this.http.get('/api/votes/catslist', { params: filter });
  }

}
