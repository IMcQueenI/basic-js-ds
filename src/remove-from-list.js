const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 * Singly - linked lists are already defined using interface
*/


  

function removeKFromList(list, k) {
	let mqList = {};
	if (list.next == null && list.value !== k) {
	  return list;
	} else if (list.next == null && list.value === k) {
	  return null;
	};
	if (list.value !== k) {
		mqList.value = list.value;
		mqList.next = removeKFromList(list.next, k);
		return mqList;
	};
	if (list.value === k) {
		mqList = removeKFromList(list.next, k);
		return mqList;
	};
}

module.exports = {
  removeKFromList
};
