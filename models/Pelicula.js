const mongoose = require('mongoose');
const {Schema, model, models } = mongoose;
mongoose.models = {};

const PeliculaSchema = new mongoose.Schema({
  titulo: {
      type: String,
      required: [true, "por favor ingrese el Titulo"],
  },
  imageurl: {
      type: String,
      required: [true, "por favor ingrese el url de la Imagen"],
  },
  sinopsis: {
      type: String,
      required: [true, "por favor ingrese la Sinopsis"],
  },
  genero: {
      type: String,
      required: [true, "por favor ingrese el genero"],
  },
  fecha: {
      type: String,
      required: [true, "por favor ingrese la fecha de estreno"],
  },
  duracion: {
      type: String,
      required: [true, "por favor ingrese la duración"],
  },
  calidad: {
      type: String,
      required: [true, "por favor ingrese la resolución de video"],
  },
  studio: {
      type: String,
      required: [true, "por favor ingrese el Studio"],
  },
  director: {
      type: String,
      required: [true, "por favor ingrese el Estado"],
  },
  peso: {
      type: String,
      required: [true, "por favor ingrese el pero del archivo"],
  },
  precuela: {
      type: String,
      required: [true, "por favor ingrese la precuela"],
  },
  secuela: {
      type: String,
      required: [true, "por favor ingrese la Secuela"],
  }, estrellas: {type: String, }, myanimelist: {type: String, }, animeonline: {type: String, },
  liprecuela: {type: String, }, lisecuela: {type: String, },
  servidor1: {type: String, }, servidor2: {type: String, },
  links1x1: {type: String, }, links1x2: {type: String, }, links1x3: {type: String, },
  links2x1: {type: String, }, links2x2: {type: String, }, links2x3: {type: String, },
  namereco1: {type: String, }, imgreco1: {type: String, }, lireco1: {type: String, },
  namereco2: {type: String, }, imgreco2: {type: String, }, lireco2: {type: String, },
  namereco3: {type: String, }, imgreco3: {type: String, }, lireco3: {type: String, },
});

const ModelPelicula = mongoose.models.Pelicula || mongoose.model("Peliculas", PeliculaSchema);

export default ModelPelicula;
