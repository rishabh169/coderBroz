import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './Topic.module.css';
import Question from './Question/Question';
import { Link } from 'react-router-dom';






const topic = (props) => {
  const topics = {

    "TimeComplexity": [

      "1. Time Complexity Of A Computer Program",

      "2. How To Calculate Running Time",

      "3. Asymptotic Notations",

      "4. Some General Rules",

      "5. Space Complexity",

      "6. Relevance Of Time Complexity"

    ],

    "Arrays": [

      "1. Introduction To Pointers In C/C++",

      "2. Arrays In Programming Fundamentals",

      "3. Pointers And Arrays",

      "4.Pointers And 2 D Arrays",

      "5.Array Implementation Details",

      "7.Insertion Sort Algorithm",

      "8.Merge Sort Algorithm",

      "9.Quick Sort Algorithm",

      "10.Sort Implementation Details",

      "11.Selection Sort",

      "12.Bubble Sort"

    ],

    "Binary Search": [
      "1. Binary Search Implementations And Common Errors",
      "2. Beyond Sorted Array Binary Search"
    ],

    "Strings": [
      "1. For C / C++ Users,",
      "2. For C / C++ Users ( Contd ),",
      "3. String Implementation Details"
    ],

    "Bit Manipulation": [
      "1. What Is Binary Number System",
      "2. Understanding Data Types Int",
      "3. Bitwise Operators",
      "4. Bitwise Operators ( Contd.. )",
      "5. Tricks With Bits",
      "6. Bitwise And Logical Operators :"
    ],

    "Two Pointers": [
      "1. Two Pointers"
    ],

    "Math": [

      "1.Math Introduction ",

      "2. Factorization",

      "3. Base Number System",

      "4.Unary Number System",

      "5.Binary Number System",

      "6.Base Conversion For Base N"

    ],



    "Linked List": [

      "1.Arrays Vs Linked Lists",

      "2.Linked List Implementation",

      "3. Doubly Linked List",

      "4.Doubly Linked List Implementation",

    ],





    "Stacks and Queues": [

      "1. Introduction To Stack",

      "2. Array Implementation Of Stack",

      "3. Linked List Implementation Of Stack",

      "4.Stack Implementation Details",

      "5.Introduction To Queues",

      "7.Linked List Implementation Of Queue",

      "8.Queue Implementation Details"

    ],







    "Backtracking": [

      "1. Recursion Basics Using Factorial",

      "2. Complexity Analysis Of Recursive Programs",

      "3. Why Recursion Is Not Always Good",

      "4.Time Complexity Analysis Of Recursion",

      "5.Space Complexity Analysis Of Recursion",

      "7.Backtraking Pseudocode"



    ],





    "Hashing": [

      "1. Introduction To Hashing",

      "2. Hash Tables",

      "3. Hash Functions",

      "4. Hashing Implementation Details"

    ],



    "Heaps And Maps": [

      "1. Why Treemaps/Heaps",

      "2. Heap And Map Implementation Details",

      "3. Heap Sort Algorithm"

    ],



    "Tree Data Structure": [

      "1. Introduction To Tree Data Structure",

      "2. Binary Tree",

      "3. Binary Search Tree",

      "4. Implementation Of Bs Ts"

    ],



    "Dynamic Programming": [

      "1. Dynamic Programming (Dp) Introductiion : ",

      "2. Dynamic Programming Examples : "

    ],









    "Greedy Algorithm": [

      "1. Greedy Algorithm Introduction",

      "2. Greedy Algorithm When To Use",

      "3.Activity Selection Problem"

    ],



    "Graph Data Structure & Algorithms": [

      "1. Introduction To Graphs",

      "2. Properties Of Graph",

      "3. Graph Traversals (Dfs And Bfs)",

      "4.Example Implementation Of Bfs And Dfs",

      "5.Breadth First Search",

      "7.Dijkstra Algorithm "

    ],

  }

  console.log(props.match.params.slug);
  let result = topics[props.match.params.slug].map((i) => {
    // console.log(`${props.match.path}`);
    return (<div className={` ${classes.box} ${classes.effect1}`} >{i}
      <Button variant="success" size="sm" as={Link} to={`${props.match.url}/${i}`}>Watch Video</Button>
    </div>);
  })
  return (
    <Aux>
      <Card >
        <Card.Header className="text-center">Videos</Card.Header>
        <Card.Body className="text-center">
          <Card.Title>{props.match.params.slug}</Card.Title>
        </Card.Body>

        {result}
      </Card>

      <Card className="mt-3 ">
        <Card.Header className="text-center">Similar Pattern Problems</Card.Header>
        <Card.Body className="text-center">
          <Card.Title>{props.match.params.slug}</Card.Title>
        </Card.Body>
        <Question slug={props.match.params.slug} />
      </Card>
    </Aux>
  );
}

export default topic;