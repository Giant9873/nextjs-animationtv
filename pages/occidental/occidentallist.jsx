import Image from "next/image";
import Link from "next/link";

const MENU_LIST = [
  {
      id: 1,
      titulo: "Marvel's Hit-Monkey",
      href: "/occidental",
      urlimage: "/img/poster/hit monkey - poster.jpg"
  },{
      id: 2,
      titulo: "Marvel's Hit-Monkey S2",
      href: "/occidental",
      urlimage: "/img/poster/hit-monkey s2 - poster.jpg"
  },{
      id: 3,
      titulo: "Marvel’s M.O.D.O.K.",
      href: "/occidental",
      urlimage: "/img/poster/modok - poster.jpg"
  }
];

const OccidentalList = () => {
  return(
      <div className="row separator" >
      {MENU_LIST.map((menu, idx) => (
        <Link href={menu.href} key={menu.id}>
        <div className="col-md-2 col-sm-3" >
          <div className="card">
            <Image className="card-img-top favoimg" src={menu.urlimage} width={578} height={850} alt="1"></Image>
            <div className="overlay">
              <h4 className="favotext">{menu.titulo}</h4>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default OccidentalList;
