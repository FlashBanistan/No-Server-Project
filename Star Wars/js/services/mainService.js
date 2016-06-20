angular.module("swapi-game").service("mainService", function(){

  var characters = [
    {
      name: "Luke Skywalker",
      image: "/images/luke-skywalker.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Beru Whitesun Lars",
      image: "/images/beru-whitesun-lars.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Biggs Darklighter",
      image: "/images/biggs-darklighter.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "C3PO",
      image: "/images/c3po.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Darth Vader",
      image: "/images/darth-vader.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Leia Organa",
      image: "/images/leia-organa.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Obi Wan Kenobi",
      image: "/images/obi-wan-kenobi.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Owen Lars",
      image: "/images/owen-lars.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "R2D2",
      image: "/images/r2d2.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "R5D4",
      image: "/images/r5d4.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Anakin Skywalker",
      image: "/images/anakin-skywalker.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Wilhuff Tarkin",
      image: "/images/wilhuff-tarkin.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Chewbacca",
      image: "/images/chewbacca.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Han Solo",
      image: "/images/han-solo.png",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Greedo",
      image: "/images/greedo.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Jabba Desilijic Tiure",
      image: "/images/jabba-desilijic-tiure.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Wedge Antilles",
      image: "/images/wedge-antilles.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Jek Tono Porkins",
      image: "/images/jek-tono-porkins.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Yoda",
      image: "/images/yoda.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Palpatine",
      image: "/images/palpatine.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Boba Fett",
      image: "/images/boba-fett.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "IG-88",
      image: "/images/ig-88.jpg",
      species: "Droid",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Bossk",
      image: "/images/bossk.png",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Lando Calrissian",
      image: "/images/lando-calrissian.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Lobot",
      image: "/images/lobot.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Ackbar",
      image: "/images/ackbar.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Mon Mothma",
      image: "/images/mon-mothma.png",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Arvel Crynyd",
      image: "/images/arvel-crynyd.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Wicket Systri Warrick",
      image: "/images/wicket-systri-warrick.png",
      species: "Ewok",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Nien Nunb",
      image: "/images/nien-nunb.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Qui-Gon Jinn",
      image: "/images/qui-gon-jinn.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Nute Gunray",
      image: "/images/nute-gunray.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Finis Valorum",
      image: "/images/finis-valorum.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Jar Jar Binks",
      image: "/images/jar-jar-binks.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Roos Tarpals",
      image: "/images/roos-tarpals.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Rugor Nass",
      image: "/images/rugor-nass.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Ric Olié",
      image: "/images/ric-olie.png",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Watto",
      image: "/images/watto.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Sebulba",
      image: "/images/sebulba.png",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Quarsh Panaka",
      image: "/images/quarsh-panaka.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Shmi Skywalker",
      image: "/images/shmi-skywalker.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Darth Maul",
      image: "/images/darth-maul.png",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Bib Fortuna",
      image: "/images/bib-fortuna.gif",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Aayla Secura",
      image: "/images/aayla-secura.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Ratts Tyerell",
      image: "/images/ratts-tyerell.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Dud Bolt",
      image: "/images/dud-bolt.png",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Gasgano",
      image: "/images/gasgano.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Ben Quadinaros",
      image: "/images/ben-quadinaros.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Mace Windu",
      image: "/images/mace-windu.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Ki-Adi-Mundi",
      image: "/images/ki-adi-mundi.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Kit Fisto",
      image: "/images/kit-fisto.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Eeth Koth",
      image: "/images/eeth-koth.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Adi Gallia",
      image: "/images/adi-gallia.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Saesee Tiin",
      image: "/images/saesee-tiin.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Yarael Poof",
      image: "/images/yarael-poof.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Plo Koon",
      image: "/images/plo-koon.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Mas Amedda",
      image: "/images/mas-amedda.png",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Gregar Typho",
      image: "/images/gregar-typho.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Cordé",
      image: "/images/corde.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Cliegg Lars",
      image: "/images/cliegg-lars.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Poggle the Lesser",
      image: "/images/poggle-the-lesser.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Luminara Unduli",
      image: "/images/luminara-unduli.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Dormé",
      image: "/images/dorme.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Dooku",
      image: "/images/dooku.png",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Bail Prestor Organa",
      image: "/images/bail-prestor-organa.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Jango Fett",
      image: "/images/jango-fett.png",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Zam Wesell",
      image: "/images/zam-wesell.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Dexter Jettster",
      image: "/images/dexter-jettster.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Lama Su",
      image: "/images/lama-su.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Taun We",
      image: "/images/taun-we.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Jocasta Nu",
      image: "/images/jocasta-nu.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "R4-P17",
      image: "/images/r4-p17.jpg",
      species: "Droid",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Wat Tambor",
      image: "/images/wat-tambor.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "San Hill",
      image: "/images/san-hill.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Shaak Ti",
      image: "/images/shaak-ti.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Grievous",
      image: "/images/grievous.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Tarfful",
      image: "/images/tarfful.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Raymus Antilles",
      image: "/images/raymus-antilles.jpg",
      disabled: "false",
      difficulty: "medium",
    },
    {
      name: "Sly Moore",
      image: "/images/sly-moore.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Tion Medon",
      image: "/images/tion-medon.jpg",
      disabled: "false",
      difficulty: "hard",
    },
    {
      name: "Finn",
      image: "/images/finn.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Rey",
      image: "/images/rey.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Poe Dameron",
      image: "/images/poe-dameron.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "BB8",
      image: "/images/bb8.jpg",
      species: "Droid",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Captain Phasma",
      image: "/images/captain-phasma.jpg",
      disabled: "false",
      difficulty: "easy",
    },
    {
      name: "Padmé Amidala",
      image: "/images/padme-amidala.jpg",
      disabled: "false",
      difficulty: "easy",
    },
  ]
  this.justShuffle = function(array){
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  this.shuffle = function(array, level) {
    //GRAB ALL OBJECTS WITH THE SPECIFIED LEVEL
    var difArr=[];
    for(var j=0; j<array.length; j++){
      if(array[j].difficulty === level){
        difArr.push(array[j]);
      }
    }
    //SHUFFLE DIFARR
    var m = difArr.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = difArr[m];
      difArr[m] = difArr[i];
      difArr[i] = t;
    }
    //PICK FIRST 5
    var newArr = []
    for(let i = 0; i<5; i++){
      difArr[i].disabled = false;
      if (difArr[i]['$$hashKey']) {
        delete difArr[i]['$$hashKey'];
      }
      newArr.push(difArr[i]);
    }
  return newArr;
  }

  this.getData = function(level){
    return this.shuffle(characters, level);
  };

});
