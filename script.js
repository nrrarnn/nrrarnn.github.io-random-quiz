const quizData = [
  {
    question: " Jika ada 12 ikan dan setengah dari mereka tenggelam, berapa banyak yang tersisa?",
    a: "0 ikan",
    b: "2 ikan",
    c: "6 ikan",
    d: "12 ikan",
    correct: "d",
  },
  {
    question: "Saya mempunyai 3 apel. Jika kamu mengambil 2 buah dari saya. Berapa apel yang kamu punya ?",
    a: "1 apel",
    b: "2 apel",
    c: "3 apel",
    d: "4 apel",
    correct: "b",
  },
  {
    question: "Jawab dengan benar! 1x1=...?",
    a: "1",
    b: "benar",
    c: "1 lah",
    d: "benar!",
    correct: "d",
  },
  {
    question: "Kapur merah dimasukan ke air jadi?",
    a: "Mencair",
    b: "Kapur",
    c: "Basah",
    d: "Airnya warna merah",
    correct: "c",
  },
  {
    question: "Apabila seekor sapi menghadapkan wajahnya ke Tenggara, maka ekornya menghadap kemana?",
    a: "Ke bawah",
    b: "Timur laut",
    c: "Tenggara",
    d: "Barat laut",
    correct: "a",
  },
  {
    question: "Isi perut dingin tetapi bagian punggungnya panas. Benda apakah itu?",
    a: "Korek api",
    b: "Gelas es",
    c: "Kulkas",
    d: "Tidak ada yang benar",
    correct: "c",
  },
  {
    question: "setiap 7 hari sekali berubah menjadi merah, Apakah itu?",
    a: "Bibir",
    b: "Hari Minggu",
    c: "Hari Libur",
    d: "Apel",
    correct: "b",
  },
  {
    question: "Anda ikut dalam perlombaan lari. Jika anda menyalip orang posisi nomor dua, maka sekarang posisi anda nomor berapa?",
    a: "4",
    b: "3",
    c: "2",
    d: "1",
    correct: "c",
  },
  {
    question: "Kuda apa yang tidak bisa dinaiki  dan jalannya aneh?",
    a: "Kuda Zebra",
    b: "Kuda Pony",
    c: "Kuda nil",
    d: "Kuda Catur",
    correct: "d",
  },
  {
    question: "Lahir di Arab, besar di Arab tetapi tidak bahasa Arab, apakah itu?",
    a: "Aladin",
    b: "Onta arab",
    c: "Sultan",
    d: "Jin Aladin",
    correct: "b",
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
const deselectAnswer = () => {
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
  deselectAnswer();
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
      <h2>You answered ${score}/${quizData.length} questions correctly </h2>
      <button onclick="history.go(0)">Play Again</button>
      `;
    }
  }
});
