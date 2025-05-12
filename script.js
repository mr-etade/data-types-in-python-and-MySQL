document.addEventListener('DOMContentLoaded', function() {
    // Exercise 1 answers
    const exercise1Answers = {
        1: 'int',
        2: 'string',
        3: 'c',
        4: 'True'
    };

    // Exercise 2 answers
    const exercise2Answers = {
        1: 'INT',
        2: 'VARCHAR',
        3: '@price',
        4: 'TINYINT(1)'
    };

    // Exercise 3 answers
    const exercise3Answers = {
        'type-error': 'strong'
    };

    // Exercise 4 answers
    const exercise4Answers = {
        'mysql-cast': '15'
    };

    // Case study answers
    const caseStudyAnswers = {
        'python-dict': 'dict',
        'python-access': 'product["price"]',
        'mysql-boolean': 'BOOLEAN',
        'mysql-insert': 'FALSE'
    };

    // Set up check answer buttons
    document.querySelectorAll('.check-answer').forEach(button => {
        button.addEventListener('click', function() {
            const questionDiv = this.closest('.question');
            const feedback = questionDiv.querySelector('.feedback');
            
            // Handle dropdown questions
            const dropdown = questionDiv.querySelector('.answer-dropdown');
            if (dropdown) {
                const questionNumber = this.closest('.questions').querySelectorAll('.question').length > 1 ? 
                    Array.from(this.closest('.questions').querySelectorAll('.question')).indexOf(questionDiv) + 1 : 1;
                
                const exerciseId = this.closest('.exercise').id;
                const correctAnswer = exerciseId === 'exercise1' ? exercise1Answers[questionNumber] : 
                                      exerciseId === 'exercise2' ? exercise2Answers[questionNumber] : null;
                
                if (dropdown.value === correctAnswer) {
                    feedback.textContent = 'Correct! ' + feedback.textContent;
                    feedback.style.backgroundColor = '#e6ffe6';
                    feedback.style.color = '#006400';
                } else {
                    feedback.textContent = 'Incorrect. Try again!';
                    feedback.style.backgroundColor = '#ffebeb';
                    feedback.style.color = '#8b0000';
                }
                feedback.classList.remove('hidden');
            }
            
            // Handle radio button questions
            const radioGroup = questionDiv.querySelector('input[type="radio"]:checked');
            if (radioGroup) {
                const name = radioGroup.name;
                const correctAnswer = name === 'type-error' ? exercise3Answers[name] : 
                                    name === 'mysql-cast' ? exercise4Answers[name] : null;
                
                if (radioGroup.value === correctAnswer) {
                    feedback.textContent = 'Correct! ' + feedback.textContent;
                    feedback.style.backgroundColor = '#e6ffe6';
                    feedback.style.color = '#006400';
                } else {
                    feedback.textContent = 'Incorrect. Try again!';
                    feedback.style.backgroundColor = '#ffebeb';
                    feedback.style.color = '#8b0000';
                }
                feedback.classList.remove('hidden');
            }
            
            // Handle text input questions
            const textInput = questionDiv.querySelector('.answer-input');
            if (textInput) {
                const questionText = questionDiv.querySelector('p').textContent;
                let correctAnswer;
                
                if (questionText.includes('type of product')) {
                    correctAnswer = 'dict';
                } else if (questionText.includes('access the price')) {
                    correctAnswer = 'product["price"]';
                } else if (questionText.includes('type is is_premium')) {
                    correctAnswer = 'BOOLEAN';
                }
                
                if (textInput.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                    feedback.textContent = 'Correct! ' + feedback.textContent;
                    feedback.style.backgroundColor = '#e6ffe6';
                    feedback.style.color = '#006400';
                } else {
                    feedback.textContent = 'Incorrect. Try again!';
                    feedback.style.backgroundColor = '#ffebeb';
                    feedback.style.color = '#8b0000';
                }
                feedback.classList.remove('hidden');
            }
            
            // Handle inline input questions
            const inlineInput = questionDiv.querySelector('.inline-answer');
            if (inlineInput) {
                if (inlineInput.value.trim().toUpperCase() === 'FALSE' || inlineInput.value.trim() === '0') {
                    feedback.textContent = 'Correct! ' + feedback.textContent;
                    feedback.style.backgroundColor = '#e6ffe6';
                    feedback.style.color = '#006400';
                } else {
                    feedback.textContent = 'Incorrect. Try again!';
                    feedback.style.backgroundColor = '#ffebeb';
                    feedback.style.color = '#8b0000';
                }
                feedback.classList.remove('hidden');
            }
        });
    });

    // Try it button for Python code
    document.querySelector('.try-it')?.addEventListener('click', function() {
        const outputDiv = this.nextElementSibling;
        outputDiv.textContent = "Output: 7";
        outputDiv.classList.remove('hidden');
    });

    // Tab functionality
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Accordion functionality
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('active');
        });
    });
});