'use strict';

const Node = require('./node');
//i Wnt to be able to connect my linked lists
class LinkedList {
    constructor(){
        this.head = null;
    }

    insert(){
        //insert a node at the beginning of a list
    //two options:
    //1. the list is empty
        //make a new Node with the value given
        //assign this.head to that new Node
    //2. the list is NOT empty
        //make a new Node with the value given
        const node = newNode(value);
        //I will make the new Node.next() to point to the current head value
       node.next = this.head; 
        //then reassign head to the new node
        this.head = node;
    }   


}