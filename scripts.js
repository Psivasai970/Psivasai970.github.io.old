// script.js

// Update the score based on form input
document.getElementById('updateScoreForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const matchId = document.getElementById('matchId').value;
    const score = document.getElementById('score').value;

    if (matchId === "1") {
        document.getElementById('score1').textContent = score;
        document.getElementById('status1').textContent = "Updated";
    } else if (matchId === "2") {
        document.getElementById('score2').textContent = score;
        document.getElementById('status2').textContent = "Updated";
    }
});

// Simulate live score updates every 5 seconds
function simulateLiveScores() {
    setInterval(() => {
        let score1 = Math.floor(Math.random() * 10);
        let score2 = Math.floor(Math.random() * 10);
        document.getElementById('score1').textContent = score1;
        document.getElementById('score2').textContent = score2;
    }, 5000);  // updates every 5 seconds
}

simulateLiveScores();
