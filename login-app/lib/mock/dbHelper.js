class DBHelper {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  connect() {
    this.collection = require('../../db/db').default[this.collectionName];
    if(!this.collection) {
      throw new Error('collection not found');
    }
  }

  closeConnection() {
    return true;
  }

  findOne(query) {
    return this.collection.find(data => {
      let found = false;
      for(let prop in query) {
        if(data.hasOwnProperty(prop)) {
          if(data[prop] != query[prop]) {
            found = false;
            break;
          }
          found = true;
        }
      }
      if(found) {
        return true;
      }
    });
  }
}

export default DBHelper;