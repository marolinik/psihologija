// Quiz Engine - Sistem za upravljanje testovima (iOS/Mobile Compatible)
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizType = 'episode'; // 'episode' ili 'comprehensive'
let currentTestIndex = 0; // Za praćenje koji test u epizodi

// Inicijalizacija stranice
document.addEventListener('DOMContentLoaded', function() {
    // iOS Safari fix za touch events
    if ('ontouchstart' in window) {
        document.addEventListener('touchstart', function() {}, {passive: true});
    }
    
    loadEpisodeTests();
    loadComprehensiveTests();
    checkForDirectLink();
    setupNavigationButtons();
    setupResultButtons();
});

// Setup navigation buttons
function setupNavigationButtons() {
    // Dodaj event listenere za navigacione dugmiće
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        // Dodaj event listener
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
        });
    });
}

// Setup result buttons
function setupResultButtons() {
    // Retry button
    const retryBtn = document.getElementById('retryBtn');
    if (retryBtn) {
        retryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            retryQuiz();
        });
    }
    
    // Back to tests button
    const backBtn = document.getElementById('backToTestsBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            backToTests();
        });
    }
}

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
    if (!container) return;
    
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
                episodeNum,
                index,
                'episode'
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
    if (!grid) return;
    
    grid.innerHTML = '';
    
    comprehensiveTests.forEach((test, index) => {
        const card = createTestCard(
            test.title,
            '25 pitanja iz svih epizoda',
            'Mešovit test',
            null,
            index,
            'comprehensive'
        );
        grid.appendChild(card);
    });
}

// Kreiranje kartice testa - iOS compatible
function createTestCard(title, description, badge, episodeNum, testIndex, type) {
    const card = document.createElement('div');
    card.className = 'test-card';
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <span class="badge">${badge}</span>
    `;
    
    // Dodaj touch-friendly event listenere
    card.style.cursor = 'pointer';
    
    // Click event
    card.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'episode') {
            startEpisodeQuiz(episodeNum, testIndex);
        } else {
            startComprehensiveQuiz(testIndex);
        }
    });
    
    // Touch event za iOS
    card.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'episode') {
            startEpisodeQuiz(episodeNum, testIndex);
        } else {
            startComprehensiveQuiz(testIndex);
        }
    });
    
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
    
    // Prikaži quiz kontejner
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.classList.add('active');
    quizContainer.style.display = 'block';
    document.getElementById('quizTitle').textContent = currentQuiz.title;
    
    // Setup navigation buttons
    setupQuizNavigation();
    
    // Prikaži prvo pitanje
    showQuestion();
}

// Setup quiz navigation buttons
function setupQuizNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Ukloni stare event listenere
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    
    // Dodaj nove event listenere
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn').addEventListener('click', handleNextButton);
}

// Handle next button click
function handleNextButton() {
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        finishQuiz();
    } else {
        nextQuestion();
    }
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
        <div class="options" id="optionsContainer">
            ${question.options.map((option, index) => `
                <div class="option" data-index="${index}" id="option-${index}">
                    <span style="font-weight: bold; color: #667eea;">
                        ${String.fromCharCode(65 + index)}.
                    </span> ${option}
                </div>
            `).join('')}
        </div>
    `;
    
    // Dodaj event listenere za opcije
    setupOptionListeners();
    
    // Ažuriraj dugmad
    updateNavigationButtons();
    
    // Ako je pitanje već odgovoreno, prikaži odgovor
    if (userAnswers[currentQuestionIndex] !== undefined) {
        showAnswerFeedback(userAnswers[currentQuestionIndex]);
    }
}

// Setup option listeners - iOS compatible
function setupOptionListeners() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        const index = parseInt(option.dataset.index);
        
        // Click event
        option.addEventListener('click', function(e) {
            e.preventDefault();
            selectAnswer(index);
        });
        
        // Touch event za iOS
        option.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            selectAnswer(index);
        });
    });
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
    const correctIndex = question.correctAnswer !== undefined ? question.correctAnswer : question.correct;
    
    // Onemogući sve opcije
    document.querySelectorAll('.option').forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
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
    
    // Previous dugme
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next dugme
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        // Poslednje pitanje
        if (userAnswers[currentQuestionIndex] !== undefined) {
            nextBtn.textContent = 'Završi Test';
            nextBtn.disabled = false;
        } else {
            nextBtn.textContent = 'Sledeće';
            nextBtn.disabled = true;
        }
    } else {
        nextBtn.textContent = 'Sledeće';
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
        const question = currentQuiz.questions[index];
        const correctAnswer = question.correctAnswer !== undefined ? question.correctAnswer : question.correct;
        if (answer === correctAnswer) {
            score++;
        }
    });
    
    // Sakrij quiz kontejner
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.classList.remove('active');
    quizContainer.style.display = 'none';
    
    // Prikaži rezultate sa malim kašnjenjem
    setTimeout(() => {
        showResults();
    }, 100);
}

// Prikaz rezultata
function showResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'block';
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
    
    // Dodaj pregled pitanja i odgovora
    showDetailedResults();
}

// Prikaz detaljnih rezultata sa svim pitanjima
function showDetailedResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    
    // Proveri da li već postoji kontejner za detalje
    let detailsDiv = document.getElementById('resultsDetails');
    if (!detailsDiv) {
        detailsDiv = document.createElement('div');
        detailsDiv.id = 'resultsDetails';
        detailsDiv.style.cssText = 'margin-top: 30px; text-align: left; max-width: 800px; margin-left: auto; margin-right: auto;';
        resultsContainer.appendChild(detailsDiv);
    }
    
    // Generiši HTML za pregled svih pitanja
    let detailsHTML = '<h3 style="text-align: center; margin-bottom: 20px;">Pregled odgovora:</h3>';
    
    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correctAnswer !== undefined ? question.correctAnswer : question.correct;
        const isCorrect = userAnswer === correctAnswer;
        
        detailsHTML += `
            <div style="margin-bottom: 25px; padding: 15px; background: ${isCorrect ? '#e8f5e9' : '#ffebee'}; border-radius: 8px; border-left: 4px solid ${isCorrect ? '#4caf50' : '#f44336'};">
                <p style="font-weight: bold; margin-bottom: 10px;">
                    ${index + 1}. ${question.question}
                </p>
                <p style="margin: 5px 0;">
                    Vaš odgovor: <span style="font-weight: bold; color: ${isCorrect ? '#4caf50' : '#f44336'};">
                        ${question.options[userAnswer]}
                    </span>
                    ${isCorrect ? '✓' : '✗'}
                </p>
                ${!isCorrect ? `
                    <p style="margin: 5px 0;">
                        Tačan odgovor: <span style="font-weight: bold; color: #4caf50;">
                            ${question.options[correctAnswer]}
                        </span>
                    </p>
                ` : ''}
            </div>
        `;
    });
    
    detailsDiv.innerHTML = detailsHTML;
}

// Ponovi kviz
function retryQuiz() {
    // Resetuj sve
    userAnswers = [];
    score = 0;
    currentQuestionIndex = 0;
    
    // Ukloni detalje rezultata ako postoje
    const detailsDiv = document.getElementById('resultsDetails');
    if (detailsDiv) {
        detailsDiv.remove();
    }
    
    // Sakrij rezultate
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.classList.remove('active');
    resultsContainer.style.display = 'none';
    
    // Ponovo pokreni kviz
    initializeQuiz();
}

// Nazad na testove
function backToTests() {
    // Ukloni detalje rezultata ako postoje
    const detailsDiv = document.getElementById('resultsDetails');
    if (detailsDiv) {
        detailsDiv.remove();
    }
    
    // Sakrij rezultate
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer) {
        resultsContainer.classList.remove('active');
        resultsContainer.style.display = 'none';
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

