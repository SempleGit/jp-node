const characters = [
  { 
    id: 11, 
    name: 'Alan Grant', 
    bio: 'Dr. Alan Grant is one of the main characters in the Jurassic Park franchise and the main protagonist in the first Jurassic Park and Jurassic Park III. He is a paleontologist who was invited by John Hammond to his dinosaur park, Jurassic Park. Alan is portrayed very differently over the various canons.', //Wikipedia
    img: 'assets/images/characters/Alangrant.jpg',
    alt: 'Headshot of Dr. Alan Grant',
    figcaption: 'Headshot of Dr. Alan Grant.'
  },
  { 
    id: 12, 
    name: 'Ellie Sattler', 
    bio: 'Dr. Ellen "Ellie" Sattler is the only child of Terry and Diane Sattler. She was a graduate student at the Snakewater dig site. Her professor was Dr. Alan Grant. She was a paleobotanist, a paleontologist who specializes in the study of prehistoric plants. She was 24 years old and darkly tanned, most likely due to sun exposure during her digs. She was engaged to Dr. Reiman, a physicist from Berkeley.', //Wiki
    img: 'assets/images/characters/EllieSattler.jpg',
    alt: 'Dr. Sattler standing in a field',
    figcaption: 'Dr. Sattler standing in an open field during a tour of Jurassic Park.'
  },
  { 
    id: 13, 
    name: 'John Hammond', 
    bio: "Dr. John Alfred Hammond, or John Parker Hammond, was the CEO and creator of Jurassic Park. He founded the company InGen and the Hammond Foundation. He had at least one daughter, two grandchildren (Tim and Lex Murphy), a sister (as Hammond's nephew has the surname of Ludlow, not Hammond) and a nephew, Peter Ludlow.", //Wiki
    img: 'assets/images/characters/Amber_cane.jpg',
    alt: 'Dr. Hammond looking at the fossilized mosquito in the amber on the end of his cane.',
    figcaption: 'Dr. Hammond looking at the fossilized mosquito in the amber on the end of his cane.'
  },
  { 
    id: 14, 
    name: 'Ian Malcolm', 
    bio: "Dr. Ian Malcolm is a gifted mathematician who specializes in chaos theory. The character was inspired in part by American historian of science James Gleick and French mathematician Ivar Ekeland.[1] In Crichton's 1990 novel Jurassic Park and its 1993 film adaptation, Malcolm is invited by insurance lawyer Donald Gennaro to notice any problems with John Hammond's dinosaur theme park, Jurassic Park.", //Wiki
    img: 'assets/images/characters/IanMalcolm.jpg',
    alt: 'Dr. Malcolm wearing his characteristic all black.',
    figcaption: 'Dr. Malcolm wearing his characteristic all black.'
  },
  { 
    id: 15, 
    name: 'Tim Murphy', 
    bio: `Timothy "Tim" Murphy is the grandson of John Hammond who was invited to Jurassic Park because his parents were going through a divorce. In the film, some of his characteristics were swapped from the novel, with those of his sister Lex Murphy. Being John Hammond's grandson, he is second-generation Scottish-American.`, //Wiki
    img: 'assets/images/characters/TimMurphy.jpg',
    alt: 'Tim Murphy standing in front of a Jurassic Park vehicle.',
    figcaption: 'Tim Murphy standing in front of a Jurassic Park vehicle.'
  },
  { 
    id: 16, 
    name: 'Lex Murphy', 
    bio: `Alexis "Lex" Murphy is John Hammond's granddaughter and Tim's sister, who accompanied the endorsement team on the tour as a gift due to her parents getting a divorce.`, //Wiki
    img: 'assets/images/characters/LexMurphy.jpg',
    alt: 'Lex Murphy sitting in the jungle in Jurassic Park.',
    figcaption: 'Lex Murphy sitting in the jungle in Jurassic Park.'
  },
  { 
    id: 17, 
    name: 'Owen Grady', 
    bio: 'Owen Grady is an animal behaviorist who was employed by Jurassic World as a Velociraptor trainer. After the fall of Jurassic World in 2015, Grady briefly entered a relationship with Claire Dearing, the former park manager of Jurassic World.[1] However this did not last and Owen would later go off to live on his own in Northern California. Dearing would later recruit him to help save Blue, a raptor he raised, from the eruption of Mt. Sibo. Owen would later participate in an incident at Lockwood Manor in which he witnessed dinosaurs being released into the wider world.', //Wiki
    img: 'assets/images/characters/OwenGrady.jpg',
    alt: 'Owen Grady looking determined',
    figcaption: 'Owen Grady preparing to rescue the island in Jurassic World.'
  },
  { 
    id: 18, 
    name: 'Claire Dearing', 
    bio: "Claire Dearing is the leader of the Dinosaur Protection Group and the former park operations manager of Jurassic World, before the park's abandonment in 2015 upon the escape of the Indominus rex. She founded the DPG after her experience in the Jurassic World incident, and rededicated to the survival and prosperity of the surviving dinosaurs. She is currently in a relationship with Owen Grady and, alongside him, is a guardian of Maisie Lockwood.​​​​ She is Karen Mitchell's younger sister and Zach and Gray's aunt.", //Wiki
    img: 'assets/images/characters/ClaireFallenKingdom.png',
    alt: 'Headshot of Claire Dearing.',
    figcaption: 'Headshot of Claire Dearing.'
  },
  { 
    id: 19, 
    name: 'Velociraptor', 
    bio: `Velociraptor, in real life, was a genus of dromaeosaurid theropod dinosaur from the Late Cretaceous period which inhabited what is now the Mongolia-China border with other unique dinosaurs. Velociraptor was no bigger than a wolf and with its feathers it bore a very bird-like appearance that would make it all the more different from the films, being more akin to a flightless hawk. It had a long claw ("terrible claw") on the second toe of both feet, 8 centimeters (3 inches) long, which was probably used as a weapon, plunging into the flesh of victims and causing deep wounds. Velociraptor was the first dromaeosaurid to be discovered (1923) and is still the most well known to paleontologists, with over a dozen recovered fossil skeletons - the most of any other member of its family. Since its appearance in the first film, it has become a symbol of Jurassic Park and has appeared in all the films and games.`, //Wiki
    img: 'assets/images/characters/Velociraptor.png',
    alt: 'Standing velociraptor as seen in Jurassic Park.',
    figcaption: 'Standing velociraptor as seen in Jurassic Park.'
  },
  { 
    id: 20, 
    name: 'Tyrannosaurus Rex', 
    bio: 'Tyrannosaurus rex (meaning "tyrant lizard king"), also known as T. rex, is an extinct species of tyrannosaur in the genus Tyrannosaurus that lived in North America during the Late Cretaceous period around 68-65 million years ago. The undisputed king of the dinosaurs, it coexisted alongside many well known dinosaurs such Triceratops, Ankylosaurus, Pachycephalosaurus, Ornithomimus, Troodon, Edmontosaurus, Alamosaurus, Nanotyrannus, and the pterosaur Quetzalcoatlus.', //Wiki
    img: 'assets/images/characters/Tyrannosaurus_rex_Roaring.png',
    alt: 'Tyrannosaurus rex roaring.',
    figcaption: 'Tyrannosaurus rex roaring.'
  },
];

module.exports = characters;