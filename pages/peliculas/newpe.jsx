import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import 'bootstrap/dist/css/bootstrap.css';

const Newpe = () => {

  const router = useRouter();

  const [form, setForm] = useState({
    titulo: '',
    imageurl: '',
    sinopsis: '',
    genero: '',
    fecha: '',
    duracion: '',
    studio: '',
    director: '',
    peso: '',
    calidad: '',
    precuela: '',
    secuela: '',
    liprecuela: '',
    lisecuela: '',
    estrellas: '', myanimelist: '',
    animeonline: '',
    servidor1: '', servidor2: '',
    links1x1: '', links1x2: '', links1x3: '',
    links2x1: '', links2x2: '', links2x3: '',
    namereco1: '', imgreco1: '', lireco1: '',
    namereco2: '', imgreco2: '', lireco2: '',
    namereco3: '', imgreco3: '', lireco3: '',
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
      const res = await fetch('/api/peliapi', {
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
          router.push('/peliculas');
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="container separator">
      <h1 className="my-3">Agregar Película : </h1>
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
            placeholder="Duración"
            name="duracion"
            autoComplete="off"
            value={form.duracion}
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
            placeholder="Director"
            name="director"
            autoComplete="off"
            value={form.director}
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
            placeholder="Calidad o resolución del video"
            name="calidad"
            autoComplete="off"
            value={form.calidad}
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
            placeholder="Link S1 x 01"
            name="links1x1"
            autoComplete="off"
            value={form.links1x1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S1 x 02"
            name="links1x2"
            autoComplete="off"
            value={form.links1x2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S1 x 03"
            name="links1x3"
            autoComplete="off"
            value={form.links1x3}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S2 x 01"
            name="links2x1"
            autoComplete="off"
            value={form.links2x1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S2 x 02"
            name="links2x2"
            autoComplete="off"
            value={form.links2x2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link S2 x 03"
            name="links2x3"
            autoComplete="off"
            value={form.links2x3}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Recomendacion 1"
            name="namereco1"
            autoComplete="off"
            value={form.namereco1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Url Imagen Recomendacion 1"
            name="imgreco1"
            autoComplete="off"
            value={form.imgreco1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link Recomendacion 1"
            name="lireco1"
            autoComplete="off"
            value={form.lireco1}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Recomendacion 2"
            name="namereco2"
            autoComplete="off"
            value={form.namereco2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Url Imagen Recomendacion 2"
            name="imgreco2"
            autoComplete="off"
            value={form.imgreco2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link Recomendacion 2"
            name="lireco2"
            autoComplete="off"
            value={form.lireco2}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Recomendacion 3"
            name="namereco3"
            autoComplete="off"
            value={form.namereco3}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Url Imagen Recomendacion 3"
            name="imgreco3"
            autoComplete="off"
            value={form.imgreco3}
            onChange={handleChange}
        />
        <input
            className="form-control my-2"
            type="text"
            placeholder="Link Recomendacion 3"
            name="lireco3"
            autoComplete="off"
            value={form.lireco3}
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

export default Newpe;
