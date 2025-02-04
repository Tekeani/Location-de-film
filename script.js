class Realisatrice {
    constructor(nom, prenom, anneeNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.anneeNaissance = anneeNaissance;
    }
}

class Film {
    constructor(titre, dateSortie, realisatrice, categories = []) {
        this.titre = titre;
        this.dateSortie = dateSortie;
        this.realisatrice = realisatrice;
        this.categories = categories;
    }
}

function afficherFilm(film) {
    console.log(`Le film ${film.titre} est sorti en ${film.dateSortie} et est réalisé par ${film.realisatrice.prenom} ${film.realisatrice.nom}`);
}

const realisatrice1 = new Realisatrice ("Akerman", "Chantal", 1950)
const realisatrice2 = new Realisatrice ("Varda", "Agnès", 1928)
const realisatrice3 = new Realisatrice ("Duvarnay", "Ava", 1972)

const film1 = new Film ("La captive", 2000, realisatrice1)
const film2 = new Film ("Le bonheur", 1965, realisatrice2)
const film3 = new Film ("Origin", 2023, realisatrice3)

afficherFilm(film1)
afficherFilm(film2)
afficherFilm(film3)
