import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 28,
      titulo: "Dr. Stone: New World (S3)",
      tipo: "anime",
      href: "/64483ece6b0fe7a2afe7c98b",
      url: "/img/poster/drstones3 - poster.jpg",
      año: "2023",
      capitulos: "08/11"
  },{
      id: 27,
      titulo: "My Home Hero",
      tipo: "anime",
      href: "/64481b585ed3f8240cb19afa",
      url: "/img/poster/myhomehero - poster.jpg",
      año: "2023",
      capitulos: "09/12"
  },{
      id: 26,
      titulo: "Oshi no Ko",
      tipo: "anime",
      href: "/646299c6999cb8b0e1a237dd",
      url: "/img/poster/oshinoko - poster.jpg",
      año: "2023",
      capitulos: "08/11"
  },{
      id: 23,
      titulo: "Vinland Saga S2",
      tipo: "anime",
      href: "/63c87df5dc152840055f80a2",
      url: "/img/poster/vinland saga s2 - poster.jpg",
      año: "2023",
      capitulos: "21/24"
  },{
      id: 2,
      titulo: "Kimetsu no Yaiba: Katanakaji no Sato-hen (S3)",
      tipo: "anime",
      href: "/6451905df4e9edd1d8c395da",
      url: "/img/poster/kimetsunys3 - poster.jpg",
      año: "2023",
      capitulos: "08/11"
  },{
      id: 29,
      titulo: "Jigokuraku",
      tipo: "anime",
      href: "/6451792645ead47cebbd86d3",
      url: "/img/poster/jigokuraku - poster.jpg",
      año: "2023",
      capitulos: "08/13"
  },{
      id: 3,
      titulo: "Dead Mount Death Play",
      tipo: "anime",
      href: "/6454107071efd4de565c3c6d",
      url: "/img/poster/deadmdeadplay - poster.jpg",
      año: "2023",
      capitulos: "08/12"
  },{
      id: 5,
      titulo: "Mashle",
      tipo: "anime",
      href: "/644808cbbcc9fe8b2b06cca9",
      url: "/img/poster/mashle - poster.jpg",
      año: "2023",
      capitulos: "08/12"
  },{
      id: 13,
      titulo: "Boku no Hero Academia S6",
      tipo: "anime",
      href: "/63444fee334cf9fb31f6222e",
      url: "/img/poster/boku no hero s6 - poster.jpg",
      año: "2022",
      capitulos: "25/25"
  },{
      id: 15,
      titulo: "Blue Lock",
      tipo: "anime",
      href: "/63460455ae0f72b4da36cc24",
      url: "/img/poster/blue lock - poster 2.jpg",
      año: "2022",
      capitulos: "24/24"
  },{
      id: 25,
      titulo: "Tondemo Skill de Isekai Hourou Meshi",
      tipo: "anime",
      href: "/63ec0a38b270c92f01bb1f14",
      url: "/img/poster/tondemo skills isekai - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 17,
      titulo: "Kage no Jitsuryokusha ni Naritakute!",
      tipo: "anime",
      href: "/635733fb3f6d348d451bf4a8",
      url: "/img/poster/kage no naritakute - poster.jpg",
      año: "2022",
      capitulos: "20/20"
  },{
      id: 24,
      titulo: "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu",
      tipo: "anime",
      href: "/63e2c925a4c9e13b3082fee0",
      url: "/img/poster/Ningen Fushin no Boukensha - poster.jpg",
      año: "2023",
      capitulos: "12/12"
  },{
      id: 22,
      titulo: "NieR: Automata Ver1.1a",
      tipo: "anime",
      href: "/63cef7c228d226a37d999324",
      url: "/img/poster/nier automata v1 - poster.jpg",
      año: "2023",
      capitulos: "08/??"
  },{
      id: 21,
      titulo: "Buddy Daddies",
      tipo: "anime",
      href: "/63cc6d18e447ff2a7c17c4cd",
      url: "/img/poster/buddy daddies - poster.jpg",
      año: "2023",
      capitulos: "13/13"
  },{
      id: 20,
      titulo: "High Card",
      tipo: "anime",
      href: "/63cf0b5a2053fbb3e956576d",
      url: "/img/poster/high card - poster.jpg",
      año: "2023",
      capitulos: "06/12"
  },{
      id: 19,
      titulo: "Tensei shitara Ken Deshita",
      tipo: "anime",
      href: "/63a378d5d467a7fc9e9d280e",
      url: "/img/poster/tensei skd - poster.jpg",
      año: "2022",
      capitulos: "12/12"
  },{
      id: 18,
      titulo: "Shinobi no Ittoki",
      tipo: "anime",
      href: "/635ac49b17919958e8ccb459",
      url: "/img/poster/shinobi no ittoki - poster.jpg",
      año: "2022",
      capitulos: "12/12"
  },{
      id: 11,
      titulo: "SPY x FAMILY Part 2",
      tipo: "anime",
      href: "/633b6161d381cf953bbf16a0",
      url: "/img/poster/spy x family s2 - poster.jpg",
      año: "2022",
      capitulos: "13/13"
  },{
      id: 14,
      titulo: "Beast Tamer",
      tipo: "anime",
      href: "/6345db70ae0f72b4da36cbff",
      url: "/img/poster/beast tamer - poster.jpg",
      año: "2022",
      capitulos: "13/13"
  },{
      id: 1,
      titulo: "Tomodadadchi Game",
      tipo: "anime",
      href: "/637c4926c2c1b4ec00361e14",
      url: "/img/poster/tomadachi game - poster.jpg",
      año: "2022",
      capitulos: "12/12"
  },{
      id: 4,
      titulo: "Vermeil in Gold",
      tipo: "anime",
      href: "/6341bb6628f84e5af359301f",
      url: "/img/poster/vermeil in gold - poster.jpg",
      año: "2022",
      capitulos: "12/12"
  },{
      id: 12,
      titulo: "Mob Psycho 100 III",
      tipo: "anime",
      href: "/6341e1a528f84e5af3593027",
      url: "/img/poster/mob p 100 s3 - poster.jpg",
      año: "2022",
      capitulos: "12/12"
  },{
      id: 16,
      titulo: "Chainsaw Man",
      tipo: "anime",
      href: "/634624f8ae0f72b4da36cc2b",
      url: "/img/poster/chainsaw man - poster.jpg",
      año: "2022",
      capitulos: "12/12"
  },{
      id: 10,
      titulo: "Classroom of the Elite II",
      tipo: "anime",
      href: "/63336a5b35ff664c825d952e",
      url: "/img/poster/classroom s2 - poster.jpg",
      año: "2022",
      capitulos: "13/13"
  },{
      id: 9,
      titulo: "Overlord IV",
      tipo: "anime",
      href: "/6334a6d404ae9bd3a83ac935",
      url: "/img/poster/overlord s4 - poster.jpg",
      año: "2022",
      capitulos: "13/13"
  },{
      id: 7,
      titulo: "Lycoris Recoil",
      tipo: "anime",
      href: "/63352062cc5e3377d6a6a416",
      url: "/img/poster/lycoris recoil - poster.jpg",
      año: "2022",
      capitulos: "13/13"
  },{
      id: 6,
      titulo: "Engage Kiss",
      tipo: "anime",
      href: "/6335cc17cc5e3377d6a6a41f",
      url: "/img/poster/engage kiss - poster.jpg",
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
