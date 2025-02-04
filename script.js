class Realisatrice {
    constructor(nom, prenom, anneeNaissance) {
        this.nom = nom
        this.prenom = prenom
        this.anneeNaissance = anneeNaissance
        this.age = new Date().getFullYear() - anneeNaissance
    }
}

const TypeCategorie = {
    FICTION: "Fiction",
    DOCUMENTAIRE: "Documentaire"
}

class Categorie {
    constructor(nom) {
        this.nom = nom
        //this.type = type
    }
}

class Film {
    constructor(titre, dateSortie, realisatrice, categories = []) {
        this.titre = titre
        this.dateSortie = dateSortie
        this.realisatrice = realisatrice
        this.categories = categories
    }
        introduce() {
            console.log(`Le film ${this.titre} est sorti en ${this.dateSortie} et est réalisé par ${this.realisatrice.prenom} ${this.realisatrice.nom}. Le film est de genre ${this.categorie.nom}`)
          }
    
}



// function afficherFilm(film) {
//     console.log(`Le film ${film.titre} est sorti en ${film.dateSortie} et est réalisé par ${film.realisatrice.prenom} ${film.realisatrice.nom}. Le film est de genre ${film.categories[0].Categorie}`)
// }

const realisatrice1 = new Realisatrice ("Akerman", "Chantal", 1950)
const realisatrice2 = new Realisatrice ("Varda", "Agnès", 1928)
const realisatrice3 = new Realisatrice ("Duvarnay", "Ava", 1972)

const categorie1 = new Categorie("Drame")
const categorie2 = new Categorie("Romance")
const categorie3 = new Categorie("Horreur")
console.log("categorie 1", categorie1)
const film1 = new Film ("La captive", 2000, realisatrice1, [categorie1])
const film2 = new Film ("Le bonheur", 1965, realisatrice2, [categorie2, categorie3])
const film3 = new Film ("Origin", 2023, realisatrice3, [categorie1])
console.log("films2", film2)

film1.introduce()
film2.introduce()
film3.introduce()



