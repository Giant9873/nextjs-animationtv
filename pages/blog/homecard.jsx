import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 23,
      titulo: "Vinland Saga S2",
      tipo: "anime",
      href: "/63c87df5dc152840055f80a2",
      url: "/img/poster/vinland saga s2 - poster.jpg",
      año: "2023",
      capitulos: "02/24"
  },{
      id: 22,
      titulo: "NieR: Automata Ver1.1a",
      tipo: "anime",
      href: "/63cef7c228d226a37d999324",
      url: "/img/poster/nier automata v1 - poster.jpg",
      año: "2023",
      capitulos: "03/??"
  },{
      id: 21,
      titulo: "Buddy Daddies",
      tipo: "anime",
      href: "/63cc6d18e447ff2a7c17c4cd",
      url: "/img/poster/buddy daddies - poster.jpg",
      año: "2023",
      capitulos: "03/13"
  },{
      id: 20,
      titulo: "High Card",
      tipo: "anime",
      href: "/63cf0b5a2053fbb3e956576d",
      url: "/img/poster/high card - poster.jpg",
      año: "2023",
      capitulos: "03/12"
  },{
      id: 13,
      titulo: "Boku no Hero Academia S6",
      tipo: "anime",
      href: "/63444fee334cf9fb31f6222e",
      url: "/img/poster/boku no hero s6 - poster.jpg",
      año: "2022",
      capitulos: "16/25"
  },{
      id: 17,
      titulo: "Kage no Jitsuryokusha ni Naritakute!",
      tipo: "anime",
      href: "/635733fb3f6d348d451bf4a8",
      url: "/img/poster/kage no naritakute - poster.jpg",
      año: "2022",
      capitulos: "16/20"
  },{
      id: 15,
      titulo: "Blue Lock",
      tipo: "anime",
      href: "/63460455ae0f72b4da36cc24",
      url: "/img/poster/blue lock - poster.jpg",
      año: "2022",
      capitulos: "15/24"
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
      id: 8,
      titulo: "Utawarerumono: Futari no Hakuoro",
      tipo: "anime",
      href: "/632b854f4180c5cd4f97ed8a",
      url: "/img/poster/utawarerumono s3 - poster.jpg",
      año: "2022",
      capitulos: "14/28"
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
  },{
      id: 5,
      titulo: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Meikyuu-hen",
      tipo: "anime",
      href: "/632b854f4180c5cd4",
      url: "/img/poster/danmachi s4 - poster.jpg",
      año: "2022",
      capitulos: "09/11"
  },{
      id: 3,
      titulo: "Summertime Render",
      tipo: "anime",
      href: "/632b854f4180c5cd4",
      url: "/img/poster/summer timerender - poster.jpg",
      año: "2022",
      capitulos: "22/25"
  },{
      id: 2,
      titulo: "Ao Ashi",
      tipo: "anime",
      href: "/632b854f4180c5cd4",
      url: "/img/poster/ao ashi - poster.jpg",
      año: "2022",
      capitulos: "22/24"
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
