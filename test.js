var expect = require('chai').expect;
var LinkedList = require('./');

describe('linked-list', function() {

  it('should create a linked list', function() {
    var list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8]);

    var it = list.iterator();

    for (var i = 1; i <= 8; i++) {
      expect(it.next()).to.equal(i);
    }
  });

  it('should error if iteration goes over', function() {
    var list = new LinkedList([1, 2, 3]);
    var it = list.iterator();
    it.next();
    it.next();
    it.next();
    expect(function() {
      it.next()
    }).to.throw(/At tail/);
  });

  it('should convert LinkedList to array', function() {
    var arr = [];
    for (var i = 0; i < 100; i++) {
      arr.push(Math.random() * 21312);
    }
    var list = new LinkedList(arr);
    expect(list.toArray()).to.eql(arr);
  });

});
