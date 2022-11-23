$(document).ready(function() {
    // Choix joueur
    pierreJ = document.getElementById('pierreJ');
    feuilleJ = document.getElementById('feuilleJ');
    ciseauxJ = document.getElementById('ciseauxJ');
    tabJoueur = [pierreJ, feuilleJ, ciseauxJ];

    // Choix Ordi
    pierreO = document.getElementById('pierreO');
    feuilleO = document.getElementById('feuilleO');
    ciseauxO = document.getElementById('ciseauxO');
    tabOrdi = [pierreO, feuilleO, ciseauxO];

    // Btn & elt globaux
    recommencer = document.getElementById('recommencer');
    nextRound = document.getElementById('nextRound');
    tour = document.getElementById('tour');
    eltScoreJ = document.getElementById('scoreJ');
    eltScoreO = document.getElementById('scoreO');

    // EventListener click Joueur
    pierreJ.addEventListener('click', clickPierre, false);
    feuilleJ.addEventListener('click', clickFeuille, false);
    ciseauxJ.addEventListener('click', clickCiseaux, false);

    // EventListener Globaux
    recommencer.addEventListener('click', reset, false);
    nextRound.addEventListener('click', mancheSuivante, false);

    // Block des boutons joueurs et ordi
    turnBtn(0);
    for (let i = 0; i < tabOrdi.length; i++) {
        tabOrdi[i].setAttribute('disabled', '');
    }

    var choixJ = -1;
    var choixO = -1;
    var scoreJ = 0;
    var scoreO = 0;

    function clickPierre() {
        choixJ = 0;
        choixRdmOrdi();
    }

    function clickFeuille() {
        choixJ = 1;
        choixRdmOrdi();
    }

    function clickCiseaux() {
        choixJ = 2;
        choixRdmOrdi();
    }

    function choixRdmOrdi() {
        choixO = Math.floor(Math.random() * 3);
        changeBackgroundColor();
    }


    function changeBackgroundColor() {
        tabOrdi[choixO].style.backgroundColor = 'orange';
        turnBtn(0);
        getGagnant();
    }

    function getGagnant() {
        if (choixJ == 0 && choixO == 1) {
            victoireOrdi()

        } else if (choixJ == 0 && choixO == 2) {
            victoireJoueur()

        } else if (choixJ == 1 && choixO == 0) {
            victoireJoueur()

        } else if (choixJ == 1 && choixO == 2) {
            victoireOrdi()

        } else if (choixJ == 2 && choixO == 0) {
            victoireOrdi()

        } else if (choixJ == 2 && choixO == 1) {
            victoireJoueur()

        } else {
            tour.innerText = ('Egalité !');
        }
    }

    function victoireJoueur() {
        tour.innerText = ('Victoire du joueur ! ');
        scoreJ = scoreJ + 1;
        eltScoreJ.innerText = scoreJ;
    }

    function victoireOrdi() {
        tour.innerText = ('Victoire de l\'ordinateur ! ');
        scoreO = scoreO + 1;
        eltScoreO.innerText = scoreO;
    }

    function reset() {
        scoreO = 0;
        scoreJ = 0;
        tour.innerText = 'A vous de jouer';
        eltScoreJ.innerText = scoreJ;
        eltScoreO.innerText = scoreO;
        recommencer.setAttribute('value', 'Recommencer');
        resetBackgroundColor()
        turnBtn(1);
    }

    function mancheSuivante() {
        resetBackgroundColor()
        turnBtn(1);
    }

    function turnBtn(value) {
        for (let i = 0; i < tabJoueur.length; i++) {
            if (value == 0) {
                tabJoueur[i].setAttribute('disabled', '');
            } else {
                tabJoueur[i].removeAttribute('disabled');
            }
        }
    }

    function resetBackgroundColor() {
        for (let i = 0; i < tabOrdi.length; i++) {
            tabOrdi[i].style.backgroundColor = 'transparent';
        }
    }
});