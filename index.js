const keys = [...document.querySelectorAll('.btn')];
const listeKeycode = keys.map(touche => touche.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                screen.textContent = "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = keys[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})