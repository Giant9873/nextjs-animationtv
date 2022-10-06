import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import 'bootstrap/dist/css/bootstrap.css';

const Newan = () => {

  const router = useRouter();

  const [form, setForm] = useState({
    titulo: '',
    imageurl: '',
    sinopsis: '',
    genero: '',
    fecha: '',
    capitulos: '',
    studio: '',
    estado: '',
    peso: '',
    precuela: '',
    secuela: '',
    liprecuela: '',
    lisecuela: '', namereco1: '', namereco2: '',
    lireco1: '',
    lireco2: '',
    imgreco1: '',
    imgreco2: '',
    servidor1: '',
    servidor2: '',
    links1x1: '',
    links1x2: '',
    links1x3: '',
    links1x4: '',
    links2x1: '',
    links2x2: '',
    links2x3: '',
    links2x4: '',
    imagecap1: '', imagecap2: '', imagecap3: '', imagecap4: '', imagecap5: '', imagecap6: '', imagecap7: '', imagecap8: '', imagecap9: '', imagecap10: '', imagecap11: '', imagecap12: '',
    imagecap13: '', imagecap14: '', imagecap15: '', imagecap16: '', imagecap17: '', imagecap18: '', imagecap19: '', imagecap20: '',
    imagecap21: '', imagecap22: '', imagecap23: '', imagecap24: '', imagecap25: '',
    online1: '', online2: '', online3: '', online4: '', online5: '', online6: '', online7: '', online8: '', online9: '', online10: '',
    online11: '', online12: '', online13: '', online14: '', online15: '', online16: '', online17: '', online18: '', online19: '', online20: '',
    online21: '', online22: '', online23: '', online24: '', online25: '',
  });
  const [message, setMenssage] = useState([]);

  const handleChange = (e) => {
    const {value, name} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form) => {
    try {
      console.log(form);
      const res = await fetch('/api/animeapi', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);
      if (!data.success) {
          for (const key in data.error.errors) {
                let error = data.error.errors[key];
                setMenssage(oldmenssage => [
                    ...oldmenssage,
                    {message: error.message},
                ]);
            }
        }else {
          router.push('/animes');
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="container separator">
      <h1 className="my-3">Agregar Anime : </h1>
      <form onSubmit={handleSubmit}>
        <input
            className="form-control my-2"
            type="text"
            placeholder="Titulo"
            autoComplete="off"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Imageurl"
            autoComplete="off"
            name="imageurl"
            value={form.imageurl}
            onChange={handleChange}
        />
        <textarea
            className="form-control my-2"
            type="text"
            row="2"
            placeholder="Sinopsis"
            name="sinopsis"
            autoComplete="off"
            value={form.sinopsis}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Género"
            name="genero"
            autoComplete="off"
            value={form.genero}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Año Estreno"
            name="fecha"
            autoComplete="off"
            value={form.fecha}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Capitulos"
            name="capitulos"
            autoComplete="off"
            value={form.capitulos}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Studio"
            name="studio"
            autoComplete="off"
            value={form.studio}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Estado"
            name="estado"
            autoComplete="off"
            value={form.estado}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Peso archivo"
            name="peso"
            autoComplete="off"
            value={form.peso}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Precuela"
            name="precuela"
            autoComplete="off"
            value={form.precuela}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Secuela"
            name="secuela"
            autoComplete="off"
            value={form.secuela}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link Precuela"
            name="liprecuela"
            autoComplete="off"
            value={form.liprecuela}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link Secuela"
            name="lisecuela"
            autoComplete="off"
            value={form.lisecuela}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link Recomendación 1"
            name="lireco1"
            autoComplete="off"
            value={form.lireco1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link Recomendación 2"
            name="lireco2"
            autoComplete="off"
            value={form.lireco2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Imagen Recomendación 1"
            name="imgreco1"
            autoComplete="off"
            value={form.imgreco1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Imagen Recomendación 2"
            name="imgreco2"
            autoComplete="off"
            value={form.imgreco2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Name Recomendación 1"
            name="namereco1"
            autoComplete="off"
            value={form.namereco1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Name Recomendación 2"
            name="namereco2"
            autoComplete="off"
            value={form.namereco2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Servidor 1"
            name="servidor1"
            autoComplete="off"
            value={form.servidor1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Servidor 2"
            name="servidor2"
            autoComplete="off"
            value={form.servidor2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S1x01"
            name="links1x1"
            autoComplete="off"
            value={form.links1x1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S1x02"
            name="links1x2"
            autoComplete="off"
            value={form.links1x2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S1x03"
            name="links1x3"
            autoComplete="off"
            value={form.links1x3}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S1x04"
            name="links1x4"
            autoComplete="off"
            value={form.links1x4}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S2x01"
            name="links2x1"
            autoComplete="off"
            value={form.links2x1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S2x02"
            name="links2x2"
            autoComplete="off"
            value={form.links2x2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S2x03"
            name="links2x3"
            autoComplete="off"
            value={form.links2x3}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S2x04"
            name="links2x4"
            autoComplete="off"
            value={form.links2x4}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 1"
            name="imagecap1"
            autoComplete="off"
            value={form.imagecap1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 2"
            name="imagecap2"
            autoComplete="off"
            value={form.imagecap2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 3"
            name="imagecap3"
            autoComplete="off"
            value={form.imagecap3}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 4"
            name="imagecap4"
            autoComplete="off"
            value={form.imagecap4}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 5"
            name="imagecap5"
            autoComplete="off"
            value={form.imagecap5}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 6"
            name="imagecap6"
            autoComplete="off"
            value={form.imagecap6}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 7"
            name="imagecap7"
            autoComplete="off"
            value={form.imagecap7}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 8"
            name="imagecap8"
            autoComplete="off"
            value={form.imagecap8}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 9"
            name="imagecap9"
            autoComplete="off"
            value={form.imagecap9}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 10"
            name="imagecap10"
            autoComplete="off"
            value={form.imagecap10}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 11"
            name="imagecap11"
            autoComplete="off"
            value={form.imagecap11}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 12"
            name="imagecap12"
            autoComplete="off"
            value={form.imagecap12}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 13"
            name="imagecap13"
            autoComplete="off"
            value={form.imagecap13}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 14"
            name="imagecap14"
            autoComplete="off"
            value={form.imagecap14}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 15"
            name="imagecap15"
            autoComplete="off"
            value={form.imagecap15}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 16"
            name="imagecap16"
            autoComplete="off"
            value={form.imagecap16}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 17"
            name="imagecap17"
            autoComplete="off"
            value={form.imagecap17}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 18"
            name="imagecap18"
            autoComplete="off"
            value={form.imagecap18}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 19"
            name="imagecap19"
            autoComplete="off"
            value={form.imagecap19}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 20"
            name="imagecap20"
            autoComplete="off"
            value={form.imagecap20}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 21"
            name="imagecap21"
            autoComplete="off"
            value={form.imagecap21}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 22"
            name="imagecap22"
            autoComplete="off"
            value={form.imagecap22}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 23"
            name="imagecap23"
            autoComplete="off"
            value={form.imagecap23}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 24"
            name="imagecap24"
            autoComplete="off"
            value={form.imagecap24}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Href Imagen Cap 25"
            name="imagecap25"
            autoComplete="off"
            value={form.imagecap25}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Online Cap 1"
            name="online1"
            autoComplete="off"
            value={form.online1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Online Cap 2"
            name="online2"
            autoComplete="off"
            value={form.online2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 3"
            name="online3"
            autoComplete="off"
            value={form.online3}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 4"
            name="online4"
            autoComplete="off"
            value={form.online4}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 5"
            name="online5"
            autoComplete="off"
            value={form.online5}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 6"
            name="online6"
            autoComplete="off"
            value={form.online6}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 7"
            name="online7"
            autoComplete="off"
            value={form.online7}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 8"
            name="online8"
            autoComplete="off"
            value={form.online8}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 9"
            name="online9"
            autoComplete="off"
            value={form.online9}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 10"
            name="online10"
            autoComplete="off"
            value={form.online10}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 11"
            name="online11"
            autoComplete="off"
            value={form.online11}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 12"
            name="online12"
            autoComplete="off"
            value={form.online12}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 13"
            name="online13"
            autoComplete="off"
            value={form.online13}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 14"
            name="online14"
            autoComplete="off"
            value={form.online14}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 15"
            name="online15"
            autoComplete="off"
            value={form.online15}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 16"
            name="online16"
            autoComplete="off"
            value={form.online16}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 17"
            name="online17"
            autoComplete="off"
            value={form.online17}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 18"
            name="online18"
            autoComplete="off"
            value={form.online18}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 19"
            name="online19"
            autoComplete="off"
            value={form.online19}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 20"
            name="online20"
            autoComplete="off"
            value={form.online20}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 21"
            name="online21"
            autoComplete="off"
            value={form.online21}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 22"
            name="online22"
            autoComplete="off"
            value={form.online22}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 23"
            name="online23"
            autoComplete="off"
            value={form.online23}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 24"
            name="online24"
            autoComplete="off"
            value={form.online24}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="online Cap 25"
            name="online25"
            autoComplete="off"
            value={form.online25}
            onChange={handleChange}
        />
        <button className="btn btn-primary w-50" type="submit">Agregar</button>
        <Link href="/peliculas">
          <a className="btn btn-warning w-50"> Volver...</a>
        </Link>
        {message.map(({ message }) => (
          <p key={message}>{message}</p>
        ))}
      </form>
    </div>
  );
};

export default Newan;
