var jewels = {
    gemOne: null,
    gemTwo: null,
    gemThree: null,
    gemFour: null,
    randomNumber: null,

    generateJewelValues: function () {
        this.gemOne = Math.floor(Math.random() * 12 + 12);
        console.log("Jewel 1: " + jewels.gemOne);
        this.gemTwo = Math.floor(Math.random() * 12 + 12);
        console.log("Jewel 2: " + jewels.gemTwo);
        this.gemThree = Math.floor(Math.random() * 12 + 12);
        console.log("Jewel 3: " + jewels.gemThree);
        this.gemFour = Math.floor(Math.random() * 12 + 12);
        console.log("Jewel 4: " + jewels.gemFour);
        this.randomNumber = Math.floor(Math.random() * 102 + 19);
        console.log("Random number: " + jewels.randomNumber);

    },

};
// jewels.generateJewelValues();
var game = {
    totalScore: 0,
    wins: 0,
    losses: 0,

    startGame: function () {
        this.wins = 0;
        this.losses = 0;
        this.totalScore = 0;
    },

    setWinLose: function () {
        if (totalScore === game.randomNumber) {
            this.wins++;
        } else if (totalScore > game.randomNumber) {
            this.losses++;
        }
    },
};

jewels.generateJewelValues();

// Playing the game...
$(document).ready(function() {


    $("#jewels img").on("click", function() {
        var crystal = $(this).attr("id");
        console.log("Jewel: " + crystal);
        console.log("Value: " + jewels[crystal]);

        // $("#player-wins").text(game.wins);
        // $("#player-losses").text(game.losses);

    });

    // Get the value that's clicked and add it to the previous value (totalScore)

    // if else statements

});




// The player will be shown a random number at the start of the game


// When the player clicks on a crystal, it will add a specific amount of points to the player's total score

    // Game will hide this amount until the player clicks a crystal


    // When player clicks one, update the player's score counter


// Player wins if their total score matches the random number from the beginning of the game

// Player loses if their score goes above the random number

// Game restarts whenever the player wins or loses

    // When the game begins again, player should see a new random number. Also, all the crystals will have four new hidden values. The user's score (and score counter) will reset to zero.

// App should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



// Game design notes: the random number shown at the start of the game should be between 19-120. Each crystal should have a random hidden value between 1-12