const questions = [
  {
    question: "What's the output of this code? console.log(typeof typeof 1);",
    choices:[
      "number", 
      "1", 
      "string", 
      "true"],
    correctAnswer: "string",
  },
  {
    question: "What's the output of this code? console.log(3 > 2 > 1);",
    choices:[
      "true",
      "false",],
    correctAnswer: "false",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    choices:[
      "if i == 5 then", 
      "if i = 5 then", 
      "if i = 5", 
      "if (i==5)"],
    correctAnswer: "if (i==5)",
  },

  {
    question: "Java Script supports all boolean operators",
    choices:[
      "true",
      "false"],
    correctAnswer: "false",
  },

  {
    question:"Is it possible to declare a variable in Java Script along its type?",
    choices:[
      "true",
      "false"],
    correctAnswer:"false",
  },
  {
    question:"What does the iterator protocol say?",
    choices:[
      "An iterator is an object with a next() method that returns an object with one property - value.",
      
      "An iterator is an object with a next() method that returns an array with two elements.",
      
      "An iterator is an object with a next() method that returns an object with two properties - done and value.",
      
      "None of the above"],
    correctAnswer:"An iterator is an object with a next() method that returns an object with two properties - done and value."
  },
];

export default questions;