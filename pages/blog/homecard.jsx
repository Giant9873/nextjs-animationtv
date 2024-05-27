import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 24,
      titulo: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
      tipo: "primavera",
      href: "/animes/",
      url: "/img/poster/mushokus2 part2 - poster.jpg",
      año: "2024",
      capitulos: "05/12"
  },{
      id: 13,
      titulo: "Dungeon Meshi",
      tipo: "anime",
      href: "/animes/65b31a3bc2aff4446ab262c7",
      url: "/img/poster/dungeon meshi - poster.jpg",
      año: "2024",
      capitulos: "21/24"
  },{
      id: 23,
      titulo: "Wind Breaker",
      tipo: "primavera",
      href: "/animes/66381e44f1086b447b9054d6",
      url: "/img/poster/wind breaker - poster.jpg",
      año: "2024",
      capitulos: "07/13"
  },{
      id: 22,
      titulo: "Kaiju No. 8",
      tipo: "primavera",
      href: "/animes/6645853fab8f0d365431b30e",
      url: "/img/poster/kaiju n8 - poster.jpg",
      año: "2024",
      capitulos: "06/12"
  },{
      id: 21,
      titulo: "Kono Subarashii Sekai ni Shukufuku wo! 3",
      tipo: "primavera",
      href: "/animes/6627dd1bdc46b38d04ec1eaf",
      url: "/img/poster/konosuba s3 - poster.jpg",
      año: "2024",
      capitulos: "07/11"
  },{
      id: 25,
      titulo: "Sentai Daishikkaku",
      tipo: "primavera",
      href: "/animes/",
      url: "/img/poster/sentai daishikkaku - poster.jpg",
      año: "2024",
      capitulos: "03/12"
  },{
      id: 26,
      titulo: "Re:Monster",
      tipo: "primavera",
      href: "/animes/66373898f106c96a5dfb0b31",
      url: "/img/poster/Remonster - poster.jpg",
      año: "2024",
      capitulos: "08/12"
  },{
      id: 27,
      titulo: "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu",
      tipo: "primavera",
      href: "/animes/",
      url: "/img/poster/tensei shitara dainana ouji - poster.jpg",
      año: "2024",
      capitulos: "04/12"
  },{
      id: 20,
      titulo: "Sousou no Frieren",
      tipo: "otoño",
      href: "/animes/654d4b28a45dd1106d007411",
      url: "/img/poster/sousou no frieren - poster.jpg",
      año: "2023",
      capitulos: "28/28"
  },{
      id: 19,
      titulo: "Ragna Crimson",
      tipo: "otoño",
      href: "/animes/653c444699871aa4e127ae5c",
      url: "/img/poster/ragna crimson - poster.jpg",
      año: "2023",
      capitulos: "22/24"
  },{
      id: 18,
      titulo: "Jujutsu Kaisen S2",
      tipo: "verano",
      href: "/animes/64b05412562efda8c077b78f",
      url: "/img/poster/jkaisens2 - poster.jpg",
      año: "2023",
      capitulos: "23/23"
  },{
      id: 17,
      titulo: "Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su",
      tipo: "otoño",
      href: "/animes/652b0a5d8d6e45d6108cb8ef",
      url: "/img/poster/shangrila - poster.jpg",
      año: "2023",
      capitulos: "25/25"
  },{
      id: 16,
      titulo: "Solo Leveling",
      tipo: "invierno",
      href: "/animes/65ad9a8e2ee1f261eb618584",
      url: "/img/poster/sololeveling - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 15,
      titulo: "Classroom of the Elite III",
      tipo: "invierno",
      href: "/animes/65b30b770ecbfa1255690a54",
      url: "/img/poster/classroom s3 - poster.jpg",
      año: "2024",
      capitulos: "13/13"
  },{
      id: 14,
      titulo: "Sokushi Cheat ga Saikyou sugite, Isekai ...",
      tipo: "invierno",
      href: "/animes/65cc5ae6bcafa61cb5f8a78b",
      url: "/img/poster/sokushi cheat - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 12,
      titulo: "Mato Seihei no Slave",
      tipo: "invierno",
      href: "/animes/65bbec30a76916ead91072f6",
      url: "/img/poster/mato slave - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 11,
      titulo: "Mashle: Shinkakusha Kouho Senbatsu Shiken-hen",
      tipo: "invierno",
      href: "/animes/65aedac9435545c9110a98aa",
      url: "/img/poster/mashle s2 - poster.jpg",
      año: "2024",
      capitulos: "12/12"
  },{
      id: 10,
      titulo: "Rurouni Kenshin: Meiji Kenkaku Romantan (2023)",
      tipo: "anime",
      href: "/animes/64b1c621e679d70b2740a569",
      url: "/img/poster/rurouni kenshin 23 - poster.jpg",
      año: "2023",
      capitulos: "24/24"
  },{
      id: 9,
      titulo: "Under Ninja",
      tipo: "anime",
      href: "/animes/653a9f0cedccae03e06c084f",
      url: "/img/poster/under ninja - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 8,
      titulo: "Hametsu no Oukoku",
      tipo: "anime",
      href: "/653aa92e79c1d67422c40330",
      url: "/img/poster/hametsu no oukoku - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 7,
      titulo: "Helck",
      tipo: "anime",
      href: "/64bc48468e675445a6c43a15",
      url: "/img/poster/helck - poster.jpg",
      año: "2023",
      capitulos: "24/24"
  },{
      id: 6,
      titulo: "SPY x FAMILY S2",
      tipo: "anime",
      href: "/6514a4788fa8ca35167d0163",
      url: "/img/poster/spy x family sea2 - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 5,
      titulo: "Boushoku no Berserk",
      tipo: "anime",
      href: "/65398739ddd990c579a17683",
      url: "/img/poster/bushoukonberserk - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 4,
      titulo: "Undead Unluck",
      tipo: "anime",
      href: "/654d600869f373e54756e2e1",
      url: "/img/poster/undead unluck - poster.jpg",
      año: "2023",
      capitulos: "13/24"
  },{
      id: 3,
      titulo: "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto",
      tipo: "anime",
      href: "/64de682efbf3f8c16ab3fc02",
      url: "/img/poster/zom100 - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 2,
      titulo: "Mushoku Tensei II: Isekai Ittara Honki Dasu",
      tipo: "anime",
      href: "/64aef2c253680f205a2f6705",
      url: "/img/poster/mushokus2 - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 1,
      titulo: "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
      tipo: "anime",
      href: "/64bec2f6381eebe43319e6e1",
      url: "/img/poster/bleach23pt2 - poster.jpg",
      año: "2023",
      capitulos: "13/13"
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
