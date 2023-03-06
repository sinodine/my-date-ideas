class Idea {
    constructor(concept, category, time, cost, prep, food, ext) {
        this.concept = concept;
        this.category = category;
        this.time = time; // in hours
        this.cost = cost; // 0 - low, 1 - medium, 2 - high, 3 - very high
        this.prep = prep; // true if preparation is required, false otherwise
        this.food = food; // true if food is involved, false otherwise
        this.ext = ext; // true if it involves going out, false otherwise
    }
}

// Outdoor = 0;
// Indoor = 1;
// DateNigth = 2;

const myIdea1 = new Idea("bowling", 0, 2, 2, false, false, true);

const ideas = [
  new Idea("visiter l'arc de triomphe", "Outdoor", 4, 0, false, false, true),
  new Idea("aller \u00E0 la patinoire", "Outdoor", 3, 2, false, false, true),
  new Idea("aller au tranpopark", "Outdoor", 3, 2, false, false, true),
  new Idea("aller \u00E0 la salle escalade", "Outdoor", 3, 2, false, false, true),
  new Idea("aller \u00E0 la salle muscu", "Outdoor", 1, 0, false, false, true),
  new Idea("aller \u00E0 la piscine", "Outdoor", 1, 1, false, false, true),
  new Idea("faire de l'accrobranche", "Outdoor", 3, 2, false, false, true),
  new Idea("faire du kayak", "Outdoor", 3, 2, false, false, true),
  new Idea("faire du camping", "Outdoor", 10, 3, true, true, true),
  new Idea("voyager pour un we", "Outdoor", 10, 4, true, true, true),
  new Idea("faire une balade \u00E0 la for\u00EAt", "Outdoor", 2, 0, false, false, true),
  new Idea("se balader dans un parc", "Outdoor", 2, 0, false, false, true),
  new Idea("faire une visite culturelle/historique", "Outdoor", 4, 0, false, false, true),
  new Idea("explorer Champs-sur-Marne", "Outdoor", 1, 0, false, false, true),
  new Idea("faire du paintball", "Outdoor", 3, 2, false, false, true),
  new Idea("se faire une coloration", "Indoor", 2, 0, false, false, false),
  new Idea("faire des p\u00E2tes maison", "Indoor", 3, 0, false, true, false),
  new Idea("se faire une soir\u00E9e gaming", "Indoor", 3, 0, false, false, false),
  new Idea("faire une recette pompette", "Indoor", 3, 1, true, true, false),
  new Idea("faire une soir\u00E9e cocktail", "Indoor", 2, 1, true, true, false),
  new Idea("faire de la poterie", "Indoor", 3, 2, true, false, false),
  new Idea("faire de la peinture", "Indoor", 2, 0, false, false, false),
  new Idea("se maquiller", "Indoor", 2, 0, false, false, false),
  new Idea("construire un kit lego", "Indoor", 2, 2, true, false, false),
  new Idea("regarder un film d'horreur", "Indoor", 3, 0, false, false, false),
  new Idea("regarder une com\u00E9die", "Indoor", 3, 0, false, false, false),
  new Idea("jouer de la guitare", "Indoor", 1, 0, false, false, false),
  new Idea("faire un karaok\u00E9", "Indoor", 2, 0, false, false, false),
  new Idea('faire un puzzle', 'Indoor', 3, 2, true, false, false),
  new Idea('apprendre un truc rapide', 'Indoor', 1, 0, false, false, false),
  new Idea("faire des tours de magie", "Indoor", 1, 0, false, false, false),
  new Idea("manger du guacamole", "Indoor", 1, 1, true, true, false),
  new Idea("commencer une s\u00E9rie ensemble", "Indoor", 2, 0, false, false, false),
  new Idea("Manger \u00E0 l'asian77", "DateNight", 2, 2, false, true, true),
  new Idea("aller dans un bar \u00E0 jeux", "DateNight", 4, 2, false, false, true),
  new Idea("aller au th\u00E9\u00E2tre regarder une com\u00E9die", "DateNight", 3, 2, false, false, true),
  new Idea("aller au th\u00E9\u00E2tre", "DateNight", 3, 2, false, false, true),
  new Idea("aller dans un bar \u00E0 h\u00E2ches", "DateNight", 3, 2, false, false, true),
  new Idea("aller au cin\u00E9ma", "DateNight", 3, 2, false, false, true),
  new Idea("faire pic-nique sur le toit de bienven\u00FCe", "DateNight", 2, 2, true, true, true),
  new Idea("se faire un tatouage", "DateNight", 2, 0, false, false, false)
];




  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}
