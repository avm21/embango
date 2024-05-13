import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class BookSerializer extends JSONAPISerializer {
  // plural handling
  modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === 'books') return 'book';

    return super.modelNameFromPayloadKey(payloadKey);
  }
}
