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
      required: [true, "por favor ingrese los capitulos"],
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
  },
});

const ModelPelicula = mongoose.models.Pelicula || mongoose.model("Peliculas", PeliculaSchema);

export default ModelPelicula;
