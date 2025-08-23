// Quiz Engine - Sistem za upravljanje testovima (Ažuriran za 3 testa po epizodi)
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizType = 'episode'; // 'episode' ili 'comprehensive'
let currentTestIndex = 0; // Za praćenje koji test u epizodi

// Inicijalizacija stranice
document.addEventListener('DOMContentLoaded', function() {
    loadEpisodeTests();
    loadComprehensiveTests();
    checkForDirectLink();
});

// Provera direktnog linka
function checkForDirectLink() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#epizoda-')) {
        const episodeNum = hash.replace('#epizoda-', '');
        showSection('episode-tests');
        // Skroluj do te epizode
        setTimeout(() => {
            const element = document.getElementById(`episode-group-${episodeNum}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
}

// Učitavanje testova po epizodama - grupisano
function loadEpisodeTests() {
    const container = document.getElementById('episodeTestContainer');
    container.innerHTML = '';
    
    for (let episodeNum in episodeQuizzes) {
        const episode = episodeQuizzes[episodeNum];
        
        // Kreiraj grupu za epizodu
        const groupDiv = document.createElement('div');
        groupDiv.className = 'episode-group';
        groupDiv.id = `episode-group-${episodeNum}`;
        
        // Naslov epizode
        const groupTitle = document.createElement('h3');
        groupTitle.textContent = episode.title;
        groupDiv.appendChild(groupTitle);
        
        // Kontejner za testove
        const testsContainer = document.createElement('div');
        testsContainer.className = 'episode-tests';
        
        // Dodaj 3 testa za svaku epizodu
        episode.tests.forEach((test, index) => {
            const card = createTestCard(
                test.name,
                `${test.questions.length} pitanja`,
                `Test ${index + 1}`,
                () => startEpisodeQuiz(episodeNum, index)
            );
            testsContainer.appendChild(card);
        });
        
        groupDiv.appendChild(testsContainer);
        container.appendChild(groupDiv);
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
    
    // Sakrij quiz kontejner
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        quizContainer.classList.remove('active');
        quizContainer.style.display = 'none';
    }
    
    // Sakrij rezultate
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer) {
        resultsContainer.classList.remove('active');
        resultsContainer.style.display = 'none';
    }
    
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
    
    // Pronađi dugme koje odgovara sekciji
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        if ((sectionName === 'episode-tests' && btn.textContent.includes('Epizodama')) ||
            (sectionName === 'comprehensive-tests' && btn.textContent.includes('Sveobuhvatni'))) {
            btn.classList.add('active');
        }
    });
}

// Početak testa epizode (sa indeksom testa)
function startEpisodeQuiz(episodeNum, testIndex) {
    quizType = 'episode';
    currentTestIndex = testIndex;
    const episode = episodeQuizzes[episodeNum];
    currentQuiz = {
        title: `${episode.title} - ${episode.tests[testIndex].name}`,
        questions: episode.tests[testIndex].questions
    };
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
    
    // Sakrij rezultate ako su prikazani
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer) {
        resultsContainer.classList.remove('active');
        resultsContainer.style.display = 'none';
    }
    
    // Prikaži quiz kontejner
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        quizContainer.classList.add('active');
        quizContainer.style.display = 'block'; // Eksplicitno prikaži
    }
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
    
    // Ukloni postojeće event listenere za oba dugmeta
    const newPrevBtn = prevBtn.cloneNode(true);
    prevBtn.replaceWith(newPrevBtn);
    
    const newNextBtn = nextBtn.cloneNode(true);
    nextBtn.replaceWith(newNextBtn);
    
    // Previous dugme
    const finalPrevBtn = document.getElementById('prevBtn');
    finalPrevBtn.disabled = currentQuestionIndex === 0;
    if (!finalPrevBtn.disabled) {
        finalPrevBtn.addEventListener('click', previousQuestion);
    }
    
    // Next dugme
    const finalNextBtn = document.getElementById('nextBtn');
    
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        // Poslednje pitanje
        if (userAnswers[currentQuestionIndex] !== undefined) {
            finalNextBtn.textContent = 'Završi Test';
            finalNextBtn.disabled = false;
            finalNextBtn.addEventListener('click', function() {
                finishQuiz();
            });
        } else {
            finalNextBtn.textContent = 'Sledeće';
            finalNextBtn.disabled = true;
        }
    } else {
        finalNextBtn.textContent = 'Sledeće';
        finalNextBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
        if (!finalNextBtn.disabled) {
            finalNextBtn.addEventListener('click', function() {
                nextQuestion();
            });
        }
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
        if (currentQuiz && currentQuiz.questions && currentQuiz.questions[index]) {
            if (answer === currentQuiz.questions[index].correct) {
                score++;
            }
        }
    });
    
    // Sakrij quiz kontejner
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        quizContainer.classList.remove('active');
    }
    
    // Prikaži rezultate
    setTimeout(() => {
        showResults();
    }, 100); // Mali delay da osiguramo da se DOM ažurira
}

// Prikaz rezultata
function showResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    if (!resultsContainer) {
        alert('Greška: Kontejner za rezultate nije pronađen!');
        return;
    }
    
    // Prikaži kontejner
    resultsContainer.classList.add('active');
    resultsContainer.style.display = 'block'; // Eksplicitno prikaži
    
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
    const scoreText = document.getElementById('scoreText');
    if (scoreText) {
        scoreText.textContent = `Vaš rezultat: ${score} od ${totalQuestions} tačnih odgovora (${percentage}%)`;
    }
    
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
    const scoreMessage = document.getElementById('scoreMessage');
    if (scoreMessage) {
        scoreMessage.textContent = message;
    }
}

// Ponovi kviz
function retryQuiz() {
    // Resetuj sve
    userAnswers = [];
    score = 0;
    currentQuestionIndex = 0;
    
    // Sakrij rezultate
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer) {
        resultsContainer.classList.remove('active');
        resultsContainer.style.display = 'none'; // Eksplicitno sakrij
    }
    
    // Ponovo pokreni kviz
    initializeQuiz();
}

// Nazad na testove
function backToTests() {
    // Sakrij rezultate
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer) {
        resultsContainer.classList.remove('active');
        resultsContainer.style.display = 'none'; // Eksplicitno sakrij
    }
    
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