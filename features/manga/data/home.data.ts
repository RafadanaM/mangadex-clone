import { LatestManga } from "../interfaces/manga.interfaces";
import { RecentManga, SeasonalManga } from "../types/manga.types";

const latestUpdates: LatestManga[] = [
  {
    title: "Junketsu no Maria Exhibition",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Vol. 1 Ch. 4 - Maria",
    language: "ID",
    uploaded: new Date("2022-11-03T03:24:00"),

    translation_groups: [],
    isOfficial: false,
  },
  {
    title: "Fairy Tail",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Vol.1 Ch.2 = Master Appears!",
    language: "EN",
    uploaded: new Date("2022-10-17T03:24:00"),
    translation_groups: ["INKR Comics"],
    isOfficial: true,
  },
  {
    title: "Ao Ashi",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Ch. 310 - Después del partido",
    language: "IT",
    uploaded: new Date("2022-11-06T00:24:00"),
    translation_groups: ["Nato 012 Fansub"],
    isOfficial: false,
  },
  {
    title: "Ming Dynasty's Prodigal Son",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Ch. 34 - All-Knowing Jipan",
    language: "EN",
    uploaded: new Date("2022-10-17T03:24:00"),
    translation_groups: ["Bilibili Comics"],
    isOfficial: true,
  },
  {
    title: "Sounds Like Roses",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Vol.1 Ch. 5",
    language: "EN",
    uploaded: new Date("2022-10-17T03:24:00"),
    translation_groups: ["Wisteria Villosa"],
    isOfficial: false,
  },
  {
    title: "Kanojo mo Kanojo",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Ch. 114 - Encontro com a Shino, Parte 1",
    language: "BR",
    uploaded: new Date("2022-10-17T03:24:00"),
    translation_groups: ["Bakayarou Scanlator", "Albus Cattus Scanlations"],
    isOfficial: false,
  },
];

const recentlyAdded: RecentManga[] = [
  {
    title: "Junketsu no Maria Exhibition",
    language: "EN",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Fairy Tail",
    language: "BR",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Ao Ashi",
    language: "IT",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Ming Dynasty's Prodigal Son",
    language: "ID",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Sounds Like Roses",
    language: "EN",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Kanojo mo Kanojo",
    language: "BR",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
];

const seasonalData: SeasonalManga[] = [
  {
    image:
      "https://mangadex.org/covers/39b4e02a-f2f2-4ff0-bf2c-f87cf54ab178/60dd267c-beff-4099-8ad4-56ee6c0cfe87.jpg.256.jpg",
    title:
      "Tensei Kizoku no Isekai Boukenroku ~Jichou wo Shiranai Kamigami no Shito~",
    description:
      "Shiina Kazuya, our protagonist who got killed by a stranger when he tried to protect his childhood friend and little sister, reincarnated into Cain Von Silford as the third son in the world of sword and magic.  \nCain grew up being surrounded by Gods who don’t know self-restraint, the upper noble and the girls who are swayed around him.  \nBeing given so much protection from the gods, he overcame any obstacle (aka Flags) while hiding his unbelievable status. The noble path fantasy story of a young boy who is wicked and clumsy from time to time.",
    id: "39b4e02a-f2f2-4ff0-bf2c-f87cf54ab178",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/37838287-3fe9-443d-9d22-eafc1089140e/84212ced-bd71-47ba-8dd7-ca1a7407654b.jpg.256.jpg",
    title:
      "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru ~Level Up wa Jinsei wo Kaeta~",
    description:
      "Since a young child, Tenjou Yuuya was continuously bullied.\n\nHe is staying in his beloved grandfather's home while he goes to school and, as usual, he receives a harsh bullying, and takes an extended absence from school in order to have some time to heal his wounds.\n\nWhile on this long time of absence, he takes the opportunity to clean his grandfather's house and finds a room he never had seen before. Due to this being where his grandfather kept many different objects that he gathered from his travels around the world, it needed tidying! While Tenjou was arranging the objects, he found a door, yet it didn't seem to go anywhere since it was standing upright and not attached to any wall.\n\nOut of curiosity, Tenjou opens this door, and what he found on the other side is…",
    id: "37838287-3fe9-443d-9d22-eafc1089140e",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/30f3ac69-21b6-45ad-a110-d011b7aaadaa/e05c4d07-8a31-48ce-a6fa-220bc1bb8585.jpg.256.jpg",
    title: "Tonikaku Kawaii",
    description:
      'Desribed as a story full of "love" and "dreams", Tonikaku Kawaii follows a protagonist whose name is written with the characters for "Hoshizora" ("Starry Sky" in Japanese), but whose name is pronounced as "Nasa". On the day of his high school entrance exams, Nasa encounters a beautiful girl. For Nasa, it feels like destiny is finally calling out to him that he will have a girl friend, but…\n\nNote: Volume 15 and 16\'s numberings are correct, as this is how they are in the original.',
    id: "30f3ac69-21b6-45ad-a110-d011b7aaadaa",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/789642f8-ca89-4e4e-8f7b-eee4d17ea08b/60530e72-f76f-45d5-b6f9-f95e05058fc3.png.256.jpg",
    title: "Kimetsu no Yaiba",
    description:
      "Since ancient times, rumors have abounded of man-eating demons lurking in the woods. Because of this, the local townsfolk never venture outside at night. Legend has it that a demon slayer also roams the night, hunting down these bloodthirsty demons.  \r\nEver since the death of his father, Tanjirou has taken it upon himself to support his mother and five siblings. Although their lives may be hardened by tragedy, they've found happiness. But that ephemeral warmth is shattered one day when Tanjirou finds his family slaughtered and the lone survivor, his sister Nezuko, turned into a demon. Adding to this sorrow, a demon hunter named Tomioka Giyuu arrived and was about to finish Nezuko off, but to his surprise she and Tanjiro started to protect each other. Seeing this oddity and Tanjiro's promising fighting skills, Giyuu decides to send them to his old mentor to be trained.  \r\nSo begins Tanjiro's life as a demon hunter, bound on a quest to cure his sister and find the one who murdered his entire family.  \r\n  \r\nMangaPlus: <https://mangaplus.shueisha.co.jp/titles/100009>",
    id: "789642f8-ca89-4e4e-8f7b-eee4d17ea08b",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/3df1a9a3-a1be-47a3-9e90-9b3e55b1d0ac/47efcd1a-537a-4772-9000-7e0977535750.jpg.256.jpg",
    title: "Boku no Kokoro no Yabai Yatsu",
    description:
      "A ‘fearsome psycho-thriller’ centering on the ‘dark side of adolescence’.\nFollowing Ichikawa Kyoutarou, a teenage boy belonging to the very bottom caste of his school, this work details his troubled interactions with a certain classmate, and his attempt to hide murderous impulses that find themselves in the darkest recesses of his soul.\n\nIn reality, though, it's a sweet youth rom-com between a messed up boy and a bright, if somewhat strange, beautiful girl. Brought to you by the zany mind behind [*Mitsudomoe*](https://mangadex.org/title/5499) and [*Rororro!*](https://mangadex.org/title/22996), [Sakurai Norio](https://mangadex.org/author/98e23fcc-5d55-473d-abd4-b082ae41c8c1/sakurai-norio).\n\n- Won the Tsugi ni Kuru Web Manga 2020 Award.\n- Was nominated for the 2020 and 2021 Manga Taisho Award.\n- Won the top prize of 2021 Tsutaya Comic Awards\n\n---\n\n**Links for bonus content:**\n- High res extra comics and art are often uploaded to [the author's twitter](https://twitter.com/i/moments/1123142178996228096)\n- Higher resolution versions of comics and art are uploaded usually at a delay to [the author's Pixiv](https://www.pixiv.net/en/users/35504719)\n- Less often exclusive art is posted to [the series' official account](https://twitter.com/boku__yaba/status/1060017522303414273)  \n- [Live action PV](https://youtu.be/9Y-lWP_Cctg)\n\n- [Official Twitter for the anime](https://twitter.com/bokuyaba_anime)",
    id: "3df1a9a3-a1be-47a3-9e90-9b3e55b1d0ac",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/d7d6829b-ceab-4346-a033-22387aeff297/d7a78045-bc4c-44d9-b191-b0375ccba651.jpg.256.jpg",
    title: "Isekai Shoukan wa Nidome Desu",
    description:
      'There was once a man who was summoned to another world, and saved it. Of course, he became too popular there, and turned into an isekai-normie.   \nHowever, that man fell into a "trap", and was forcibly returned to his original world. Moreover, he had to start over as a baby! This is the story of the way-too-fantastic ex-hero who lived as a gloomy high-schooler as he gets summoned once again to that other world in a very unexpected development!',
    id: "d7d6829b-ceab-4346-a033-22387aeff297",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/296cbc31-af1a-4b5b-a34b-fee2b4cad542/1c8f474f-6086-4b5c-9093-7e26c9b8fce1.jpg.256.jpg",
    title: "[Oshi no Ko]",
    description:
      "The story begins with a beautiful girl, her perfectly fake smile, and the people who love her selfishly for it.  \n  \nWhat transpires behind the scenes of the glittering showbiz industry? How far would you go for the sake of your beloved idol? What would you do if you found out reincarnation was real? The star of the show is Aquamarine Hoshino and the stage is but a mere facade. Will he manage to reach the climax before the world of glamour swallows him whole?",
    id: "296cbc31-af1a-4b5b-a34b-fee2b4cad542",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/39e55355-dfb4-44e9-bd0b-df1fc3a0e33e/c6933fbb-e69b-492e-b3f9-ec722d7dc8ff.jpg.256.jpg",
    title: "The Reason Why Raeliana Ended Up at the Duke's Mansion",
    description:
      "Poisoned to death by her own betrothed?! Eunha didn’t wake up in a novel’s story just to get killed off again as an unfortunate extra! To change her story she needs a cover… 6 months pretending to be the fake fiancée of the novel's male protagonist, Duke Noah Wynknight. But will this cold-hearted, angel-faced demon of a man really help her avoid another ill-fated ending?!",
    id: "39e55355-dfb4-44e9-bd0b-df1fc3a0e33e",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/cfc3d743-bd89-48e2-991f-63e680cc4edf/275c97c9-a612-4311-a30c-7194f44a287d.jpg.256.jpg",
    title: "Dr. Stone",
    description:
      "Imagine waking to a world where every last human has been mysteriously turned to stone …  \nOne fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he's not alone! His science-loving friend Senku's been up and running for a few months and he's got a grand plan in mind—to kickstart civilization with the power of science!\n\n---\nOfficial Release:\n- English American release by Viz Media (2018)\n- French release by Glénat (2018)\n- German release by Carlsen Manga (2019)\n- Indonesian release by Elex Media Komputindo (2022)\n- Italian release by Star Comics (2018)\n- Vietnamese release by NXB Kim Đồng (2021)",
    id: "cfc3d743-bd89-48e2-991f-63e680cc4edf",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/0e017a08-835a-4cbe-ba63-576d5010a5a0/8486c352-fc4c-46a6-90e1-a5f48762118e.jpg.256.jpg",
    title: "Kuma Kuma Kuma Bear",
    description:
      "Yuna, a 15-year-old girl, started playing the world's first VRMMO. She has earned billions of yen in stocks and confines herself in her house playing the game without going to school. Today, a major update has arrived and she obtained a non-transferable rare bear outfit. But the equipment is so embarrassing that she can't wear it even in the game. Furthermore, when she answers the survey regarding the new update and relaunches the game, she appears in an unknown forest in the bear outfit. Where is this? Email from God? A different world? If she wears the bear outfit she's a cheat, if she takes it off she's a normal girl. Her adventure starts just like that. Yuna began doing whatever she wanted.",
    id: "0e017a08-835a-4cbe-ba63-576d5010a5a0",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/643561e6-5c27-4382-95d3-8e84894a3fb6/9a7c240b-6fd3-470d-9680-cde371cbc13d.jpg.256.jpg",
    title: "Yamada-kun to Lv999 no Koi wo Suru",
    description:
      "Her boyfriend was stolen through an online game! During this heartbreak, she logged in to the game and met…?!",
    id: "643561e6-5c27-4382-95d3-8e84894a3fb6",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/99af94f5-04c2-424b-8438-0c8386b0ec5f/dbbdb0a5-ff56-464f-890e-d6c83a8b8b27.jpg.256.jpg",
    title: "Kimi wa Houkago Insomnia",
    description:
      "Nakami is a studious but cranky and antisocial high schooler who gets on his classmates' nerves. However, his bad attitude comes from the fact that he has a sleeping disorder, and frequently spends nights on end without a single minute of sleep. During the preparations for the school festival, he is begrudgingly sent to the school's astronomy observatory to gather cardboard boxes, a place which is said to be haunted by the dire happenings of the now defunct Astronomy Club. He finds the isolated place a haven ripe for him to sleep, but while rummaging around, he stumbles upon his classmate Magari Isaki sleeping inside a toppled-over locker.   \n  \nIsaki, unlike him, is a personable and popular girl at class, but who also hides her own problems with insomnia. Looking for a middle ground, they find that there's comfort and ease in sleeping together, so they resort to make the observatory their own private cubby to sleep… Have they found the comfort they're looking for?",
    id: "99af94f5-04c2-424b-8438-0c8386b0ec5f",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/8bc61f6d-5b33-4c6b-bfdc-589daa4a4d78/0a938c1d-c6fc-4a21-aeaa-83f6b66c9182.jpg.256.jpg",
    title: "Isekai wa Smartphone to Tomo ni",
    description:
      'After a freak accident involving some lightning winds up zapping him dead, 15-year-old Mochizuki Touya wakes up to find himself face-to-face with God. "I am afraid to say that I have made a bit of a blunder" laments the old coot. But all is not lost! God says that he can reincarnate Touya into a world of fantasy, and as a bonus, he gets to bring his smartphone along with! So begins Touya\'s adventure in a new, anachronistic pseudo-medieval world. Friends! Laughs! Tears! Inexplicable Deus ex Machina! He sets off on a journey full of wonder as he absentmindedly travels from place to place, following whatever goal catches his fancy. The curtains lift on an epic tale of swords, sorcery, and smartphone apps!',
    id: "8bc61f6d-5b33-4c6b-bfdc-589daa4a4d78",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/195023bf-cf9a-4772-94ef-09dd6eddea84/99f342b5-b5f0-4891-b2b6-31de8720826c.jpg.256.jpg",
    title: "The Ancient Magus' Bride",
    description:
      "With her mother dead and father long gone, Chise Hatori has spent her childhood being passed unwanted from relative to relative, until she finally makes her unfortunate way to a strange and improbable auction block.\n\nOffered as a “Slay Vega” to the highest bidder, Chise is purchased by the (literally) boneheaded Elias Ainsworth, who promises to take her on as his apprentice.\n\nElias is a mage, and his world is one of dragons and faeries - but before Chise can begin to get accustomed to all of this, Elias drops another bombshell. Apparently Chise isn't just intended to be his apprentice - she will also be his bride.",
    id: "195023bf-cf9a-4772-94ef-09dd6eddea84",
    language: "ID",
  },
  {
    image:
      "https://mangadex.org/covers/d0c3d778-d28d-4e3a-be75-d92149438fff/f347ff58-1700-4dac-b52f-c63830eebc91.jpg.256.jpg",
    title: "Yuusha ga Shinda!",
    description:
      "Three years ago, the Hero Shion sealed the Hell Gate. The Seal has been weakening ever since, sporadically letting monsters through. After a big group of monsters entered the country through said Hell Gate, Heroes were needed again.  \n  \nTouka Scott, a radish farmer and trapper in the southern town of Cheza, lives a peaceful life with his beautiful childhood friend and neighbor Yuna, but he is nevertheless prepared for sudden monster attacks. He built himself a hidden pit-trap with bamboo spikes to lure unsuspecting monsters if they ever try to attack the village. A monster attacks and Touka fails to lure it into the trap with freshly roasted bacon. Thankfully, the local Hero saves the village from the monster in the nick of time. The hungry Hero tries to grab a bite of bacon after vanquishing the monster, only to stumble into Touka's pit-trap and die.  \n  \nAfter causing the Shion's death, Touka is reluctantly forced to take matters into his own hands to protect the region from attacking monsters… by occupying the late hero's body!   \n  \nAccompanied by Yuna and the necromancer girl Anri (who forced him into Shion's body), together they set on adventure… and to save face.",
    id: "d0c3d778-d28d-4e3a-be75-d92149438fff",
    language: "ID",
  },
];

export { latestUpdates, recentlyAdded, seasonalData };
