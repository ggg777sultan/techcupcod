const quizData = [
    {
    question: "Продолжи счет. 2,4,6,....",
    a: "8",
    b: "7",
    c: "12",
    d: "14",
    correct: "a",
    },
    {
        question: "Продолжи счет. 1,3,5,....",
        a: "6",
        b: "5",
        c: "7",
        d: "8",
        correct: "c",
        },
        {
            question: "Продолжи счет. 10,20,30,.....",
            a: "35",
            b: "3030",
            c: "41",
            d: "40",
            correct: "d",
            },
            {
                question: "продолжи выражения. a,b,aa,.....",
                a: "ba",
                b: "bb",
                c: "ab",
                d: "bbb",
                correct: "b",
                },
                {
                    question: "Продолжи выражения. о,а,оо,аа,....",
                    a: "оао",
                    b: "аоа",
                    c: "ооо",
                    d: "ааа",
                    correct: "c",
                    },
                    {
                        question: "Реши задачу.Если у меня есть 6 яблок и одно я отдал маме,другое отдал папе и одно положил в карман.сколько у меня яблок?",
                        a: "4",
                        b: "5",
                        c: "6",
                        d: "3",
                        correct: "a",
                        },
                        {
                            question: "Реши выражения.абвгд + е",
                            a: "авбгде",
                            b: "агдбве",
                            c: "абвгде",
                            d: "аабвгде",
                            correct: "c",
                            },
                            {
                                question: "Реши выражения.абвгд - д",
                                a: "абв",
                                b: "абвгде",
                                c: "абвгдд",
                                d: "абвг",
                                correct: "d",
                                },
                                {
                                    question: "Реши выражения.ba+bo+bu=?",
                                    a: "baboba",
                                    b: "babobu",
                                    c: "ababobub",
                                    d: "bbb",
                                    correct: "b",
                                    },
                                    {
                                        question: "Реши выражения.-ggg+bb-b+d",
                                        a: "gggbbd",
                                        b: "ggbb",
                                        c: "gggbd",
                                        d: "gbbd",
                                        correct: "c",
                                        },
   ];
   const quiz= document.getElementById('quiz')
   const answerEls = document.querySelectorAll('.answer')
   const questionEl = document.getElementById('question')
   const a_text = document.getElementById('a_text')
   const b_text = document.getElementById('b_text')
   const c_text = document.getElementById('c_text')
   const d_text = document.getElementById('d_text')
   const submitBtn = document.getElementById('submit')
   let currentQuiz = 0
   let score = 0
   loadQuiz()
   function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
   }
   function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
   }
   function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
    if(answerEl.checked) {
    answer = answerEl.id
    }
    })
    return answer
   }
   submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
    if(answer === quizData[currentQuiz].correct) {
    score++
    }
    currentQuiz++
    if(currentQuiz < quizData.length) {
    loadQuiz()
    } else {
    quiz.innerHTML = `
    <h2>вы ответили правильно на  ${score}/${quizData.length} вопросов</h2>
    
    `
    }
    }
   })