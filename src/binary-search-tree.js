const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

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

      if (data < node.data) {
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
        return null;
      }

      if (node.data === data) {
        return node.data;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
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