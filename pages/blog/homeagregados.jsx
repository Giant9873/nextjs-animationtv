import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      titulo: "Marvel's Hit-Monkey",
      tipo: "occidental",
      href: "/blog",
      url: "/img/home/hit monkey 2.jpg",
      año: "2021",
      capitulo: "10"
  },{
      titulo: "Banana Fish",
      tipo: "anime",
      href: "/about",
      url: "/img/home/home overlord s4.jpg",
      año: "2018",
      capitulo: "24"
  },{
      titulo: "Lycoris Recoil",
      tipo: "anime",
      href: "/blog",
      url: "/img/home/lycoris recoil 2.jpg",
      año: "2022"
  },,{
      titulo: "Marvel's Hit-Monkey",
      tipo: "occidental",
      href: "/blog",
      url: "/img/home/hit monkey 2.jpg",
      año: "2021"
  },,{
      titulo: "Tomodachi Game",
      tipo: "anime",
      href: "/blog",
      url: "/img/home/tomadachi game - poster2.jpg",
      año: "2022"
  },
]

const Homecard = () => {
  return(
      <div className="row">
      {MENU_LIST.map((menu, idx) => (
        <Link href={menu.href}>
        <div className="col-md-3 col-sm-3" >
          <div key={menu.titulo} >
            <div className="card" >
              <Image className="card-img-top" src={menu.url} width={600} height={400} alt="1"></Image>
              <div className="card-body">
                <h5 className="card-title">{menu.titulo} - {menu.capitulo}</h5>
                <p className="card-text">{menu.tipo} - {menu.año}</p>
              </div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Homecard;
