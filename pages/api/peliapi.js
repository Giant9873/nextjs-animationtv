import dbConnect from "../../lib/dbConnect";
import Pelicula from "../../models/Pelicula";

export default async function handler(req, res) {

  await dbConnect();

  //POST api/peliapi

  const {method} = req
  switch (method) {
    case 'POST':
      try {
            const movie = new Pelicula(req.body)
            await movie.save()

            return res.status(200).json({success: true, movie})

      } catch (error) {
          return res.status(400).json({success: false, error: error})
      }
    default:
      return res.status(500).json({success: false, error: 'Falla en el servidor 500'})
  }
}
