/**
 * Creates a LinkedList from an array.
 */
function LinkedList(arr) {
  var last = null;
  for (var i = 0; i < arr.length; i++) {
    var node = {
      value: arr[i]
    };
    if (!last) {
      this.head = node;
    } else {
      last.next = node;
    }
    last = node;
  }
}

module.exports = LinkedList;
