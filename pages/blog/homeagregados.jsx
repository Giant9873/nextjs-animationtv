import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 3,
      titulo: "Jujutsu Kaisen 0",
      calidad: "1080p Full HD",
      href: "/peliculas/633e15feb8840f6d067c435d",
      url: "/img/poster/spider acrros spiderverse - poster.jpg",
      año: "2021",
      duracion: "1 hr. 44 min."
  },{
      id: 2,
      titulo: "Jujutsu Kaisen 0",
      calidad: "1080p Full HD",
      href: "/peliculas/633e15feb8840f6d067c435d",
      url: "/img/poster/spiderman into spiderverse - poster.jpg",
      año: "2021",
      duracion: "1 hr. 44 min."
  },{
      id: 1,
      titulo: "Jujutsu Kaisen 0",
      calidad: "1080p Full HD",
      href: "/peliculas/633e15feb8840f6d067c435d",
      url: "/img/poster/jujutsu kaisen 0 - poster.jpg",
      año: "2021",
      duracion: "1 hr. 44 min."
  },
]

const Homeagregados = () => {
  return(
      <div className="row">
      {MENU_LIST.map((menu, idx) => (
        <Link href={menu.href} key={menu.id}>
        <div className="col-md-3 col-sm-3" >
          <div  >
            <div className="card noborder" >
              <Image className="card-img-top crop2 " src={menu.url} width={600} height={800} alt="1"></Image>
              <div className="card-body">
                <h5 className="card-title">{menu.titulo} - {menu.duracion}</h5>
                <p className="card-text">{menu.calidad} - {menu.año}</p>
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
