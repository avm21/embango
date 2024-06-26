import { module, test } from 'qunit';

import { setupTest } from 'client/tests/helpers';

module('Unit | Serializer | book', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('book');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('book', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
