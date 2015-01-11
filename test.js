var expect = require('chai').expect;
var LinkedList = require('./');

describe('linked-list', function() {
  it('should create a linked list', function() {
    var list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8]);

    this.node = null;

    function next() {
      this.node = this.node ? this.node.next : list.head;
      return this.node.value;
    }

    for (var i = 1; i <= 8; i++) {
      expect(next()).to.equal(i);
    }
  });
});
