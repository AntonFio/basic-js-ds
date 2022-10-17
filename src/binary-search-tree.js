const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null
  }

  root() {
    if (!this.rootTree) {
      return null
    } else {
      return this.rootTree
    }
  }

  add(data) {
    this.rootTree = addData(this.rootTree, data);

    function addData(node, data) {
      if (!node) {
        return node = new Node(data)
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.value) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.rootTree, data);

    function searchNode(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootTree, data);

    function findNode(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootTree = removeData(this.rootTree, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }



    }
  }

  min() {
    if (!this.rootTree) {
      return
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    if (!this.rootTree) {
      return
    }

    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};