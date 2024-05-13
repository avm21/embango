import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BooksRoute extends Route {
  @service store;

  async model() {
    // return [{ title: 'Book 1' }, { title: 'Book 2' }, { title: 'Book 3' }];
    let books = await this.store.findAll('book');
    // debugger;
    return books;
  }
}
