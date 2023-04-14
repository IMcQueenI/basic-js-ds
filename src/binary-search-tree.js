const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.tree = null;
	}
	root() {
	return this.tree
	}

add(data) {
	const node = this.tree;
	if (node === null) {
		this.tree = new Node(data);
		return;
	} else {
	const searchLinks = function(node) {
		if (data < node.data) {
			if (node.left === null) {
				node.left = new Node(data);
				return;
			} else if (node.left !== null) {
				return searchLinks(node.left);
			};
			} else if (data > node.data) {
				if (node.right === null) {
				node.right = new Node(data);
				return;
			} else if (node.right !== null) {
				return searchLinks(node.right);
			};
			} else {
			return null;
			};
		};
		return searchLinks(node);
	};
}

has(data) {
	let current = this.tree;
	while (current.data !== data) {
		if (data < current.data) {
		current = current.left;
		} else {
		current = current.right;
		};
		if (current === null) {
		return false;
		};
	};
	return true;
}

find(data) {
	let current = this.tree;
	while (current.data !== data) {
		if (data < current.data) {
		current = current.left;
		} else {
		current = current.right;
		};
		if (current === null) {
		return null;
		};
	};
	return current;
}

min() {
	let current = this.tree;
	while (current.left !== null) {
		current = current.left;
	};
	return current.data;
}

max() {
	let current = this.tree;
	while (current.right !== null) {
		current = current.right;
	};
	return current.data;
}

remove(data) {
	const removeNode = function(node, data) {
		if (node == null) {
			return null;
		};
		if (data == node.data) {
			if (node.left == null && node.right == null) {
			return null;
			};
			if (node.left == null) {
			return node.right;
			};
			if (node.right == null) {
			return node.left;
			};
			let checkNode = node.right;
			while (checkNode.left !== null) {
			checkNode = checkNode.left;
			};
			node.data = checkNode.data;
			node.right = removeNode(node.right, checkNode.data);
			return node;
			} else if (data < node.data) {
			node.left = removeNode(node.left, data);
			return node;
			} else {
			node.right = removeNode(node.right, data);
			return node;
			};
		};
		this.tree = removeNode(this.tree, data);
}

}


module.exports = {
  BinarySearchTree
};