let difficulte;
let maxTentatives;
let RandomToGuess;
let guessed = false;

document.getElementById('start-game-btn').addEventListener('click', startGame);
document.getElementById('submit-guess-btn').addEventListener('click', checkGuess);
document.getElementById('yes-btn').addEventListener('click', restartGame);
document.getElementById('no-btn').addEventListener('click', endGame);
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter" && maxTentatives > 0) {
        // Si on est sur l'écran de sélection de la difficulté, lancer le jeu
        if (document.getElementById("difficulty-selection").style.display !== "none") {
            startGame();
        }
        // Si on est sur l'écran du jeu, soumettre la réponse
        else if (document.getElementById("game-board").style.display !== "none") {
            checkGuess();
        }
    }
});

function startGame() {
    document.getElementById("difficulty-selection").style.display = "none";
    document.getElementById("game-board").style.display = "block";
    // Getting difficulty level from the dropdown
    let choix = document.getElementById("difficulty").value;
    switch (choix) {
        case "1":
            difficulte = { range: 20, tentatives: 6 };
            break;
        case "2":
            difficulte = { range: 50, tentatives: 8 };
            break;
        case "3":
            difficulte = { range: 100, tentatives: 10 };
            break;
        default:
            alert("Choix invalide");
            return;
    }
    maxTentatives = difficulte.tentatives;
    RandomToGuess = Math.floor(Math.random() * difficulte.range) + 1;
    guessed = false;

    // Hide difficulty selection and show the game board
    document.getElementById("difficulty-selection").style.display = "none";
    startGuessing();
}

function startGuessing() {
    document.getElementById("game-board").style.display = "block";
    document.getElementById("remaining-attempts").innerText = `Il vous reste ${maxTentatives} tentatives.`;
    document.getElementById("message").innerText = "Bonne chance! Devinez le nombre!";
}

function checkGuess() {
    let userGuess = document.getElementById("user-guess").value;
    userGuess = parseInt(userGuess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > difficulte.range) {
        document.getElementById("message").innerText = "Entrez un nombre valide dans l'intervalle indiqué.";
        maxTentatives--;
        updateAttempts();
        return;
    }

    if (userGuess === RandomToGuess) {
        document.getElementById("message").innerText = "Félicitations! Vous avez gagné!!";
        guessed = true;
        // Ajout du délai de 2 secondes avant d'afficher la nouvelle partie
        setTimeout(function() {
            askForNewGame();
        }, 3000);
    } else {
        maxTentatives--;
        if (userGuess < RandomToGuess) {
            document.getElementById("message").innerText = "C'est trop petit! Essayez un nombre plus grand.";
        } else if (userGuess > RandomToGuess) {
            document.getElementById("message").innerText = "C'est trop grand! Essayez un nombre plus petit.";
        }

        if (maxTentatives > 0) {
            updateAttempts();
        } else {
            updateAttempts();
            document.getElementById("submit-guess-btn").disabled = true;//submit button disabled
            document.getElementById("user-guess").disabled = true; // input desactivated
            document.getElementById("message").innerText = "Jeu terminé! Vous avez échoué.";
            // Ajout du délai de 2 secondes avant d'afficher la nouvelle partie
        setTimeout(function() {
            askForNewGame();
        }, 3000);
        }
    }
}

function updateAttempts() {
    document.getElementById("remaining-attempts").innerText = `Il vous reste ${maxTentatives} tentatives.`;
}

function askForNewGame() {
    document.getElementById("game-board").style.display = "none";
    document.getElementById("new-game").style.display = "block";
}

function restartGame() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("game-board").style.display = "none";
    document.getElementById("difficulty-selection").style.display = "block";
    document.getElementById("submit-guess-btn").disabled = false; //submit button enabled
    document.getElementById("user-guess").disabled = false; //input activated
}

function endGame() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("difficulty-selection").style.display = "none";
    document.getElementById("game-container").querySelector("h1").innerText = "Merci d'avoir joué!"; 
}
