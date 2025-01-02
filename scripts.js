document.getElementById("schedule-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const team1 = document.getElementById("team1").value;
    const team2 = document.getElementById("team2").value;
    const date = document.getElementById("date").value;

    // Validate input
    if (team1 && team2 && date) {
        // Create a match entry
        const matchDetails = `${team1} vs ${team2} on ${date}`;
        
        // Add match to the match list
        const matchList = document.getElementById("match-list");
        const listItem = document.createElement("li");
        listItem.textContent = matchDetails;
        matchList.appendChild(listItem);

        // Clear the form
        document.getElementById("schedule-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
