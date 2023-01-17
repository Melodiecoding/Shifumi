const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
const scorePlayer = document.getElementById('score-player');
const scoreIa = document.getElementById('score-ia');
const score = document.querySelector(".score");
const messageElt = document.createElement('h3');
const tryAgain = document.getElementById('restart');


shi.addEventListener('click', () => play('shi'));
fu.addEventListener('click', () => play('fu'));
mi.addEventListener('click', () => play('mi'));


// choix de l'IA s'affiche quand on clique Ajouter un index aléatoire entre 0 et
// la taille du tableau



function play(userChoice) {
    
    ia.classList.remove('translate-left');
    player.classList.remove('translate-right');

    reset_animations();

    const choices = ['shi', 'fu', 'mi'];

    const index = Math.floor(Math.random() * choices.length);
    console.log(index);

    // my random element
    const iaChoice = choices[index];

    // I debug the result
    console.log(iaChoice);
    
    player.src = "img/" + userChoice + ".png";
    player.classList.add("translate-left");


    ia.src = "img/" + iaChoice + ".png";
    ia.classList.add("translate-right");

    let currentScorePlayer = parseInt(scorePlayer.textContent);
    let currentScoreIa = parseInt(scoreIa.textContent);

    if((userChoice == 'shi' && iaChoice == 'fu') 
        || (userChoice == 'fu' && iaChoice == 'mi')
        || (userChoice == 'mi' && iaChoice == 'shi')){

            console.log("J'ai gagné :D");
            currentScorePlayer++;

    } else if ((userChoice == 'shi' && iaChoice == 'mi')
        || (userChoice == 'fu' && iaChoice == 'shi')
        || (userChoice == 'mi' && iaChoice == 'fu')){
            false;
            console.log("J'ai perdu :(");
            currentScoreIa++;

    }else if (userChoice == iaChoice){
        console.log("Egalité :|");
        currentScorePlayer++;
        currentScoreIa++;
    }
    scorePlayer.textContent = currentScorePlayer;
    scoreIa.textContent = currentScoreIa;

    
    
    // Si un des 2 = 3
    if(currentScorePlayer == 3 || currentScoreIa == 3){
        command.style.display = "none";
        // tryAgain.style.display = "block";

        // On arrête la partie (plus rien ne marche)
        if (currentScorePlayer > currentScoreIa) {
            console.log("Vous avez gagné !")
            messageElt.innerHTML = "Vous avez gagné !"
        }else if (currentScoreIa > currentScorePlayer){
            console.log("Vous avez perdu !")
            messageElt.innerHTML = "Vous avez perdu !"
        }else if (currentScorePlayer == currentScoreIa){
            console.log("Match nul !")
            messageElt.innerHTML = "Match nul !"
        }
        // On affiche qui a gagné
        score.insertAdjacentElement('afterend', messageElt);

        // Enlever la class hidden au bouton Try Again
        tryAgain.classList.remove('hidden');
        // Ajouter la class show au bouton Try Again
        // tryAgain.classList.add('show');


    }
    
    // Quand je clique sur le bouton
    tryAgain.addEventListener('click', restartParty);
    function restartParty(ev){
        ev.preventDefault();
    
        // le bouton restart se cache
        if(restartParty){
            tryAgain.classList.add('hidden');
            // on remet command en block et on lui retire la class hidden
            command.style.display = "block";
            command.classList.remove('hidden');
            // on remet le score à 0
            scoreIa.textContent = 0;
            scorePlayer.textContent = 0;
            messageElt.remove();
        }
    }
}



function reset_animations() {
    
    ia.style.animation = 'none';
    ia.offsetHeight;/* trigger reflow */
    ia.style.animation = null;

    player.style.animation = 'none';
    player.offsetHeight;/* trigger reflow */
    player.style.animation = null;
}







// // afficher la bonne image dans Player quand on clique sur l'une d'entre elles
// shi.addEventListener('click', () => {
//     console.log('shi')
//     player.src = "img/shi.png";
//     player
//         .classList
//         .add("translate-left");

//     const choices = ['shi', 'fu', 'mi'];

//     // choix de l'IA s'affiche quand on clique Ajouter un index aléatoire entre 0 et
//     // la taille du tableau
//     const index = Math.floor(Math.random() * choices.length);
//     console.log(index);

//     // my random element
//     const selected = choices[index];

//     // I debug the result
//     console.log(selected);

//     // Récupérer l'élément dans le HTML

//     ia.src = "img/" + selected + ".png";
//     ia
//         .classList
//         .add("translate-right");
// });

// fu.addEventListener('click', () => {
//     console.log('fu')
//     player.src = "img/fu.png"
//     player
//         .classList
//         .add("translate-left");

//     const choices = ['shi', 'fu', 'mi'];

//     // choix de l'IA s'affiche quand on clique Ajouter un index aléatoire entre 0 et
//     // la taille du tableau
//     const index = Math.floor(Math.random() * choices.length);
//     console.log(index);

//     // my random element
//     const selected = choices[index];

//     // I debug the result
//     console.log(selected);

//     // Récupérer l'élément dans le HTML

//     ia.src = "img/" + selected + ".png";
//     ia
//         .classList
//         .add("translate-right");
// });

// mi.addEventListener('click', () => {
//     console.log('mi')
//     player.src = "img/mi.png"
//     player
//         .classList
//         .add("translate-left");

//     const choices = ['shi', 'fu', 'mi'];

//     // choix de l'IA s'affiche quand on clique Ajouter un index aléatoire entre 0 et
//     // la taille du tableau
//     const index = Math.floor(Math.random() * choices.length);
//     console.log(index);

//     // my random element
//     const selected = choices[index];

//     // I debug the result
//     console.log(selected);

//     // Récupérer l'élément dans le HTML

//     ia.src = "img/" + selected + ".png";
//     ia
//         .classList
//         .add("translate-right");
// });



