import dbConnect from "../../lib/dbConnect";
import Anime from "../../models/Anime";

export default async function handler(req, res) {

  await dbConnect();

  //POST api/animeapi

  const {method} = req
  switch (method) {
    case 'POST':
      try {
            const anime = new Anime(req.body)
            await anime.save()

            return res.status(200).json({success: true, anime})

      } catch (error) {
          return res.status(400).json({success: false, error: error})
      }
    default:
      return res.status(500).json({success: false, error: 'Falla en el servidor 500'})
  }
}
