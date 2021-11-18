localStorage.getItem("keys");
let keyFounded = false;

function pieceSecretKey() {
  keyFounded = true;
  goToChapter(`chapter1`);
}

function pieceSecrete() {
  if (keyFounded == true) {
    goToChapter(`chapter0_2`);
  } else {
    goToChapter(`chapter0`);
  }
}

localStorage.getItem("sauvgardeChap");

const song = new Audio("assets/mp3/gouttes.mp3");
song.pause();

const sauvgarde = document.querySelector(".btn");

let chaptersObj = {
  chapter1: {
    subtitle: "Où suis-je?",
    text: "Vous vous reveillez dans une grande entrepôt",
    img: "assets/img/reveil.png",
    options: [
      {
        text: "Suivant",
        action: "pieceSecrete()",
      },
    ],
  },
  chapter0: {
    subtitle: "pris au piège",
    text: "Touts d'un coups vous sentez de forte vibration de nul part, d'un seul coups vous vous apercevez que les mure de chaque coter de la piece bouge ne ce refermant sur vous",
    img: "assets/img/chapter_01_wall.jpg",
    options: [
      {
        text: "vous grimpez sur le dessu du mur ",
        action: "goToChapter(`chapter1_2`)",
      },
      {
        text: "mettre un morceau de fer pour bloquer les murs",
        action: "goToChapter(`chapter1_3`)",
      },
    ],
  },
  chapter0_2: {
    subtitle: "pris au piège",
    text: "Touts d'un coups vous sentez de forte vibration de nul part, d'un seul coups vous vous apercevez que les mure de chaque coter de la piece bouge ne ce refermant sur vous",
    img: "assets/img/chapter_01_wall.jpg",
    options: [
      {
        text: "Vous briser le miroir",
        action: "goToChapter(`chapter1_1`)",
      },
      {
        text: "Vous grimpez sur le dessus du mur ",
        action: "goToChapter(`chapter1_2`)",
      },
      {
        text: "Mettre un morceau de fer pour bloquer les murs",
        action: "goToChapter(`chapter1_3`)",
      },
    ],
  },
  chapter1_1: {
    subtitle: "pris au piège",
    text: "vous arrivez dans une salle  avec une petite statue qui vous regade et vous dits félicitaion !",
    img: "assets/img/chapter_01_01_statue.jpg",
    options: [
      {
        text: "Bravo!",
      },
    ],
  },
  chapter1_2: {
    subtitle: "pris au piège",
    text: "Vous franchiser une petite porte.",
    img: "assets/img/chapter_01_02_porte.jpg",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter2`)",
      },
    ],
  },
  chapter1_3: {
    subtitle: "pris au piège",
    text: "vous mourez transpercé par le bout de fer",
    img: "assets/img/chapter_01_01_statue.jpg",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },
  chapter2: {
    subtitle: "vous ou elle",
    text: "En entrant dans la piece vous appercevez un gros tube avec une inconnue a l'interieur. Sur un panneau devant vous, ce trouve 3 boutons, un rouge, un bleu et un vert.",
    img: "assets/img/chapter_02_tube.png",
    options: [
      {
        text: "appuyer sur le bouton noir",
        action: "goToChapter(`chapter2_1`)",
      },
      {
        text: "appuyer sur le bouton Bleu",
        action: "goToChapter(`chapter2_3`)",
      },
      {
        text: "appuyer sur le bouton Rouge",
        action: "goToChapter(`chapter2_2_1`)",
      },
    ],
  },
  chapter2_1: {
    subtitle: "vous ou elle",
    text: "la piece et le tube se rempli de poison",
    video: "assets/mp4/gas.mp4",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },
  chapter2_2_1: {
    subtitle: "vous ou elle",
    text: "Le tube devant vous ce remplit de gas",
    img: "assets/img/chapter_02_01_gas.png",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter2_2_2`)",
      },
    ],
  },
  chapter2_2_2: {
    subtitle: "vous ou elle",
    text: "la porte devant vous s'ouvre, vous la franchisez.",
    img: "assets/img/chapter_01_02_porte.jpg",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter3`)",
      },
    ],
  },
  chapter2_3: {
    subtitle: "vous ou elle",
    text: "La piece ce rempli de poison.",
    video: "assets/mp4/gas.mp4",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },
  chapter3: {
    subtitle: "Vitesse",
    text: "Devant vous sur la table ce trouve une arme. celle ci est chargé d'une balle. vous comprenez que vous devrez jouer a la roulette russe.",
    img: "assets/img/chapter_03_pistolet.jpg",
    options: [
      {
        text: "vous tournez rapidement",
        action: "goToChapter(`chapter3_1`)",
      },
      {
        text: "vous tournez lentement",
        action: "goToChapter(`chapter3_2`)",
      },
    ],
  },
  chapter3_1: {
    subtitle: "Vitesse",
    text: "vous tirez une balle dans votre tête.",
    video: "assets/mp4/saw1.mp4",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },
  chapter3_2: {
    subtitle: "Vitesse",
    text: "L'arme ne tire pas.",
    video: "assets/mp4/saw1.mp4",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter4`)",
      },
    ],
  },
  chapter4: {
    subtitle: "Repas joyeux",
    text: "Sur une une table devant vous, ce trouve 3 puddings, vous devez en manger un.",
    img: "assets/img/chapter_04_table.jpg",
    options: [
      {
        text: "puding droit",
        action: "goToChapter(`chapter4_1`)",
      },
      {
        text: "puding du centre",
        action: "goToChapter(`chapter4_2`)",
      },
      {
        text: "puding gauche",
        action: "goToChapter(`chapter2`)",
      },
    ],
  },
  chapter4_1: {
    subtitle: "Repas joyeux",
    text: "Vous êtes drogé. Vous commencer a sentir des effets étranges. votre âme sort de votre corps.",
    img: "assets/img/chapter_04_01.png",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter4_1_1`)",
      },
    ],
  },
  chapter4_1_1: {
    subtitle: "Repas joyeux",
    text: "Vous traversez les murs.",
    img: "assets/img/chapter_04_01.png",
    options: [
      {
        text: "Suivant",
        action: "goTochapter(`chapter4_1_2`)",
      },
    ],
  },
  chapter4_1_2: {
    subtitle: "Repas joyeux",
    text: "vous vous trouvez dans une piece munis dun mimoir a travers lequelle vous pouvez voir.",
    img: "assets/img/chapter_04_01.png",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter4_1_3`)",
      },
    ],
  },
  chapter4_1_3: {
    subtitle: "Repas joyeux",
    text: "Vous apercevez la piece originel ou vous vous ètes reveillez.",
    img: "assets/img/chapter_04_01.png",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter4_1_4`)",
      },
    ],
  },
  chapter4_1_4: {
    subtitle: "Repas joyeux",
    text: "vous mourez d'une overdose de stupéfiant.",
    img: "assets/img/chapter_04_01.png",
    options: [
      {
        text: "Suivant",
        action: "pieceSecretKey()",
      },
    ],
  },
  chapter4_3: {
    subtitle: "Repas joyeux",
    text: "Vous êtes drogé. vous commencer a sentire des effets étranges. votre âme sort de votre corps.",
    img: "assets/img/chapter_04_01.png",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter4_1_1`)",
      },
    ],
  },
  chapter4_2: {
    subtitle: "Repas joyeux",
    text: "vous mourez empoisoné",
    img: "assets/img/chapter_04_01.png",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },
  chapter4_2_1: {
    subtitle: "Repas joyeux",
    text: "Vous recevez une balle dans la tête",
    img: "assets/img/chapter_04_01.png",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },
};

function goToChapter(chapterName) {
  song.play();

  let chapter = chaptersObj[chapterName];

  const titre = document.querySelector(".titre_chapitre");
  const descriptionChap = document.querySelector(".text_jeux");
  const chapImg = document.querySelector(".chapitre_img");
  const choixArr = chapter.options;
  let choixBut = "";

  if ("video" in chapter) {
    chapImg.innerHTML = `<video src="${chapter.video}" autoplay loop>`;
  } else {
    chapImg.innerHTML = `<img src="${chapter.img}" alt="image mort :3">`;
  }

  descriptionChap.innerHTML = chapter.text;
  titre.innerHTML = chapter.subtitle;

  for (let index = 0; index < choixArr.length; index++) {
    const opt = choixArr[index];
    choixBut += `<button class="btn" onclick="${opt.action}">${opt.text}</button>`;
    console.log("chapitre suivant");
  }
  let choixBar = document.querySelector(".boutons");
  choixBar.innerHTML = choixBut;
}

sauvgarde.addEventListener("click", function () {
  console.log("sauvgarde");
  localStorage.setItem("sauvgardeChap", chapter);
  localStorage.setItem("keys", keyFounded);
});

goToChapter("chapter1");
