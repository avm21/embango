import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

import { renderLikeButton } from '../../react/like_button';

export default class BooksListComponent extends Component {
  @service router;

  @action
  onClickBook(id) {
    // debugger;
    this.router.transitionTo(`/books/${id}`);
  }

  @action
  onDidInsert() {
    renderLikeButton();
  }
}
