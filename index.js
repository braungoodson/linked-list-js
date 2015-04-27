/**
 * Creates a LinkedList from an array.
 */
function LinkedList(arr) {
  var last = null;
  for (var i = 0; i < arr.length; i++) {
    var node = {
      value: arr
    };
    if (!last) {
      this.head = node;
    } else {
      last.next = node;
    }
    last = node;
  }
}

/**
 * LinkedList iterator
 */
LinkedList.prototype.iterator = function() {
  var list = this;
  return {
    next: function() {
      if (this.node && !this.node.next) {
        throw new Error('At tail of list!');
      }
      this.node = this.node ? this.node.next : list.head;
      return this.node.value;
    },
    hasNext: function() {
      if (!this.node) return list.head;
      return this.node.next;
    }
  };
};

/**
 * Converts this LinkedList to an array.
 */
LinkedList.prototype.toArray = function() {
  var it = this.iterator();
  var ret = [];
  while (it.hasNext()) {
    ret.push(it.next());
  }
  return ret;
};

module.exports = LinkedList;
