document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseMessage = document.getElementById("responseMessage");
    const lyricsButton = document.getElementById("lyricsButton");
    const lyricsDisplay = document.getElementById("lyricsDisplay");
    const loveLetterButton = document.getElementById("loveLetterButton");
    const loveLetterDisplay = document.getElementById("loveLetterDisplay");

    let noResponses = [
        "Noo whyy 😭 I'll give you another chance!",
        "Are you sureee? 🥺",
        "Don't break my heart 💔",
        "You can't say no forever! 😤",
        "But I love you sooo much! 🥹",
        "I'll give you chocolate 🍫 if you say yes!",
        "Think about all our cute moments 🥰",
        "You’re breaking my hearttt 💔🥺",
        "One last chance! 😩",
        "Say yes now or I'll tickle you!! 😝"
    ];

    let yesResponses = [
        "YAYYYY UR MINE FOREVERRR 😍💕",
        "OMG YESSS 💖💖",
        "AHHH BEST DAY EVERR 💘",
        "We're the cutest couple ever 💑",
        "I'm never letting you go 🥹💞",
        "You're my soulmateee 😘",
        "My heart is doing backflips! 🥰",
        "I'm so happyyyy!!! 😭❤️",
        "LOVE YOUUUU 💓",
        "Happiest person alive rn 😍"
    ];

    let loveLyrics = [
        "I’m all, I'm really all in. In love with all your flaws and sins - Juice WRLD",
        "Got everything I wanted. But I'd be nothing without you - The Weeknd",
        "They said our love is just a game, I don’t care what they say - The Weeknd",
        "The three words I choose: I love you - Juice WRLD",
        "It ain't a secret, if I give you my heart, then you can keep it  - Juice WRLD",
        "See, your love is a drug and I been fiendin'  - Juice WRLD",
        "Butterflies when you're on my mind, I can't breathe well - Juice WRLD",
        "Nothing left to lose without my baby - Billie Eilish",
        "Birds of a feather, we should stick together - Billie Eilish",
        "I'll love you 'til the day that I die - Billie Eilish"
    ];

    let loveLetters = [
        "Dear Ameer, you are the light of my life and the reason for my happiness. 💕",
        "To my sweetheart, I love you more than words can say. 🥰",
        "Ameer, my heart beats only for you. 💖",
        "Every day with you is a dream come true. ❤️",
        "You make my world brighter, and I am so grateful for you! 💘",
        "I will love you endlessly, forever and always. 💞",
        "You are my sun, my moon, and my stars. 🌙✨",
        "I feel so lucky to have you in my life. 😍",
        "Ameer, you are the love of my life, my everything. 💓",
        "I promise to love and cherish you forever. 🥺❤️"
    ];

    yesButton.addEventListener("click", function() {
        responseMessage.innerText = yesResponses[Math.floor(Math.random() * yesResponses.length)];
        createHeartEffect();
    });

    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * window.innerWidth - 100;
        let y = Math.random() * window.innerHeight - 50;
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    lyricsButton.addEventListener("click", function() {
        lyricsDisplay.innerText = loveLyrics[Math.floor(Math.random() * loveLyrics.length)];
    });

    loveLetterButton.addEventListener("click", function() {
        loveLetterDisplay.innerText = loveLetters[Math.floor(Math.random() * loveLetters.length)];
    });

    function createHeartEffect() {
        let heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        let x = event.clientX;
        let y = event.clientY;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});
