import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 38,
      titulo: "Solo Leveling S2: Arise from the Shadow",
      tipo: "invierno",
      href: "/animes/25Winter/SoloLevelingS2",
      url: "/img/poster/solo s2 - poster.jpg",
      año: "2025",
      capitulos: "07/13"
  },{
      id: 39,
      titulo: "Sakamoto Days",
      tipo: "invierno",
      href: "/animes/25Winter/SakamotoDays",
      url: "/img/poster/sakamoto days - poster.jpg",
      año: "2025",
      capitulos: "07/11"
  },{
      id: 4,
      titulo: "Fairy Tail: 100-nen Quest",
      tipo: "verano",
      href: "/animes/24Summer/FairyTail100-nenQuest",
      url: "/img/poster/fairy tail 100 - poster.jpg",
      año: "2024",
      capitulos: "19/25"
  },{
      id: 43,
      titulo: "Blue Lock S2 - Vs. U-20 Japan",
      tipo: "otoño",
      href: "/animes/24Fall/BlueLockS2",
      url: "/img/poster/blue lock s2 - poster.jpg",
      año: "2024",
      capitulos: "07/14"
  },{
      id: 42,
      titulo: "Dandadan",
      tipo: "otoño",
      href: "/animes/24Fall/Dandadan",
      url: "/img/poster/Dandadan - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 41,
      titulo: "Dragon Ball Daima",
      tipo: "otoño",
      href: "/animes/24Fall/DragonBallDaima",
      url: "/img/poster/dragonballdaima - poster.jpg",
      año: "2024",
      capitulos: "18/20"
  },{
      id: 1,
      titulo: "Shikanoko Nokonoko Koshitantan",
      tipo: "verano",
      href: "/animes/66b69067144b4cf0c8a03d05",
      url: "/img/poster/shikanoko nk- poster.jpg",
      año: "2024",
      capitulos: "08/??"
  },{
      id: 2,
      titulo: "Kami no Tou: Ouji no Kikan",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/kami no tou s2 - poster.jpg",
      año: "2024",
      capitulos: "08/??"
  },{
      id: 3,
      titulo: '"Oshi no Ko" S2',
      tipo: "verano",
      href: "/animes/66996aa895d49cca4f6bc50a",
      url: "/img/poster/oshinoko s2 - poster.jpg",
      año: "2024",
      capitulos: "08/13"
  },{
      id: 5,
      titulo: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/tokidoki bosotto-russia - poster.jpg",
      año: "2024",
      capitulos: "06/12"
  },{
      id: 6,
      titulo: "Isekai Suicide Squad",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/isekai suisicedesquad - poster.jpg",
      año: "2024",
      capitulos: "09/10"
  },{
      id: 7,
      titulo: "Tsue to Tsurugi no Wistoria",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/tsue tsurugi wistoria - poster.jpg",
      año: "2024",
      capitulos: "04/??"
  },{
      id: 8,
      titulo: "Gimai Seikatsu",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/gimai seikatsu - poster.jpg",
      año: "2024",
      capitulos: "05/12"
  },{
      id: 9,
      titulo: "Isekai Shikkaku",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/isekai shikkaku - poster.jpg",
      año: "2024",
      capitulos: "05/12"
  },{
      id: 10,
      titulo: "Boku no Tsuma wa Kanjou ga Nai",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/boku tsuma kanjou ga nai - poster.jpg",
      año: "2024",
      capitulos: "06/12"
  },{
      id: 11,
      titulo: "Giji Harem",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/giji harem - poster.jpg",
      año: "2024",
      capitulos: "06/12"
  },{
      id: 12,
      titulo: "Make Heroine ga Oosugiru!",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/make heroine oosugiru - poster.jpg",
      año: "2024",
      capitulos: "05/12"
  },{
      id: 13,
      titulo: 'Hazurewaku no "Joutai Ijou Skill" de Saikyou ni Natta Ore ga Subete wo Juurin suru made',
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/joutai ijou skill - poster.jpg",
      año: "2024",
      capitulos: "05/12"
  },{
      id: 14,
      titulo: "2.5-jigen no Ririsa",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/2.5 jigen ririsa - poster.jpg",
      año: "2024",
      capitulos: "05/24"
  },{
      id: 15,
      titulo: 'Ore wa Subete wo "Parry" suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai',
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/ore wa subete parry - poster.jpg",
      año: "2024",
      capitulos: "05/12"
  },{
      id: 16,
      titulo: "Maougun Saikyou no Majutsushi wa Ningen datta",
      tipo: "verano",
      href: "/animes/66b325e032be917ea1bab635",
      url: "/img/poster/maougun saikyou no majutsushi - poster.jpg",
      año: "2024",
      capitulos: "09/??"
  },{
      id: 17,
      titulo: "Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru.",
      tipo: "verano",
      href: "/animes/66ad9f3fa9f61690ae859fc3",
      url: "/img/poster/shinmaiossan boukensha - poster.jpg",
      año: "2024",
      capitulos: "08/12"
  },{
      id: 18,
      titulo: "NieR:Automata Ver1.1a Part 2",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/nierAutomata ver1-1a pt2 - poster.jpg",
      año: "2024",
      capitulos: "06/12"
  },{
      id: 19,
      titulo: "Nige Jouzu no Wakagimi",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/nige jouzu no wakagimi - poster.jpg",
      año: "2024",
      capitulos: "06/12"
  },{
      id: 20,
      titulo: "Shoushimin Series",
      tipo: "verano",
      href: "/animes/",
      url: "/img/poster/shoushimin series - poster.jpg",
      año: "2024",
      capitulos: "06/10"
  },{
      id: 25,
      titulo: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
      tipo: "primavera",
      href: "/animes/",
      url: "/img/poster/mushokus2 part2 - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 26,
      titulo: "Dungeon Meshi",
      tipo: "anime",
      href: "/animes/65b31a3bc2aff4446ab262c7",
      url: "/img/poster/dungeon meshi - poster.jpg",
      año: "2024",
      capitulos: "24/24"
  },{
      id: 27,
      titulo: "Wind Breaker",
      tipo: "primavera",
      href: "/animes/66381e44f1086b447b9054d6",
      url: "/img/poster/wind breaker - poster.jpg",
      año: "2024",
      capitulos: "13/13"
  },{
      id: 28,
      titulo: "Kaiju No. 8",
      tipo: "primavera",
      href: "/animes/6645853fab8f0d365431b30e",
      url: "/img/poster/kaiju n8 - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 29,
      titulo: "Kono Subarashii Sekai ni Shukufuku wo! 3",
      tipo: "primavera",
      href: "/animes/6627dd1bdc46b38d04ec1eaf",
      url: "/img/poster/konosuba s3 - poster.jpg",
      año: "2024",
      capitulos: "11/11"
  },{
      id: 30,
      titulo: "Sentai Daishikkaku",
      tipo: "primavera",
      href: "/animes/",
      url: "/img/poster/sentai daishikkaku - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 31,
      titulo: "Re:Monster",
      tipo: "primavera",
      href: "/animes/66373898f106c96a5dfb0b31",
      url: "/img/poster/Remonster - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 32,
      titulo: "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu",
      tipo: "primavera",
      href: "/animes/6691a07e3f25a02862a6afeb",
      url: "/img/poster/tensei shitara dainana ouji - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 33,
      titulo: "Sousou no Frieren",
      tipo: "otoño",
      href: "/animes/654d4b28a45dd1106d007411",
      url: "/img/poster/sousou no frieren - poster.jpg",
      año: "2023",
      capitulos: "28/28"
  },{
      id: 34,
      titulo: "Ragna Crimson",
      tipo: "otoño",
      href: "/animes/653c444699871aa4e127ae5c",
      url: "/img/poster/ragna crimson - poster.jpg",
      año: "2023",
      capitulos: "22/24"
  },{
      id: 35,
      titulo: "Jujutsu Kaisen S2",
      tipo: "verano",
      href: "/animes/64b05412562efda8c077b78f",
      url: "/img/poster/jkaisens2 - poster.jpg",
      año: "2023",
      capitulos: "23/23"
  },{
      id: 36,
      titulo: "Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su",
      tipo: "otoño",
      href: "/animes/652b0a5d8d6e45d6108cb8ef",
      url: "/img/poster/shangrila - poster.jpg",
      año: "2023",
      capitulos: "25/25"
  },{
      id: 37,
      titulo: "Solo Leveling",
      tipo: "invierno",
      href: "/animes/65ad9a8e2ee1f261eb618584",
      url: "/img/poster/sololeveling - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  }
];

const Homecard = () => {
  return(
      <div className="row" >
      {MENU_LIST.map((menu, idx) => (
        <Link href={menu.href} key={menu.id}>
        <div className="col-md-3 col-sm-3" >
            <div className="card noborder" >
              <Image className="card-img-top crop2 " src={menu.url} width={600} height={450} alt="1"></Image>
              <div className="card-body">
                <h5 className="card-title">{menu.titulo} - {menu.capitulos}</h5>
                <p className="card-text">{menu.tipo} - {menu.año}</p>
              </div>
            </div>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Homecard;
