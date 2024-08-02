window.onload = function () {
    const credulouscodersData = [
        {
            name: "Chitranshi Gupta",
            photo: "https://blob.sololearn.com/avatars/e1ff80c2-c127-4376-bc26-af2c25a1b5df.jpg",
            about: "Coding enthusiast with a passion for web development",
            skills: ["JavaScript", "React", "Node.js", "CSS"],
            hobbies: ["Reading", "Hiking", "Cooking"],
            bestMessage: "Coding is like solving puzzles - challenging but fun!",
            bestComment: "Your code is clean and easy to understand. Great job!",

            bestCodeImage: "https://plus.unsplash.com/premium_photo-1720823182783-3b9fb27e40d9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bestCodeLink: "https://example.com/full-code-link",
            nickname: "Java Guru",
            bestSololearner: "CodeMaster123 - Always helpful and encouraging.",
            whyJoinSololearn: "To learn from others and share my knowledge."
        },

        {
            name: "Shashikant",
            photo: "https://blob.sololearn.com/avatars/8569709a-04d9-4da6-a84e-4be4ebc7d8e8.jpg",
            about: "Enthusiastic coder with a great interest in front-end development.",
            skills: ["HTML", "CSS", "Powerpoint", "Inkscape"],
            hobbies: ["Adventure", "Badminton", "Traveling"],
            bestMessage: "Be curious, Keep searching.",
            bestComment: "You are getting perfect by learning new stuffs.",

            bestCodeImage: "https://i.ibb.co/wQS6MRP/Screenshot-2024-08-01-at-20-29-55-Buy-i-Phone-Shashikant-083125.png",
            bestCodeLink: "https://sololearn.com/compiler-playground/Wo758AtjebJb/?ref=app",
            nickname: "CSS Genius",
            bestSololearner: "NextJS Boi - CSS genius with cool designs.",
            whyJoinSololearn: "To explore and build a strong community of coders."
        },
        {
            name: "L!L!",
            photo: "https://blob.sololearn.com/avatars/d19a2d12-9525-4b2f-b015-694a2bb21840.jpg",
            about: "Data scientist exploring the world of AI and machine learning",
            skills: ["HTML", "Python", "CSS"],
            hobbies: ["Playing new things", "Reading", "Traveling"],
            bestMessage: "Data tells a story - we just need to listen carefully.",
            bestComment: "Your analysis is spot on! Great insights.",

            bestCodeImage: "https://plus.unsplash.com/premium_photo-1720823182783-3b9fb27e40d9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bestCodeLink: "https://example.com/full-code-link",
            nickname: "Studios",
            bestSololearner: "Nextjsboi - Very good coder and postive spirited person.",
            whyJoinSololearn: "To learn and explore the world of coding."
        },
         {
            name: "Captain Thunder ⚡[Busy]",
            photo: "https://blob.sololearn.com/avatars/b3a4933d-253b-4228-8c8f-f953d15fc2cd.jpg",
            about: "Has a dream of great success. Passionate about coding.",
            skills: ["HTML", "CSS", "JavaScript", "Python"],
            hobbies: ["Book Reading", "Animation Drawing", "Cycling"],
            bestMessage: "Make your life like a campass not a clock.",
            bestComment: "DO mistakes and explore it's weakness.",

            bestCodeImage: "https://imgtr.ee/images/2024/08/01/86565d6f53de9d0f507a04ad5c20d80a.png",
            bestCodeLink: "https://sololearn.com/compiler-playground/WbC1SUDw9DGM/?ref=app",
            nickname: "Ash",
            bestSololearner: "R🍁🇮🇳 - Smart, kind and genuine person on sololearn.",
            whyJoinSololearn: "To find a good platform, friends to help my journey."
        },
        {
            name: "Jaya Bairwa",
            photo: "https://blob.sololearn.com/avatars/0bc4bb91-9e52-4025-9076-683160c8fc53.jpg",
            about: "Info will added",
            skills: ["Python", "HTML", "CSS"],
            hobbies: ["Drawing", "Book Reading", "Learning new things"],
            bestMessage: "Real life : joy, tears, surprises",
            bestComment: "DO mistakes and explore it's weakness.",

            bestCodeImage: "https://imgtr.ee/images/2024/08/01/86565d6f53de9d0f507a04ad5c20d80a.png",
            bestCodeLink: "https://sololearn.com/compiler-playground/WbC1SUDw9DGM/?ref=app",
            nickname: "Info will added",
            bestSololearner: "Info will added"
        },

       

        {
            name: "Just Homosepian",
            photo: "https://blob.sololearn.com/avatars/b7e5aea2-b271-4867-8f2c-8dfa3eb6ae3b.jpg",
            about: "Just Homosepian by birth, one epic project at a time.",
            skills: ["HTML", "CSS", "JavaScript"],
            hobbies: ["Artist", "Gaming", "Crafting", "Journaling"],
            bestMessage: "Observe your own life, and you will know the truth.",
            bestComment: "Fight so hard, play so hard, that result stops mattering.",

            bestCodeImage: "https://imgtr.ee/images/2024/08/01/86565d6f53de9d0f507a04ad5c20d80a.png",
            bestCodeLink: "https://sololearn.com/compiler-playground/WbC1SUDw9DGM/?ref=app",
            nickname: "Human",
            bestSololearner: "R🍁🇮🇳 - Smart, kind and genuine person on sololearn.",
            whyJoinSololearn: "I joined SoloLearn to improve my coding skills and knowledge. And now I'm addicted to it"
        },

        {
            name: "NextJS Boi",
            photo: "https://blob.sololearn.com/avatars/48e74156-4094-48fd-9a02-b1e68f43b9b8.jpg",
            about: "NextJS + Tailwind CSS + Supabase= ❤️",
            skills: ["NextJS", "TailwindCSS", "AWS", "Supabase"],
            hobbies: ["Books", "Writing", "Walking"],
            bestMessage: "Real life : joy, tears, surprises",
            bestComment: "DO mistakes and explore it's weakness.",

            bestCodeImage: "https://imgtr.ee/images/2024/08/01/86565d6f53de9d0f507a04ad5c20d80a.png",
            bestCodeLink: "https://sololearn.com/compiler-playground/WbC1SUDw9DGM/?ref=app",
            nickname: "Robo",
            bestSololearner: "R🍁🇮🇳 - Smart, kind and genuine person on sololearn.",
            whyJoinSololearn: "Inspiring from sololearn's journey growth."
        },
    ];

    function credulouscodersCreateNavBar(setActiveTab) {
        const nav = document.createElement('nav');
        nav.className = 'bg-[#3498db] text-[#ecf0f1] p-4 sticky top-0 z-20';
        nav.innerHTML = `
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-xl font-bold">Credulous Coders</div>
                <div class="credulouscoders-hamburger md:hidden">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="credulouscoders-nav-links hidden md:flex gap-4">
                    <li><button class="credulouscoders-nav-link">Members</button></li>
                    <li><button class="credulouscoders-nav-link">Messages</button></li>
                    <li><button class="credulouscoders-nav-link">Comments</button></li>
                    <li><button class="credulouscoders-nav-link">Code</button></li>
                    <li><button class="credulouscoders-nav-link">Best Learners</button></li>
                    <li><button class="credulouscoders-nav-link">Our Story</button></li>
                    <li><button class="credulouscoders-nav-link">Game</button></li>
                    <li><button class="credulouscoders-nav-link">Rules</button></li>
                </ul>
            </div>
        `;

        const hamburger = nav.querySelector('.credulouscoders-hamburger');
        const navLinks = nav.querySelector('.credulouscoders-nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('show');
        });

        nav.querySelectorAll('.credulouscoders-nav-links button').forEach((button, index) => {
            button.addEventListener('click', () => {
                setActiveTab(['profiles', 'messages', 'comments', 'code', 'sololearn', 'story', 'game', 'rules'][index]);
                navLinks.classList.remove('show');
                hamburger.classList.remove('open');
                nav.querySelectorAll('.credulouscoders-nav-link').forEach(link => link.classList.remove('active'));
                button.classList.add('active');
            });
        });

        return nav;
    }

    function credulouscodersCreateProfileCard(coder) {
        const card = document.createElement('div');
        card.className = 'credulouscoders-card p-6 m-4 max-w-sm';
        card.innerHTML = `
            <img src="${coder.photo}" alt="${coder.name}" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-pink-300">
            <h2 class="text-2xl font-bold text-center mb-2 text-purple-600">${coder.name}</h2>
            <p class="text-lg font-semibold text-center text-pink-500 mb-2">${coder.nickname}</p>
            <p class="text-gray-700 mb-4">${coder.about}</p>
            <div class="mb-4">
                <h3 class="font-semibold text-teal-600">Skills:</h3>
                <ul class="list-disc list-inside text-gray-700">
                    ${coder.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <div class="mb-4">
                <h3 class="font-semibold text-teal-600">Hobbies:</h3>
                <ul class="list-disc list-inside text-gray-700">
                    ${coder.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h3 class="font-semibold text-teal-600">Why Join Sololearn?</h3>
                <p class="text-gray-700">${coder.whyJoinSololearn}</p>
            </div>
        `;
        return card;
    }

    function credulouscodersCreateTabContent(activeTab) {
        const content = document.createElement('div');
        content.className = 'mt-8 grid grid-cols-1 md:grid-cols-2 gap-6';
        content.innerHTML = credulouscodersData.map(coder => `
            <div class="credulouscoders-card p-6">
                <h3 class="text-xl font-bold text-purple-600 mb-2">${coder.name}</h3>
                ${activeTab === 'messages' ? `<p class="text-gray-700"><strong>Best Message:</strong> ${coder.bestMessage}</p>` : ''}
                ${activeTab === 'comments' ? `<p class="text-gray-700"><strong>Best Comment:</strong> ${coder.bestComment}</p>` : ''}
                ${activeTab === 'code' ? `
                    <div>
       <p class="text-gray-700 mb-2"><strong>Best Code:</strong></p>
        
        ${coder.bestCodeImage ? `<img src="${coder.bestCodeImage}" alt="Code Image" class="mt-2 max-w-full h-auto">` : ''}
        ${coder.bestCodeLink ? `<a href="${coder.bestCodeLink}" target="_blank" class="text-blue-500 hover:underline mt-2 block">View full code</a>` : ''}
    </div>
                ` : ''}
                ${activeTab === 'sololearn' ? `<p class="text-gray-700"><strong>Best on Sololearn:</strong> ${coder.bestSololearner}</p>` : ''}
            </div>
        `).join('');
        return content;
    }

    function credulouscodersCreateStorySection() {
        const story = document.createElement('div');
        story.className = 'credulouscoders-card p-6 mx-auto max-w-3xl';
        story.innerHTML = `
            <h2 class="text-3xl font-bold text-purple-600 mb-4">Our Coding Journey</h2>
            <div class="flex justify-center mb-4">
                <img src="https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_1280.jpg" alt="Credulous Coders Team" class="rounded-lg shadow-lg max-w-full h-auto">
            </div>
        <p class="text-gray-700 mb-4">
    Nextjsboi created our group, Credulous Coders, because he found young coders with innocent hearts and a passion for coding. We're all about zero negativity and staying focused on life.
</p>
<p class="text-gray-700 mb-4">
    Inspired by their dedication, Nextjsboi wanted to learn from them and share his knowledge too. Lili told him he was her first friend, which made him laugh. Chitranshi asked for guidance with her studies, and Shashikant, a CSS genius, amazed everyone with his skills. Captain joined the group, impressing everyone by coding great projects using only his mom's phone. Homosepian brought their coding expertise to the team. Jaya quickly created a cute traffic light with CSS, showcasing her talent and friendly demeanor.
</p>
<p class="text-gray-700 mb-4">
    That's why they're all part of this group, and their future is bright for sure! With our combined talents and unbreakable bond, the future of Credulous Coders looks incredibly promising!
</p>

        `;
        return story;
    }

    function credulouscodersCreateGameSection() {
        const game = document.createElement('div');
        game.className = 'credulouscoders-card p-6 mx-auto max-w-3xl';
        game.innerHTML = `
            <h2 class="text-3xl font-bold text-purple-600 mb-4">Box Runner Game</h2>
            <p class="text-gray-700 mb-4">
                No internet? No problem! Try our Box runner game. Press startGame.
            </p>
            <div class="game-container">
                <canvas id="credulouscodersGameCanvas" width="280" height="150" class="border border-gray-300"></canvas>
                <div class="mt-2">
                    <button id="credulouscodersStartButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Start Game
                    </button>
                    <span id="credulouscodersScoreDisplay" class="ml-4 text-lg font-semibold">Score: 0</span>
                </div>
            </div>
        `;
        return game;
    }

    function credulouscodersCreateRulesSection() {
        const rules = document.createElement('div');
        rules.className = 'credulouscoders-card p-6 mx-auto max-w-3xl';
        rules.innerHTML = `
        <h2 class="text-3xl font-bold text-purple-600 mb-4"> Rules</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Be respectful and kind to all members.</li>
            <li>Focus on positive and constructive interactions.</li>
            <li>Share knowledge and help others learn.</li>
            <li>Maintain a zero-negativity environment.</li>
            <li>Embrace curiosity and continuous learning.</li>
            <li>Celebrate each other's achievements and progress.</li>
            <li>Respect diverse coding styles and approaches.</li>
            <li>Provide constructive feedback when asked.</li>
            <li>Maintain confidentiality of shared personal information.</li>
              <li>Don't add any new person without taking opinions others.</li>
            <li>Have fun and enjoy the coding journey together!</li>
        </ul>
    `;
        return rules;
    }

    function credulouscodersMain() {
        const root = document.getElementById('credulouscodersRoot');
        root.className = 'min-h-screen relative overflow-hidden';

        let activeTab = 'profiles';

        function setActiveTab(newTab) {
            activeTab = newTab;
            credulouscodersRenderContent();
        }

        const credulouscodersGameModule = (function () {
            let cat, obstacles, score, animationId, isGameOver;
            const gravity = 0.5;
            const jumpStrength = -10;
            let canvas, ctx, startButton, scoreDisplay;

            class Cat {
                constructor() {
                    this.x = 50;
                    this.y = canvas.height - 30;
                    this.width = 30;
                    this.height = 30;
                    this.vy = 0;
                }

                draw() {
                    ctx.fillStyle = 'orange';
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }

                jump() {
                    if (this.y === canvas.height - this.height) {
                        this.vy = jumpStrength;
                    }
                }

                update() {
                    if (!isGameOver) {
                        this.vy += gravity;
                        this.y += this.vy;
                        if (this.y > canvas.height - this.height) {
                            this.y = canvas.height - this.height;
                            this.vy = 0;
                        }
                    }
                }
            }

            class Obstacle {
                constructor() {
                    this.width = 20;
                    this.height = 40;
                    this.x = canvas.width;
                    this.y = canvas.height - this.height;
                }

                draw() {
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }

                update() {
                    if (!isGameOver) {
                        this.x -= 5;
                    }
                }
            }

            function startGame() {
                cat = new Cat();
                obstacles = [];
                score = 0;
                isGameOver = false;
                startButton.disabled = true;
                startButton.textContent = 'Start Game';
                scoreDisplay.textContent = 'Score: 0';
                animate();
            }

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                cat.update();
                cat.draw();

                if (Math.random() < 0.02 && !isGameOver) {
                    obstacles.push(new Obstacle());
                }

                obstacles.forEach((obstacle, index) => {
                    obstacle.update();
                    obstacle.draw();

                    if (obstacle.x < -obstacle.width && !isGameOver) {
                        obstacles.splice(index, 1);
                        score++;
                        scoreDisplay.textContent = `Score: ${score}`;
                    }

                    if (
                        cat.x < obstacle.x + obstacle.width &&
                        cat.x + cat.width > obstacle.x &&
                        cat.y < obstacle.y + obstacle.height &&
                        cat.y + cat.height > obstacle.y &&
                        !isGameOver
                    ) {
                        gameOver();
                    }
                });

                if (!isGameOver) {
                    animationId = requestAnimationFrame(animate);
                }
            }

            function gameOver() {
                isGameOver = true;
                cancelAnimationFrame(animationId);
                ctx.fillStyle = 'black';
                ctx.font = '30px Arial';
                ctx.fillText('Game Over!', canvas.width / 2 - 70, canvas.height / 2);
                startButton.disabled = false;
                startButton.textContent = 'Retry';
            }

            function initializeGame() {
                canvas = document.getElementById('credulouscodersGameCanvas');
                startButton = document.getElementById('credulouscodersStartButton');
                scoreDisplay = document.getElementById('credulouscodersScoreDisplay');

                if (canvas && startButton && scoreDisplay) {
                    ctx = canvas.getContext('2d');

                    startButton.addEventListener('click', startGame);

                    document.addEventListener('keydown', (event) => {
                        if (event.code === 'Space') {
                            event.preventDefault();
                            if (cat && !isGameOver) cat.jump();
                        }
                    });

                    canvas.addEventListener('touchstart', (event) => {
                        event.preventDefault();
                        if (cat && !isGameOver) cat.jump();
                    });
                }
            }

            return { initializeGame };
        })();

        function credulouscodersRenderContent() {
            root.innerHTML = '';
            root.appendChild(credulouscodersCreateNavBar(setActiveTab));

            const content = document.createElement('div');
            content.className = 'container mx-auto p-8 credulouscoders-animate-fade-in credulouscoders-content-container fade-out';
            content.innerHTML = `
                <header class="text-center mb-8">
                    <p class="text-2xl text-[#0a2e58] opacity-80">
                        <span class="font-bold bg-yellow-200 px-2 rounded">Innocent & Passionate</span>
                    </p>
                </header>
            `;

            if (activeTab === 'profiles') {
                const profilesContainer = document.createElement('div');
                profilesContainer.className = 'flex flex-wrap justify-center';
                credulouscodersData.forEach(coder => profilesContainer.appendChild(credulouscodersCreateProfileCard(coder)));
                content.appendChild(profilesContainer);
            } else if (activeTab === 'story') {
                content.appendChild(credulouscodersCreateStorySection());
            } else if (activeTab === 'game') {
                content.appendChild(credulouscodersCreateGameSection());
            } else if (activeTab === 'rules') {
                content.appendChild(credulouscodersCreateRulesSection());
            } else {
                content.appendChild(credulouscodersCreateTabContent(activeTab));
            }

            content.innerHTML += `
                <footer class="text-center mt-8 text-[#0a2e58] opacity-80">
                    <p>© 2024 Credulous Coders. All rights reserved.</p>
                </footer>
            `;

            root.appendChild(content);
            setTimeout(() => {
                content.classList.remove('fade-out');
                if (activeTab === 'game') {
                    credulouscodersGameModule.initializeGame();
                }
            }, 50);
        }

        credulouscodersRenderContent();

        //Background bubble animation
        const bgAnimation = document.getElementById('credulouscodersBgAnimation');
        for (let i = 0; i < 15; i++) {
            const circle = document.createElement('div');
            circle.style.left = `${Math.random() * 100}%`;
            circle.style.animationDuration = `${Math.random() * 10 + 15}s`;
            circle.style.animationDelay = `${Math.random() * 5}s`;
            bgAnimation.appendChild(circle);
        }
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'credulouscoders-star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            bgAnimation.appendChild(star);
        }
    }

    credulouscodersMain();
}
