import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 36,
      titulo: "Sousou no Frieren",
      tipo: "anime",
      href: "/654d4b28a45dd1106d007411",
      url: "/img/poster/sousou no frieren - poster.jpg",
      año: "2023",
      capitulos: "24/28"
  },{
      id: 35,
      titulo: "Ragna Crimson",
      tipo: "anime",
      href: "/653c444699871aa4e127ae5c",
      url: "/img/poster/ragna crimson - poster.jpg",
      año: "2023",
      capitulos: "18/24"
  },{
      id: 34,
      titulo: "Jujutsu Kaisen S2",
      tipo: "anime",
      href: "/64b05412562efda8c077b78f",
      url: "/img/poster/jkaisens2 - poster.jpg",
      año: "2023",
      capitulos: "23/23"
  },{
      id: 33,
      titulo: "Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su",
      tipo: "anime",
      href: "/652b0a5d8d6e45d6108cb8ef",
      url: "/img/poster/shangrila - poster.jpg",
      año: "2023",
      capitulos: "18/25"
  },{
      id: 32,
      titulo: "Solo Leveling",
      tipo: "anime",
      href: "/65ad9a8e2ee1f261eb618584",
      url: "/img/poster/sololeveling - poster.jpg",
      año: "2024",
      capitulos: "07/12"
  },{
      id: 31,
      titulo: "Classroom of the Elite III",
      tipo: "anime",
      href: "/65b30b770ecbfa1255690a54",
      url: "/img/poster/classroom s3 - poster.jpg",
      año: "2024",
      capitulos: "08/13"
  },{
      id: 37,
      titulo: "Sokushi Cheat ga Saikyou sugite, Isekai ...",
      tipo: "anime",
      href: "/65cc5ae6bcafa61cb5f8a78b",
      url: "/img/poster/sokushi cheat - poster.jpg",
      año: "2024",
      capitulos: "08/12"
  },{
      id: 30,
      titulo: "Dungeon Meshi",
      tipo: "anime",
      href: "/65b31a3bc2aff4446ab262c7",
      url: "/img/poster/dungeon meshi - poster.jpg",
      año: "2024",
      capitulos: "08/24"
  },{
      id: 38,
      titulo: "Mato Seihei no Slave",
      tipo: "anime",
      href: "/65bbec30a76916ead91072f6",
      url: "/img/poster/mato slave - poster.jpg",
      año: "2024",
      capitulos: "08/12"
  },{
      id: 29,
      titulo: "Mashle: Shinkakusha Kouho Senbatsu Shiken-hen",
      tipo: "anime",
      href: "/65aedac9435545c9110a98aa",
      url: "/img/poster/mashle s2 - poster.jpg",
      año: "2024",
      capitulos: "07/12"
  },{
      id: 28,
      titulo: "Rurouni Kenshin: Meiji Kenkaku Romantan (2023)",
      tipo: "anime",
      href: "/64b1c621e679d70b2740a569",
      url: "/img/poster/rurouni kenshin 23 - poster.jpg",
      año: "2023",
      capitulos: "24/24"
  },{
      id: 27,
      titulo: "Under Ninja",
      tipo: "anime",
      href: "/653a9f0cedccae03e06c084f",
      url: "/img/poster/under ninja - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 26,
      titulo: "Hametsu no Oukoku",
      tipo: "anime",
      href: "/653aa92e79c1d67422c40330",
      url: "/img/poster/hametsu no oukoku - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 25,
      titulo: "Helck",
      tipo: "anime",
      href: "/64bc48468e675445a6c43a15",
      url: "/img/poster/helck - poster.jpg",
      año: "2023",
      capitulos: "24/24"
  },{
      id: 24,
      titulo: "SPY x FAMILY S2",
      tipo: "anime",
      href: "/6514a4788fa8ca35167d0163",
      url: "/img/poster/spy x family sea2 - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 23,
      titulo: "Boushoku no Berserk",
      tipo: "anime",
      href: "/65398739ddd990c579a17683",
      url: "/img/poster/bushoukonberserk - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 22,
      titulo: "Undead Unluck",
      tipo: "anime",
      href: "/654d600869f373e54756e2e1",
      url: "/img/poster/undead unluck - poster.jpg",
      año: "2023",
      capitulos: "13/24"
  },{
      id: 21,
      titulo: "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto",
      tipo: "anime",
      href: "/64de682efbf3f8c16ab3fc02",
      url: "/img/poster/zom100 - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 20,
      titulo: "Mushoku Tensei II: Isekai Ittara Honki Dasu",
      tipo: "anime",
      href: "/64aef2c253680f205a2f6705",
      url: "/img/poster/mushokus2 - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 19,
      titulo: "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
      tipo: "anime",
      href: "/64bec2f6381eebe43319e6e1",
      url: "/img/poster/bleach23pt2 - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 18,
      titulo: "Masamune-kun no Revenge R",
      tipo: "anime",
      href: "/64bee6d5b399be3b7c2d8ebc",
      url: "/img/poster/masamune revenge r - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 17,
      titulo: "Dark Gathering",
      tipo: "anime",
      href: "/64b9bc81f92ef68b32c6c10b",
      url: "/img/poster/dark gathering - poster.jpg",
      año: "2023",
      capitulos: "16/25"
  },{
      id: 16,
      titulo: "Undead Girl Murder Farce",
      tipo: "anime",
      href: "/66500c38785436f0d2260d6c6",
      url: "/img/poster/undead girl - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 15,
      titulo: "Liar Liar",
      tipo: "anime",
      href: "/64aee69e55a9dadb5f35494d",
      url: "/img/poster/liar liar - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 14,
      titulo: "Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou",
      tipo: "anime",
      href: "/64b03c5e562efda8c077b786",
      url: "/img/poster/jidouhanbaiki - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 13,
      titulo: "Lv1 Maou to One Room Yuusha",
      tipo: "anime",
      href: "/64b9c4382ea2ad7ef7a65436",
      url: "/img/poster/lv1maou - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 12,
      titulo: "Level 1 dakedo Unique Skill de Saikyou desu",
      tipo: "anime",
      href: "/64de6dc22b7b492a8cf3eee6",
      url: "/img/poster/level1skill - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 11,
      titulo: "Suki na Ko ga Megane wo Wasureta",
      tipo: "anime",
      href: "/64b9c438",
      url: "/img/poster/sukina - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 10,
      titulo: "Eiyuu Kyoushitsu",
      tipo: "anime",
      href: "/64b9c438",
      url: "/img/poster/Eiyuu kyoushitsu - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 9,
      titulo: "Tengoku Daimakyou",
      tipo: "anime",
      href: "/6480e080feeec452e3a48700",
      url: "/img/poster/tengoku daimakyou - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 8,
      titulo: "Dr. Stone: New World (S3)",
      tipo: "anime",
      href: "/64483ece6b0fe7a2afe7c98b",
      url: "/img/poster/drstones3 - poster.jpg",
      año: "2023",
      capitulos: "11/11"
  },{
      id: 7,
      titulo: "Kono Subarashii Sekai ni Bakuen wo!",
      tipo: "anime",
      href: "/6489f779bac10d7e892d9c53",
      url: "/img/poster/konosuba explosion - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 6,
      titulo: "Oshi no Ko",
      tipo: "anime",
      href: "/646299c6999cb8b0e1a237dd",
      url: "/img/poster/oshinoko - poster.jpg",
      año: "2023",
      capitulos: "11/11"
  },{
      id: 5,
      titulo: "Vinland Saga S2",
      tipo: "anime",
      href: "/63c87df5dc152840055f80a2",
      url: "/img/poster/vinland saga s2 - poster.jpg",
      año: "2023",
      capitulos: "24/24"
  },{
      id: 4,
      titulo: "Kimetsu no Yaiba: Katanakaji no Sato-hen (S3)",
      tipo: "anime",
      href: "/6451905df4e9edd1d8c395da",
      url: "/img/poster/kimetsunys3 - poster.jpg",
      año: "2023",
      capitulos: "11/11"
  },{
      id: 3,
      titulo: "Jigokuraku",
      tipo: "anime",
      href: "/6451792645ead47cebbd86d3",
      url: "/img/poster/jigokuraku - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 2,
      titulo: "My Home Hero",
      tipo: "anime",
      href: "/64481b585ed3f8240cb19afa",
      url: "/img/poster/myhomehero - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 1,
      titulo: "Mashle",
      tipo: "anime",
      href: "/644808cbbcc9fe8b2b06cca9",
      url: "/img/poster/mashle - poster.jpg",
      año: "2023",
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
              <Image className="card-img-top crop2 " src={menu.url} width={600} height={400} alt="1"></Image>
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
