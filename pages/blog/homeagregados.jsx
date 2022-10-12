import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      titulo: "Marvel's Hit-Monkey",
      tipo: "occidental",
      href: "/",
      url: "/img/poster/hit monkey - poster.jpg",
      año: "2021",
      capitulo: "10"
  },{
      titulo: "Banana Fish",
      tipo: "anime",
      href: "/",
      url: "/img/poster/banana fish - poster.jpg",
      año: "2018",
      capitulo: "24"
  },{
      titulo: "Jujutsu Kaisen 0",
      tipo: "película",
      href: "/blog",
      url: "/img/poster/jujutsu kaisen 0 - poster.jpg",
      año: "2022",
      capitulo: ""
  },{
      titulo: "Tomodachi Game",
      tipo: "anime",
      href: "/",
      url: "/img/poster/tomadachi game - poster.jpg",
      año: "2022",
      capitulo: "12"
  },
]

const Homeagregados = () => {
  return(
      <div className="row">
      {MENU_LIST.map((menu, idx) => (
        <Link href={menu.href} key={menu.titulo}>
        <div className="col-md-3 col-sm-3" >
          <div  >
            <div className="card" >
              <Image className="card-img-top crop2 " src={menu.url} width={600} height={400} alt="1"></Image>
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

export default Homeagregados;
