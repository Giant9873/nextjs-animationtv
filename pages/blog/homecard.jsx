import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 12,
      titulo: "Mob Psycho 100 III",
      tipo: "anime",
      href: "/6341e1a528f84e5af3593027",
      url: "/img/poster/mob p 100 s3 - poster.jpg",
      año: "2022",
      capitulos: "03/??"
  },{
      id: 16,
      titulo: "Chainsaw Man",
      tipo: "anime",
      href: "/634624f8ae0f72b4da36cc2b",
      url: "/img/poster/chainsaw man - poster.jpg",
      año: "2022",
      capitulos: "02/12"
  },{
      id: 15,
      titulo: "Blue Lock",
      tipo: "anime",
      href: "/63460455ae0f72b4da36cc24",
      url: "/img/poster/blue lock - poster.jpg",
      año: "2022",
      capitulos: "02/24"
  },{
      id: 13,
      titulo: "Boku no Hero Academia S6",
      tipo: "anime",
      href: "/63444fee334cf9fb31f6222e",
      url: "/img/poster/boku no hero s6 - poster.jpg",
      año: "2022",
      capitulos: "03/25"
  },{
      id: 11,
      titulo: "Spy x Family S2",
      tipo: "anime",
      href: "/633b6161d381cf953bbf16a0",
      url: "/img/poster/spy x family s2 - poster.jpg",
      año: "2022",
      capitulos: "03/13"
  },{
      id: 14,
      titulo: "Beast Tamer",
      tipo: "anime",
      href: "/6345db70ae0f72b4da36cbff",
      url: "/img/poster/beast tamer - poster.jpg",
      año: "2022",
      capitulos: "03/13"
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
      id: 4,
      titulo: "Vermeil in Gold",
      tipo: "anime",
      href: "/6341bb6628f84e5af359301f",
      url: "/img/poster/vermeil in gold - poster.jpg",
      año: "2022",
      capitulos: "12/12"
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
  },{
      id: 1,
      titulo: "Tomodadadchi Game",
      tipo: "anime",
      href: "/632b854f4180c5cd4",
      url: "/img/poster/tomadachi game - poster.jpg",
      año: "2022",
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
