// Quiz Engine - Sistem za upravljanje testovima
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizType = 'episode'; // 'episode' ili 'comprehensive'

// Inicijalizacija stranice
document.addEventListener('DOMContentLoaded', function() {
    loadEpisodeTests();
    loadComprehensiveTests();
});

// Učitavanje testova po epizodama
function loadEpisodeTests() {
    const grid = document.getElementById('episodeTestGrid');
    grid.innerHTML = '';
    
    for (let episodeNum in episodeQuizzes) {
        const quiz = episodeQuizzes[episodeNum];
        const card = createTestCard(
            quiz.title,
            `${quiz.questions.length} pitanja`,
            'Epizoda ' + episodeNum,
            () => startEpisodeQuiz(episodeNum)
        );
        grid.appendChild(card);
    }
}

// Učitavanje sveobuhvatnih testova
function loadComprehensiveTests() {
    const grid = document.getElementById('comprehensiveTestGrid');
    grid.innerHTML = '';
    
    comprehensiveTests.forEach(test => {
        const card = createTestCard(
            test.title,
            '25 pitanja iz svih epizoda',
            'Mešovit test',
            () => startComprehensiveQuiz(test.id - 1)
        );
        grid.appendChild(card);
    });
}

// Kreiranje kartice testa
function createTestCard(title, description, badge, onClick) {
    const card = document.createElement('div');
    card.className = 'test-card';
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <span class="badge">${badge}</span>
    `;
    card.onclick = onClick;
    return card;
}

// Prikazivanje sekcije
function showSection(sectionName) {
    // Sakrij sve sekcije
    document.getElementById('episode-tests').style.display = 'none';
    document.getElementById('comprehensive-tests').style.display = 'none';
    document.getElementById('quizContainer').classList.remove('active');
    document.getElementById('resultsContainer').classList.remove('active');
    
    // Prikaži odabranu sekciju
    if (sectionName === 'episode-tests') {
        document.getElementById('episode-tests').style.display = 'block';
    } else if (sectionName === 'comprehensive-tests') {
        document.getElementById('comprehensive-tests').style.display = 'block';
    }
    
    // Ažuriraj dugmad navigacije
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Početak testa epizode
function startEpisodeQuiz(episodeNum) {
    quizType = 'episode';
    currentQuiz = episodeQuizzes[episodeNum];
    initializeQuiz();
}

// Početak sveobuhvatnog testa
function startComprehensiveQuiz(testIndex) {
    quizType = 'comprehensive';
    currentQuiz = comprehensiveTests[testIndex];
    initializeQuiz();
}

// Inicijalizacija kviza
function initializeQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    
    // Sakrij grid testova
    document.getElementById('episode-tests').style.display = 'none';
    document.getElementById('comprehensive-tests').style.display = 'none';
    
    // Prikaži quiz kontejner
    document.getElementById('quizContainer').classList.add('active');
    document.getElementById('quizTitle').textContent = currentQuiz.title;
    
    // Prikaži prvo pitanje
    showQuestion();
}

// Prikaz trenutnog pitanja
function showQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    // Ažuriraj progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';
    
    // Ažuriraj brojač pitanja
    document.getElementById('questionCounter').textContent = 
        `Pitanje ${currentQuestionIndex + 1} od ${currentQuiz.questions.length}`;
    
    // Generiši HTML za pitanje
    container.innerHTML = `
        <h3>Pitanje ${currentQuestionIndex + 1}</h3>
        <p style="font-size: 18px; margin: 20px 0;">${question.question}</p>
        <div class="options">
            ${question.options.map((option, index) => `
                <div class="option" onclick="selectAnswer(${index})" id="option-${index}">
                    <span style="font-weight: bold; color: #667eea;">
                        ${String.fromCharCode(65 + index)}.
                    </span> ${option}
                </div>
            `).join('')}
        </div>
    `;
    
    // Ažuriraj dugmad
    updateNavigationButtons();
    
    // Ako je pitanje već odgovoreno, prikaži odgovor
    if (userAnswers[currentQuestionIndex] !== undefined) {
        showAnswerFeedback(userAnswers[currentQuestionIndex]);
    }
}

// Selekcija odgovora
function selectAnswer(answerIndex) {
    // Ako je već odgovoreno, ne dozvoli promenu
    if (userAnswers[currentQuestionIndex] !== undefined) {
        return;
    }
    
    // Sačuvaj odgovor
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Prikaži feedback
    showAnswerFeedback(answerIndex);
}

// Prikaz feedback-a za odgovor
function showAnswerFeedback(selectedIndex) {
    const question = currentQuiz.questions[currentQuestionIndex];
    const correctIndex = question.correct;
    
    // Onemogući sve opcije
    document.querySelectorAll('.option').forEach(option => {
        option.classList.add('disabled');
        option.onclick = null;
    });
    
    // Označi odabrani odgovor
    const selectedOption = document.getElementById(`option-${selectedIndex}`);
    
    if (selectedIndex === correctIndex) {
        // Tačan odgovor
        selectedOption.classList.add('correct');
        if (userAnswers[currentQuestionIndex] === selectedIndex && 
            userAnswers.filter(a => a === undefined).length === 0) {
            // Samo dodaj poene ako je prvi put odgovoreno
        }
    } else {
        // Netačan odgovor
        selectedOption.classList.add('incorrect');
        // Prikaži tačan odgovor
        document.getElementById(`option-${correctIndex}`).classList.add('correct');
    }
    
    // Omogući prelazak na sledeće pitanje
    updateNavigationButtons();
}

// Ažuriranje navigacionih dugmadi
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Previous dugme
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next dugme
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        // Poslednje pitanje
        if (userAnswers[currentQuestionIndex] !== undefined) {
            nextBtn.textContent = 'Završi Test';
            nextBtn.onclick = finishQuiz;
        } else {
            nextBtn.textContent = 'Sledeće';
            nextBtn.disabled = true;
        }
    } else {
        nextBtn.textContent = 'Sledeće';
        nextBtn.onclick = nextQuestion;
        nextBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
    }
}

// Prelazak na sledeće pitanje
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// Prelazak na prethodno pitanje
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Završetak kviza
function finishQuiz() {
    // Izračunaj skor
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuiz.questions[index].correct) {
            score++;
        }
    });
    
    // Sakrij quiz kontejner
    document.getElementById('quizContainer').classList.remove('active');
    
    // Prikaži rezultate
    showResults();
}

// Prikaz rezultata
function showResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.classList.add('active');
    
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Određivanje kategorije skora
    const scoreCircle = document.getElementById('scoreCircle');
    scoreCircle.textContent = `${score}/${totalQuestions}`;
    
    // Ukloni sve klase skora
    scoreCircle.className = 'score-circle';
    
    // Dodaj odgovarajuću klasu na osnovu procenta
    if (percentage >= 90) {
        scoreCircle.classList.add('score-excellent');
    } else if (percentage >= 70) {
        scoreCircle.classList.add('score-good');
    } else if (percentage >= 50) {
        scoreCircle.classList.add('score-average');
    } else {
        scoreCircle.classList.add('score-poor');
    }
    
    // Postavi tekst rezultata
    document.getElementById('scoreText').textContent = 
        `Vaš rezultat: ${score} od ${totalQuestions} tačnih odgovora (${percentage}%)`;
    
    // Postavi poruku na osnovu skora
    let message = '';
    if (percentage >= 90) {
        message = 'Odlično! Pokazali ste izvrsno znanje!';
    } else if (percentage >= 70) {
        message = 'Vrlo dobro! Imate solidno razumevanje materijala.';
    } else if (percentage >= 50) {
        message = 'Dobro! Još malo vežbe i bićete ekspert.';
    } else {
        message = 'Potrebno je još učenja. Probajte ponovo!';
    }
    document.getElementById('scoreMessage').textContent = message;
}

// Ponovi kviz
function retryQuiz() {
    // Resetuj sve
    userAnswers = [];
    score = 0;
    currentQuestionIndex = 0;
    
    // Sakrij rezultate
    document.getElementById('resultsContainer').classList.remove('active');
    
    // Ponovo pokreni kviz
    initializeQuiz();
}

// Nazad na testove
function backToTests() {
    // Sakrij rezultate
    document.getElementById('resultsContainer').classList.remove('active');
    
    // Prikaži odgovarajuću sekciju
    if (quizType === 'episode') {
        document.getElementById('episode-tests').style.display = 'block';
    } else {
        document.getElementById('comprehensive-tests').style.display = 'block';
    }
    
    // Resetuj kviz
    currentQuiz = null;
    userAnswers = [];
    score = 0;
    currentQuestionIndex = 0;
}