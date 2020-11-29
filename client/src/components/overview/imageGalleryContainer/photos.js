class Node {
  constructor() {
    this.next = null;
    this.prev = null;
    this.value = null;
  }
}

class PhotosLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.thumbnails = null;
  }
  addNode(_value) {
    const node = new Node();
    node.value = _value;
  
    if (!this.head) {
      this.head = node;
      this.head.prev = this.head;
      this.head.next = this.head;
      this.tail = node;
      this.tail.prev = this.head;
      this.tail.next = this.head;
      this.length++;
      return;
    }
  
    // if (!this.tail) {
    //   this.tail = node;
    //   this.tail.prev = this.head;
    //   this.tail.next = this.head;
    //   this.head.next = this.tail;
    //   this.head.prev = this.tail;
    //   this.length++;
    //   return;
    // }
  
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.length++;
    return;
  }
  
  newThumbnails() {
    if (!this.head) {
      this.thumbnails = [];
    }
    const thumbnails = [];
    let counter = 0;
    let leftNode, rightNode, numLeftAndRightOfMiddle;
  
    const addToThumbnails = (_leftNode, _rightNode, _counter) => {
      thumbnails.unshift(_leftNode);
      thumbnails.push(_rightNode);
      _leftNode = _leftNode.prev;
      _rightNode = _rightNode.next;
      _counter++;
      return [_leftNode, _rightNode, _counter];
    };
  
    if (this.length % 2 === 1 || this.length >= 7) { // IF PHOTOS-LINKED-LIST LENGTH IS ODD IN LENGTH OR LENGTH IS 7 OR GREATER
      thumbnails.push(this.head);
  
      if (this.length === 1) {
        this.thumbnails = thumbnails;
      }
      numLeftAndRightOfMiddle = Math.floor(this.length / 2);
      [leftNode, rightNode, counter] = addToThumbnails(this.head.prev, this.head.next, counter);
  
    } else { // IF PHOTOS-LINKED-LIST LENGTH IS EVEN AND LESS THAN 7
      numLeftAndRightOfMiddle = this.length / 2;
      [leftNode, rightNode, counter] = addToThumbnails(this.head.prev, this.head, counter);
    }
    while (counter < numLeftAndRightOfMiddle && counter < 3) {
      [leftNode, rightNode, counter] = addToThumbnails(leftNode, rightNode, counter);
    }
    this.thumbnails = thumbnails;
  }
  
  next() {
    this.thumbnails = this.thumbnails.map(photo => photo.next);
    return this;
  }
  
  prev() {
    this.thumbnails = this.thumbnails.map(photo => photo.prev);
    return this;
  }
}

module.exports = PhotosLinkedList;