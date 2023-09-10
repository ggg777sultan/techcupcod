const quizData = [
    {
    question: "Есепті жалғастырыңыз. 2,4,6,....",
    a: "8",
    b: "7",
    c: "12",
    d: "14",
    correct: "a",
    },
    {
        question: "Есепті жалғастырыңыз. 1,3,5,....",
        a: "6",
        b: "5",
        c: "7",
        d: "8",
        correct: "c",
        },
        {
            question: "Есепті жалғастырыңыз. 10,20,30,.....",
            a: "35",
            b: "3030",
            c: "41",
            d: "40",
            correct: "d",
            },
            {
                question: "өрнектерді жалғастырыңыз. a,b,aa,.....",
                a: "ba",
                b: "bb",
                c: "ab",
                d: "bbb",
                correct: "b",
                },
                {
                    question: "Өрнектерді жалғастырыңыз. о, а, оо, аа,....",
                    a: "оао",
                    b: "аоа",
                    c: "ооо",
                    d: "ааа",
                    correct: "c",
                    },
                    {
                        question: "Мәселені шешіңіз.Егер менде 6 Алма болса және біреуін анама берсем,екіншісін әкеме беріп, біреуін қалтама салдым.менде қанша алма бар?",
                        a: "4",
                        b: "5",
                        c: "6",
                        d: "3",
                        correct: "a",
                        },
                        {
                            question: "Өрнектерді шеш.abvgd + e",
                            a: "авбгде",
                            b: "агдбве",
                            c: "абвгде",
                            d: "аабвгде",
                            correct: "c",
                            },
                            {
                                question: "Өрнектерді шеш.абвгд-д",
                                a: "абв",
                                b: "абвгде",
                                c: "абвгдд",
                                d: "абвг",
                                correct: "d",
                                },
                                {
                                    question: "Өрнектерді шеш. ba+bo + bu=?",
                                    a: "baboba",
                                    b: "babobu",
                                    c: "ababobub",
                                    d: "bbb",
                                    correct: "b",
                                    },
                                    {
                                        question: "Өрнектерді шеш.ggg+bb+d",
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
    <h2>Сіз дұрыс жауап бердіңіз  ${score}/${quizData.length}сұрақтар</h2>
    
    `
    }
    }
   })