document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "My chess strategies are so complex- even i dont understand them",
        "My life's a Möbius strip  - infinite progress yet I'm still on the same side",
        "I once played chess against an AI and made it rage quit-checkmate robot overlords!",
        "I tried to defy the laws of gravity- now im legally obligated to respect inertia",
        "My doodles are so great, my notebooks are now classified as art galleries"
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    document.getElementById('factDisplay').textContent = randomFact;
});
