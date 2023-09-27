import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 35,
      titulo: "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto",
      tipo: "anime",
      href: "/64de682efbf3f8c16ab3fc02",
      url: "/img/poster/zom100 - poster.jpg",
      año: "2023",
      capitulos: "09/12"
  },{
      id: 34,
      titulo: "Jujutsu Kaisen S2",
      tipo: "anime",
      href: "/64b05412562efda8c077b78f",
      url: "/img/poster/jkaisens2 - poster.jpg",
      año: "2023",
      capitulos: "10/23"
  },{
      id: 33,
      titulo: "Mushoku Tensei II: Isekai Ittara Honki Dasu",
      tipo: "anime",
      href: "/64aef2c253680f205a2f6705",
      url: "/img/poster/mushokus2 - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 32,
      titulo: "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
      tipo: "anime",
      href: "/64bec2f6381eebe43319e6e1",
      url: "/img/poster/bleach23pt2 - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 31,
      titulo: "Masamune-kun no Revenge R",
      tipo: "anime",
      href: "/64bee6d5b399be3b7c2d8ebc",
      url: "/img/poster/masamune revenge r - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 30,
      titulo: "Rurouni Kenshin: Meiji Kenkaku Romantan (2023)",
      tipo: "anime",
      href: "/64b1c621e679d70b2740a569",
      url: "/img/poster/rurouni kenshin 23 - poster.jpg",
      año: "2023",
      capitulos: "13/24"
  },{
      id: 29,
      titulo: "Dark Gathering",
      tipo: "anime",
      href: "/64b9bc81f92ef68b32c6c10b",
      url: "/img/poster/dark gathering - poster.jpg",
      año: "2023",
      capitulos: "13/25"
  },{
      id: 36,
      titulo: "Undead Girl Murder Farce",
      tipo: "anime",
      href: "/66500c38785436f0d2260d6c6",
      url: "/img/poster/undead girl - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 28,
      titulo: "Liar Liar",
      tipo: "anime",
      href: "/64aee69e55a9dadb5f35494d",
      url: "/img/poster/liar liar - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 27,
      titulo: "Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou",
      tipo: "anime",
      href: "/64b03c5e562efda8c077b786",
      url: "/img/poster/jidouhanbaiki - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 26,
      titulo: "Helck",
      tipo: "anime",
      href: "/64bc48468e675445a6c43a15",
      url: "/img/poster/helck - poster.jpg",
      año: "2023",
      capitulos: "13/24"
  },{
      id: 25,
      titulo: "Lv1 Maou to One Room Yuusha",
      tipo: "anime",
      href: "/64b9c4382ea2ad7ef7a65436",
      url: "/img/poster/lv1maou - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 1,
      titulo: "Level 1 dakedo Unique Skill de Saikyou desu",
      tipo: "anime",
      href: "/64de6dc22b7b492a8cf3eee6",
      url: "/img/poster/level1skill - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 2,
      titulo: "Suki na Ko ga Megane wo Wasureta",
      tipo: "anime",
      href: "/64b9c438",
      url: "/img/poster/sukina - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 3,
      titulo: "Eiyuu Kyoushitsu",
      tipo: "anime",
      href: "/64b9c438",
      url: "/img/poster/Eiyuu kyoushitsu - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 24,
      titulo: "Tengoku Daimakyou",
      tipo: "anime",
      href: "/6480e080feeec452e3a48700",
      url: "/img/poster/tengoku daimakyou - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 23,
      titulo: "Dr. Stone: New World (S3)",
      tipo: "anime",
      href: "/64483ece6b0fe7a2afe7c98b",
      url: "/img/poster/drstones3 - poster.jpg",
      año: "2023",
      capitulos: "11/11"
  },{
      id: 22,
      titulo: "Kono Subarashii Sekai ni Bakuen wo!",
      tipo: "anime",
      href: "/6489f779bac10d7e892d9c53",
      url: "/img/poster/konosuba explosion - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 21,
      titulo: "Oshi no Ko",
      tipo: "anime",
      href: "/646299c6999cb8b0e1a237dd",
      url: "/img/poster/oshinoko - poster.jpg",
      año: "2023",
      capitulos: "11/11"
  },{
      id: 20,
      titulo: "Vinland Saga S2",
      tipo: "anime",
      href: "/63c87df5dc152840055f80a2",
      url: "/img/poster/vinland saga s2 - poster.jpg",
      año: "2023",
      capitulos: "24/24"
  },{
      id: 19,
      titulo: "Kimetsu no Yaiba: Katanakaji no Sato-hen (S3)",
      tipo: "anime",
      href: "/6451905df4e9edd1d8c395da",
      url: "/img/poster/kimetsunys3 - poster.jpg",
      año: "2023",
      capitulos: "11/11"
  },{
      id: 18,
      titulo: "Jigokuraku",
      tipo: "anime",
      href: "/6451792645ead47cebbd86d3",
      url: "/img/poster/jigokuraku - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 17,
      titulo: "My Home Hero",
      tipo: "anime",
      href: "/64481b585ed3f8240cb19afa",
      url: "/img/poster/myhomehero - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 16,
      titulo: "Mashle",
      tipo: "anime",
      href: "/644808cbbcc9fe8b2b06cca9",
      url: "/img/poster/mashle - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 15,
      titulo: "Dead Mount Death Play",
      tipo: "anime",
      href: "/6454107071efd4de565c3c6d",
      url: "/img/poster/deadmdeadplay - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 14,
      titulo: "Boku no Hero Academia S6",
      tipo: "anime",
      href: "/63444fee334cf9fb31f6222e",
      url: "/img/poster/boku no hero s6 - poster.jpg",
      año: "2022",
      capitulos: "25/25"
  },{
      id: 13,
      titulo: "Blue Lock",
      tipo: "anime",
      href: "/63460455ae0f72b4da36cc24",
      url: "/img/poster/blue lock - poster 2.jpg",
      año: "2022",
      capitulos: "24/24"
  },{
      id: 12,
      titulo: "Tondemo Skill de Isekai Hourou Meshi",
      tipo: "anime",
      href: "/63ec0a38b270c92f01bb1f14",
      url: "/img/poster/tondemo skills isekai - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 11,
      titulo: "Kage no Jitsuryokusha ni Naritakute!",
      tipo: "anime",
      href: "/635733fb3f6d348d451bf4a8",
      url: "/img/poster/kage no naritakute - poster.jpg",
      año: "2022",
      capitulos: "20/20"
  },{
      id: 10,
      titulo: "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu",
      tipo: "anime",
      href: "/63e2c925a4c9e13b3082fee0",
      url: "/img/poster/Ningen Fushin no Boukensha - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 9,
      titulo: "NieR: Automata Ver1.1a",
      tipo: "anime",
      href: "/63cef7c228d226a37d999324",
      url: "/img/poster/nier automata v1 - poster.jpg",
      año: "2023",
      capitulos: "08/24"
  },{
      id: 8,
      titulo: "Buddy Daddies",
      tipo: "anime",
      href: "/63cc6d18e447ff2a7c17c4cd",
      url: "/img/poster/buddy daddies - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 7,
      titulo: "High Card",
      tipo: "anime",
      href: "/63cf0b5a2053fbb3e956576d",
      url: "/img/poster/high card - poster.jpg",
      año: "2023",
      capitulos: "06/12"
  },{
      id: 6,
      titulo: "Tensei shitara Ken Deshita",
      tipo: "anime",
      href: "/63a378d5d467a7fc9e9d280e",
      url: "/img/poster/tensei skd - poster.jpg",
      año: "2022",
      capitulos: "12/12"
  },{
      id: 5,
      titulo: "Shinobi no Ittoki",
      tipo: "anime",
      href: "/635ac49b17919958e8ccb459",
      url: "/img/poster/shinobi no ittoki - poster.jpg",
      año: "2022",
      capitulos: "12/12"
  },{
      id: 4,
      titulo: "SPY x FAMILY Part 2",
      tipo: "anime",
      href: "/633b6161d381cf953bbf16a0",
      url: "/img/poster/spy x family s2 - poster.jpg",
      año: "2022",
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
