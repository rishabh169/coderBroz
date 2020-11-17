import React from 'react';
import classes from './Question.module.css';
import {Link} from 'react-router-dom';

const question = (props) =>{

  const questions = {

    "TimeComplexity" : {

      "Array math" : [

        "Min Steps in Infinite Grid",

        "Add One To Number",

        "Max Sum Contiguous Subarray"

      ]},

    "Arrays" : {

      "Array math" : [

        "Min Steps in Infinite Grid",

        "Add One To Number",

        "Max Sum Contiguous Subarray"

      ]

      ,

      "Arrangement " : [

        "Largest Number",

        "Rotate Matrix",

        "Next Permutation"

      ]

    },

    "Math" : {

      "Adhoc" : [ "Prime Sum",

    "Sum of pairwise Hamming Distance",

  "FizzBuzz"] 

,

 

      "Base conversion" : [ "Excel Column Number",

    "Excel Column Title"],



    }
 ,

    "Binary Search" : {

      "Search answer" : [

        "Matrix Median",

        "Square Root of Integer",

        "Painter’s Partition Problem"

      ]

      ,

      "Simple binary search " : [

        "Matrix Search",

        "Search for a Range",

        "Sorted Insert Position3"

      ]

    },

 

 

    "Strings" : {

      "String simulation" : [

        "Palindrome String",

        "Longest Common Prefix",

        "Count And Say"

      ]

      ,

      "String search " : [

        "Amazing Subarrays",

        "Implement StrStr",

        "Stringoholics"

      ]

    },

 

 

    "Bit Manipulation" : {

      "Bit play" : [

        "Number of 1 Bits",

        "Reverse Bits",

        "Divide Integers"

      ]

      ,

      "Bit tricks " : [

        "Min XOR value",

        "Count Total Set Bits",

        "Palindromic Binary Representation"

      ]

    },

 

 

"Two Pointers " : {

      "Sorting" : [

        "Pair With Given Difference",

        "3 Sum",

        "3 Sum Zero"

      ]

      ,

      "Multiple arrays " : [

        "Merge Two Sorted Lists ll",

        "Intersection Of Sorted Arrays"

      ]

    },

 

 

 

"Linked Lists" : {

      "List sort" : [

        "Sort Binary Linked List",

        "Partition List",

        "Insertion Sort List"

 

      ]

      ,

      "List 2 pointer " : [

        "Palindrome List",

        "Remove Duplicates from Sorted List",

         "Remove Duplicates from Sorted List ll"

      ]

    },

 

 

"Linked Lists" : {

      "List sort" : [

        "Sort Binary Linked List",

        "Partition List",

        "Insertion Sort List"

 

      ]

      ,

      "List 2 pointer " : [

        "Palindrome List",

        "Remove Duplicates from Sorted List",

         "Remove Duplicates from Sorted List ll"

      ]

     ,

 

         "Pointer move " : [

        "K reverse linked list",

        "Swap List Nodes in pairs",

         "Rotate List"

      ]

     ,

      "List trick " : [

        "Kth Node From Middle",

        "Reverse Alternate K Nodes",

         "Reverse Link List ll"

      ]

     , "List math" : [

        "Add Two Numbers as Lists",

        "List Cycle"

      ]

     ,

 

 

    },

 

 

 

"Stacks And Queues" : {

      "Cleverstack" : [

        "MAXSPPROD",

        "Nearest Smaller Element",

        "Largest Rectangle in Histogram"

 

      ]

      ,

      "Queue " : [

        "First non-repeating character in a stream of characters",

        "Sliding Window Maximum"

      ]

     ,

 

         "Stack simple " : [

        "Simplify Directory Path",

        "Redundant Braces",

         "Min Stack"

      ]

     ,

      "Stack math " : [

        "Evaluate Expression",

        "Rain Water Trapped "

      ]

  

 

 

    },

 

 

"Backtracking" : {

      "Subsets" : [

        "Subset",

        "Combinations",

        "Combination Sum"

 

      ]

      ,

      "Bruteforce builder" : [

        "Letter Phone",

        "Palindrome Partitioning",

        "Generate all Parentheses ll"

      ]

     ,

 

         "Permutations " : [

        "Permutations"      ]

     ,

      "Maths and backtracking " : [

        "Gray Code",

        "Kth Permutation Sequence "

      ]

,

 

"Game solving " : [

        "NQueens",

        "Sudoku "

      ]

  

 

 

    },

 

 

 

"Hashing" : {

      "Hash search" : [

        "Colorful Number",

        "Largest Continuous Sequence Zero Sum",

        "2 Sum"

 

      ]

      ,

      "Key formation " : [

        "Anagrams",

        "Equal",

         "Copy List"

      ]

     ,

 

         "Hashing two pointer " : [

        "Longest Substring Without Repeat",

        "Window String"

       

      ]

     ,

      "Maths and hashing" : [

        "Fraction",

        "Points on the Straight Line"

      ]

     ,

 "Incremental hash" : [

        "Sustring Concatenation"

      ]

     ,

 

 

    },

 

 

    "Heaps And Maps" : {

      "Heap" : [

        "N max pair combinations",

        "Ways to form Max Heap",

        "K Largest Elements"

      ]

      ,

      "Map " : [

        "Distinct Numbers in Window",

        "LRU Cache"

      ]

    },

 

 

 

"Tree Data Structure" : {

      "Bst traversal" : [

        "Valid BST from Preorder",

        "Kth Smallest Element In Tree",

        "2-Sum Binary Tree "

 

      ]

      ,

      "Simple tree ops" : [

        "Remove Half Nodes",

        "Path to Given Node",

         "Balanced Binary Tree"

      ]

     ,

 

         "2 trees " : [

        "Merge two Binary Tree",

        "Identical Binary Trees",

         "Symmetric Binary Tree"

      ]

     ,

      "Traversal " : [

        "Vertical Order traversal of Binary Tree",

        "Digonal Traversal",

         "Inorder Traversal"

      ]

     , "Level order" : [

        "Cousins in Binary Tree",

        "Right view of Binary tree",

        "ZigZag Level Order Traversal BT"

 

      ]

     ,

 

      "Trie" : [

        "Hotel Reviews",

        "Shortest Unique Prefix"

      ]

      ,

      "Tree construction" : [

        "Inorder Traversal of Cartesian Tree",

        "Sorted Array To Balanced BST",

         "Binary Tree From Inorder And Postorder"

      ]

     ,

 

         "Inplace change " : [

        "Invert the Binary Tree "

      ]

     ,

      "Root to leaf" : [

        "Path Sum",

        "Root to Leaf Paths With Sum",

         "Max Depth of Binary Tree"

      ]

     , "Tree search" : [

        "Least Common Ancestor"

 

      ]

     ,

      "Linkedlist Tree" : [

        "Flatten Binary Tree to Linked List"      ]

     ,

 

         "Segment tree " : [

        "Order of People Heights "

      ]

 

 

 

 

 

    },

 

 

 

"Dynamic Programming" : {

      "2d string dp" : [

        "Longest Common Subsequence",

        "Longest Palindromic Subsequence",

        "Edit Distance"

 

      ]

      ,

      "Simple array dp" : [

        "Length of Longest Subsequence",

        "Largest area of rectangle with permutations",

         "Smallest sequence with given Primes"

      ]

     ,

 

         "Greedy or dp" : [

        "Tushar’s Birthday Bombs",

        "Jump Game Array",

         "Min Jumps Array"

      ]

     ,

      "Dp tricky " : [

        "Longest Arithmetic Progression",

        "N dight numbers with digit sum S",

         "Ways to color a 3xN Board"

      ]

     ,

        "Matrix dp" : [

        "Kingdom War",

        "Maximum Path in Triangle",

        "Min Sum Path in Matrix"

 

      ]

     ,

 

      "Suffix/prefix dp" : [

        "Sub Matrices with sum Zero",

        "Coin Sum Infinite",

         "Best Time to Buy and Sell Stocks l"

      ]

      ,

      "Derived dp" : [

        "Chain of Pairs",

        "Max Sum Without Adjacent Elements"

      ]

     ,

 

         "Knapsack " : [

        "Tushar’s Birthday Party ",

         "Flip Array ",

        "0-1 Knapsack "

 

 

      ]

     ,

      "Adhoc" : [

        "Best Time to Buy and Sell Stock ll"

      ]

     , "Dp optimized backtrack" : [

        "Word Break ll"

 

      ]

     ,

      "Tree dp" : [

        "Max Sum Path in Binary Tree"

     ]
     ,

         "Multiply dp" : [

        "Unique Binary Search Tree ll ",

        "Count Permutations of BST "

      ],
         "Breaking words" : [

        "Word Break ",

        "Palindrome Partitioning ll"

]
    },

"Greedy Algorithm" : {

      "Easy greedy" : [

        "Bulbs",

        "Highest Product "

 

      ]

      ,

      "Medium greedy" : [

        "Meeting rooms",

        "Distribute Candy",

         "Seats"

      ]

},

 

 

 

 

"Graph Data Structure & Algorithms " : {

      "Bfs" : [

        "Valid Path",

        "Region in BinaryMatrix",

        "Snake Ladder Problem! "

 

      ]

      ,

      "Graph connectivity" : [

        "Commutable Islands",

        "Possibility of finishing all courses given pre-requisites",

         "Cycle in Undirected Graph"

      ]

     ,

 

         "Depth first search " : [

        "Largest Distance between nodes of a Tree",

        "Identical Binary Trees",

         "Symmetric Binary Tree"

      ]

     ,

      "Traversal " : [

        "Vertical Order traversal of Binary Tree",

        "Cycle in Directed Graph"

      ]

     ,

        "Graph traversal" : [

        "Stepping Numbers",

        "Capture Regions on Board",

        "Word Search Board "

 

      ] ,

         "Graph adhoc " : [

        "Convert Sorted List to Binary Search Tree"

      ]

     ,

      "Shortest path " : [

        "Sum Of Fibonacci Numbers",

        "Knight On Chess Board",

        "Word Ladder l"

 

      ]

     ,

        "Graph hashing" : [

        "Clone Graph"

]

}}

const res = Object.keys(questions[props.slug]).map(i => {
  // console.log(questions[props.slug][i]);
  return(<div>
  <h3>{i}</h3>
  {questions[props.slug][i].map(j=>{
  return(<div><Link >{j}</Link></div>)
})}
  </div>

    );
});



// .map(i=>{
//   return (
//     <div className="text-center"> 
//     <h3>{i}</h3>
//     {props.slug[i].map(j=>{
//     return(<div>{j}</div>);
//   })
//   }
//     </div>
//   )
// });
// console.log(res);

return(
  <div className={classes.card}>
    {res}
  </div>
);
}

export default question;