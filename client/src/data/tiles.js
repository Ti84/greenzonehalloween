import Jack from '../assets/Jack.svg';
import Grave from '../assets/grave.png';
import Vortex from '../assets/vortex.png';
import Forest from '../assets/forest.png';
import Roulette from '../assets/roulette.png';
import Scarecrow from '../assets/scarecrow.png';
import Snek from '../assets/snek.png';
import TestTubes from '../assets/test-tubes.png';
import ElfWorkshop from '../assets/elf-workshop.png';
import ChristmasTree from '../assets/christmas-tree.png';

export const tiles = {
  Graveyard: [
    {
      icon: Grave,
      desc:
        'There are few who can deny at what you do you are the best. For your talents are renowned far and wide',
      points: 500
    },
    {
      icon: Grave,
      desc:
        'With the wave of your hand and a well-placed moan you have swept the very bravest off their feet',
      points: 400
    },
    {
      icon: Grave,
      desc: 'Gaze at the moon and stars with Zero on the mountain',
      points: 300
    },
    {
      icon: Grave,
      desc: 'No animal of man can scream like you can',
      points: 250
    },
    {
      icon: Grave,
      desc:
        'When it comes to surprises in the moonlit night, you excel without ever even trying',
      points: 115
    },
    {
      icon: Grave,
      desc: 'Played fetch with Zero',
      points: 325
    },
    {
      icon: Grave,
      desc:
        "You can't wait until next Halloween cause you've got some new ideas that will really make them scream",
      points: 200
    },
    {
      icon: Grave,
      desc: 'Enjoy a nice walk with Zero through the graveyard',
      points: 150
    },
    {
      icon: Grave,
      desc: 'Zero enjoys hearing the stories you share with him',
      points: 425
    },
    {
      icon: Grave,
      desc: 'You enjoy a relaxing moment under the stars',
      points: 325
    },
    {
      icon: Grave,
      desc:
        'With the slightest little effort of your ghostlike charms, you have seen grown adults give out a shriek',
      points: 150
    },
    {
      icon: Grave,
      desc: 'You found Zero at his house',
      points: 250
    },
    {
      icon: Grave,
      desc:
        'Oh no someone has followed you to your quiet place at the graveyard',
      points: -100
    },
    {
      icon: Grave,
      desc: 'Boo! You were spooked by a ghost',
      points: -75
    },
    {
      icon: Grave,
      desc: 'You tripped over a gravestone. Ouch!',
      points: -45
    },
    {
      icon: Grave,
      desc:
        "Year after year, it’s the same routine. You've grown so weary of the sound of screams.",
      points: -90
    }
  ],
  'Ring of Holiday Trees': [
    {
      icon: Forest,
      desc: "Discovered the Valentine's Tree",
      points: 400
    },
    {
      icon: Forest,
      desc: 'Discovered the Easter Egg Tree',
      points: 600
    },
    {
      icon: Forest,
      desc: 'Discovered the Shamrock Tree',
      points: 400
    },
    {
      icon: Forest,
      desc: 'Discovered the Turkey Tree',
      points: 1225
    },
    {
      icon: Forest,
      desc: 'Discovered the Christmas Tree, Tree',
      points: 1226
    },
    {
      icon: Forest,
      desc: 'Discovered the holiday worlds of old',
      points: 600
    }
  ],
  'Vortex to Christmas Town': [
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 150
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 75
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 175
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 350
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 150
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 160
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 122
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 87
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 190
    },
    {
      icon: Vortex,
      desc: 'Traveling to Christmas Town',
      points: 110
    }
  ],
  'Christmas Town': [
    {
      icon: ChristmasTree,
      desc: 'You tasted the white things in the air!',
      points: 1200
    },
    {
      icon: ChristmasTree,
      desc:
        'You covered trees with tiny little things and electric lights on strings',
      points: 550
    },
    {
      icon: ChristmasTree,
      desc: 'You heard music in the air instead of screams',
      points: 615
    },
    {
      icon: ChristmasTree,
      desc: 'You smelled the scent of cakes and pies absolutely everywhere',
      points: 510
    },
    {
      icon: ChristmasTree,
      desc: 'You discovered Christmas town!',
      points: 450
    },
    {
      icon: ChristmasTree,
      desc: 'You heard laughter instead of screaming',
      points: 845
    },
    {
      icon: ChristmasTree,
      desc: 'You gathered round the fire to hear a jolly story',
      points: 420
    },
    {
      icon: ChristmasTree,
      desc:
        "There's frost on every window, you can't believe your eyes! And in your bones you feel the warmth that's coming from inside",
      points: 415
    },
    {
      icon: ChristmasTree,
      desc: 'You were hit by a child throwing a snowball',
      points: -200
    }
  ],
  'Christmas Preparation Zone': [
    {
      icon: ElfWorkshop,
      desc:
        "Making Christmas, making Christmas is so fine! You got the town to cheer so it's party time!",
      points: 500
    },
    {
      icon: ElfWorkshop,
      desc: 'Wrapped the most wonderful present',
      points: 615
    },
    {
      icon: ElfWorkshop,
      desc: 'Wrapped a box with bright-colored paper topped with a bow',
      points: 515
    },
    {
      icon: ElfWorkshop,
      desc:
        'Filled an oversized sock not with a foot but with candy and small toys',
      points: 575
    },
    {
      icon: ElfWorkshop,
      desc:
        'The Mayor thinks Christmas is a splendid idea and sounds like fun. He endorses the idea and says to try it at once',
      points: 700
    },
    {
      icon: ElfWorkshop,
      desc: "Jack's hopes, dreams and fantasies are coming true!",
      points: 650
    },
    {
      icon: ElfWorkshop,
      desc:
        "Surprised isn't he? You give Sandy Claws a vacation from Christmas this year",
      points: 525
    },
    {
      icon: ElfWorkshop,
      desc: "Made a present that wasn't fresh or pleasant",
      points: -250
    },
    {
      icon: ElfWorkshop,
      desc: 'Transformed an old rat into a most delightful hat',
      points: -300
    },
    {
      icon: ElfWorkshop,
      desc:
        'Snakes and mice get wrapped up so nice with spiders legs and pretty bows',
      points: -325
    },
    {
      icon: ElfWorkshop,
      desc: 'Sally had the most terrible vision about their Christmas plans',
      points: -475
    },
    {
      icon: ElfWorkshop,
      desc: "That's not Sandy Claws! Oogie's boys kidnaped the Easter Bunny",
      points: -475
    },
    {
      icon: ElfWorkshop,
      desc: "Something is missing from Jack's Sandy Claws suit.",
      points: -375
    }
  ],
  'Halloween Town': [
    {
      icon: Scarecrow,
      desc: 'Hail to the pumpkin song!',
      points: 475
    },
    {
      icon: Scarecrow,
      desc:
        'Thanks to your brilliant leadership this was our most horrible Halloween yet!',
      points: 450
    },
    {
      icon: Scarecrow,
      desc: 'You are such scream, you are a witches fondest dream',
      points: 400
    },
    {
      icon: Scarecrow,
      desc: 'The town has gathered to celebrate your successful Halloween',
      points: 350
    },
    {
      icon: Scarecrow,
      desc: 'The town has agreed to your plan to take over Christmas this year',
      points: 475
    },
    {
      icon: Scarecrow,
      desc: 'Ride with the moon in the dead of night',
      points: 215
    },
    {
      icon: Scarecrow,
      desc:
        'You won the frightening and honorable mention for your work this Halloween',
      points: 490
    },
    {
      icon: Scarecrow,
      desc: 'Town Meeting, Town Meeting… Jack has something to announce',
      points: 400
    },
    {
      icon: Scarecrow,
      desc:
        'Your Xmas assignment is ready. The mayor sends you to the front of the line',
      points: 485
    },
    {
      icon: Scarecrow,
      desc: "Zero's brilliant nose will light the way to Christmas",
      points: 500
    },
    {
      icon: Scarecrow,
      desc: 'Jack is back now, everyone sing. In our town of Halloween',
      points: 900
    },
    {
      icon: Scarecrow,
      desc:
        'Ho Ho Ho… Happy Halloween. Sandy Claws brings snow to Halloween Town!',
      points: 2000
    },
    {
      icon: Scarecrow,
      desc:
        'Scared by the one hiding under your bed with teeth ground sharp and eyes glowing red',
      points: -100
    },
    {
      icon: Scarecrow,
      desc:
        'Spooked by the one hiding under your stairs with fingers like snakes and spiders in his hair',
      points: -115
    },
    {
      icon: Scarecrow,
      desc:
        'Skeleton Jack caught you in the back and made you scream like a banshee',
      points: -130
    },
    {
      icon: Scarecrow,
      desc:
        'The shadow on the moon at night filled your dreams to the brim with fright',
      points: -250
    },
    {
      icon: Scarecrow,
      desc:
        "Dr. Finkelstein says you aren't ready for so much excitement. You must leave the celebration early.",
      points: -300
    },
    {
      icon: Scarecrow,
      desc:
        "The mayor needed your help planning next years Halloween but you weren't there",
      points: -500
    },
    {
      icon: Scarecrow,
      desc: 'The alarms have sounded, Jack has gone missing',
      points: -550
    },
    {
      icon: Scarecrow,
      desc: "Ugh. Oogie's boys showed up to get a Christmas assignment",
      points: -400
    },
    {
      icon: Scarecrow,
      desc: "The fog's as thick as jelly brains. There goes Christmas.",
      points: -750
    },
    {
      icon: Scarecrow,
      desc:
        'Terrible news folks. The worst tragedy of our times. Jack as been blown to smithereens.',
      points: -750
    }
  ],
  "Jack's House": [
    {
      icon: Jack,
      desc:
        'What does it mean? These dolls and toys confuse you so, but confound it all you love it though.',
      points: 500
    },
    {
      icon: Jack,
      desc:
        'This Christmas thing is not as tricky as it seems. You hatch a plan to make Christmas belong to you',
      points: 350
    },
    {
      icon: Jack,
      desc: 'Eureka! This year Christmas will be ours!',
      points: 750
    },
    {
      icon: Jack,
      desc:
        "You bet you can improve Christmas and that's exactly what you'll do.",
      points: 625
    },
    {
      icon: Jack,
      desc:
        "Something's up with Jack and you don't know if we are ever going to get him back",
      points: -625
    },
    {
      icon: Jack,
      desc:
        'You learned the Christmas carols all by heart that your skull is full and its tearing you apart',
      points: -615
    }
  ],
  "Finkelstein's Castle": [
    {
      icon: TestTubes,
      desc: "You finally escaped from Dr. Finkelstein's castle",
      points: 600
    },
    {
      icon: TestTubes,
      desc:
        "The Frog's Breath successfully overpowered the odor of the poison in the soup you made.",
      points: 650
    },
    {
      icon: TestTubes,
      desc:
        'Used a trick spoon to fool Dr. Finkelstein into thinking his soup was poison free',
      points: 675
    },
    {
      icon: TestTubes,
      desc:
        'Dr. Finkelstein agrees to release you from his lair if you promise to behave',
      points: 780
    },
    {
      icon: TestTubes,
      desc: 'Igor brings the plans',
      points: 725
    },
    {
      icon: TestTubes,
      desc: 'Dr. Finkelstein builds a new friend to have conversations with',
      points: 715
    },
    {
      icon: TestTubes,
      desc: 'Sally finds her fog juice to stop Jack',
      points: 645
    },
    {
      icon: TestTubes,
      desc: 'There is something in the wind. Sally senses tragedy is at hand.',
      points: 600
    },
    {
      icon: TestTubes,
      desc: 'Jack visits to borrow equipment for his experiment',
      points: 675
    },
    {
      icon: TestTubes,
      desc:
        'The deadly nightshade you tried to poison Dr. Finkelstein with wore off',
      points: -600
    },
    {
      icon: TestTubes,
      desc:
        'Dr. Finkelstein is suspicious and wants you to try the poisoned soup before he eats it',
      points: -600
    },
    {
      icon: TestTubes,
      desc:
        'Dr. Finkelstein says he has been poisoned for the last time. He locks you away in his castle.',
      points: -650
    },
    {
      icon: TestTubes,
      desc: 'You accidentally spill the bottle of deadly nightshade',
      points: -675
    },
    {
      icon: TestTubes,
      desc: 'Dr. Finkelstein catches you before you escape',
      points: -625
    },
    {
      icon: TestTubes,
      desc: "Oh no you ran out of Frog's Breath",
      points: -515
    }
  ],
  "Oogie Boogie's Lair": [
    {
      icon: Roulette,
      desc: 'Mr. Oogie Boogie got his kicks when you kidnapped the Sandy Claws',
      points: 900
    },
    {
      icon: Roulette,
      desc: 'Oogie Boogie rolls snake eyes. Looks like you won the jackpot!',
      points: 950
    },
    {
      icon: Roulette,
      desc: 'You defeat Oogie Boogie and save Santa and Sally!',
      points: 975
    },
    {
      icon: Roulette,
      desc:
        'Naughty children never get any presents. You disobeyed Jack and brought Sandy Claws to Oogie Boogie',
      points: -700
    },
    {
      icon: Roulette,
      desc:
        "Mr. Oogie Boogie says there's trouble close at hand. You'd better pay attention now cause he's the boogie man",
      points: -715
    },
    {
      icon: Roulette,
      desc:
        "It's hopeless, you're finished. You haven't got a prayer. Cause he's Mr. Oogie Boogie and you ain't going nowhere",
      points: -745
    },
    {
      icon: Roulette,
      desc:
        'What?!? You tried to make a dupe out of Oogie Boogie. He caught you trying to help Sandy Claws escape',
      points: -775
    },
    {
      icon: Roulette,
      desc:
        'Ashes to ashes, and dust to dust. Oogie Boogie is feeling weak… with hunger.',
      points: -725
    }
  ],
  'Creepy Christmas Village': [
    {
      icon: Snek,
      desc:
        "You're welcome one and all. You successfully deliver presents down the chimneys",
      points: 900
    },
    {
      icon: Snek,
      desc: 'Ho Ho Ho.. Santa Claus comes to save the day',
      points: 975
    },
    {
      icon: Snek,
      desc: 'You fill the stockings with candies and small toys',
      points: 915
    },
    {
      icon: Snek,
      desc: 'You hand a present to a small child and put a smile on their face',
      points: 925
    },
    {
      icon: Snek,
      desc: 'Your snake started eating a family’s Christmas tree',
      points: -780
    },
    {
      icon: Snek,
      desc:
        'There you go sonny. You deliver a shrunken head as a present to a child for Christmas',
      points: -725
    },
    {
      icon: Snek,
      desc: 'The police are called. Families are being attacked by your toys',
      points: -750
    },
    {
      icon: Snek,
      desc:
        'Newscasters are reporting from all over the globe that an imposter is shamelessly impersonating Santa Claus',
      points: -700
    },
    {
      icon: Snek,
      desc:
        'Military units are mobilizing to stop you from continuing your Christmas plans',
      points: -615
    },
    {
      icon: Snek,
      desc:
        "You're sleigh gets hit as you try to deliver presents to little Harry and Jordan who are next on your list",
      points: -675
    },
    {
      icon: Snek,
      desc:
        'Attention, attention citizens. Terrible news. There is still no sign of Santa Claus.',
      points: -1000
    }
  ],
  'End Space': [{ icon: '', desc: 'Congratulations! You\'ve made it through.', points: 0 }],
  totalNumberOfTiles: 112
};
