function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

function add (lst, value){
    var new_node = createNode(value);
    new_node.next = lst.head;
    lst.head = new_node;
    return lst.head;
}

function printList(lst){
    var cur = lst.head;
    while(cur != null){
        console.log(cur.value);
        cur = cur.next;
    }
}

function reverseList(lst, cur){
    if(cur.next == null){
        lst.head = cur;
        return cur;
    }

    prev = reverseList(lst, cur.next);
    prev.next = cur;
    cur.next = null;
    return cur;
}

// Create a new Linked List 
// head = 2 -> 6 -> 5 -> 1 -> Null
var linkedList = {
    head : null,
};

add(linkedList, 1);
add(linkedList, 3);
add(linkedList, 4); 
add(linkedList, 6); 
add(linkedList, 8);
printList(linkedList);
reverseList(linkedList, linkedList.head)
printList(linkedList);
