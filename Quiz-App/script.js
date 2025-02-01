const quizData = [
  {
    question: "What is the time complexity of accessing an element in an array?",
    a: "O(1)",
    b: "O(n)",
    c: "O(log n)",
    d: "O(n^2)",
    correct: "a",
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out)?",
    a: "Queue",
    b: "Stack",
    c: "Linked List",
    d: "Array",
    correct: "b",
  },
  {
    question: "Which of these is a linear data structure?",
    a: "Stack",
    b: "Tree",
    c: "Graph",
    d: "Hash Table",
    correct: "a",
  },
  {
    question: "What is the worst-case time complexity of quicksort?",
    a: "O(n)",
    b: "O(log n)",
    c: "O(n log n)",
    d: "O(n^2)",
    correct: "d",
  },
  {
    question: "Which of the following is not a type of linked list?",
    a: "Singly Linked List",
    b: "Doubly Linked List",
    c: "Circular Linked List",
    d: "Heap Linked List",
    correct: "d",
  },
  {
    question: "Which data structure is used to implement recursion?",
    a: "Stack",
    b: "Queue",
    c: "Tree",
    d: "Graph",
    correct: "a",
  },
  {
    question: "What is the time complexity of searching in a balanced binary search tree?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n log n)",
    correct: "b",
  },
  {
    question: "Which algorithm is used to find the shortest path in a graph?",
    a: "Breadth-First Search",
    b: "Dijkstra's Algorithm",
    c: "Merge Sort",
    d: "Quick Sort",
    correct: "b",
  },
  {
    question: "What is the space complexity of an algorithm that uses O(n) space?",
    a: "O(1)",
    b: "O(n)",
    c: "O(log n)",
    d: "O(n^2)",
    correct: "b",
  },
  {
    question: "Which of the following is not a stable sorting algorithm?",
    a: "Bubble Sort",
    b: "Merge Sort",
    c: "Insertion Sort",
    d: "Quick Sort",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
