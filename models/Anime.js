

const mongoose = require('mongoose');
const {Schema, model, models } = mongoose;
mongoose.models = {};

const AnimeSchema = new mongoose.Schema({
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
  capitulos: {
      type: String,
      required: [true, "por favor ingrese los capitulos"],
  },
  studio: {
      type: String,
      required: [true, "por favor ingrese el Studio"],
  },
  estado: {
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
  calidad: {type: String, }, estrellas: {type: String, }, myanimelist: {type: String, },
  liprecuela: {type: String, },
  lisecuela: {type: String, },
  lireco1: {type: String, },
  lireco2: {type: String, }, lireco3: {type: String, },
  imgreco1: {type: String, }, imgreco3: {type: String, }, namereco3: {type: String, },
  imgreco2: {type: String, }, namereco1: {type: String, }, namereco2: {type: String, },
  servidor1: {type: String, },
  servidor2: {type: String, },
  links1x1: {type: String, },
  links1x2: {type: String, },
  links1x3: {type: String, },
  links1x4: {type: String, },
  links2x1: {type: String, },
  links2x2: {type: String, },
  links2x3: {type: String, },
  links2x4: {type: String, },
  imagecap1: {type: String, }, imagecap2: {type: String, }, imagecap3: {type: String, }, imagecap4: {type: String, }, imagecap5: {type: String, }, imagecap6: {type: String, }, imagecap7: {type: String, },
  imagecap8: {type: String, }, imagecap9: {type: String, }, imagecap10: {type: String, }, imagecap11: {type: String, }, imagecap12: {type: String, },
  imagecap13: {type: String, }, imagecap14: {type: String, }, imagecap15: {type: String, }, imagecap16: '', imagecap17: {type: String, }, imagecap18: {type: String, }, imagecap19: {type: String, }, imagecap20: {type: String, },
  imagecap21: {type: String, }, imagecap22: {type: String, }, imagecap23: {type: String, }, imagecap24: {type: String, }, imagecap25: {type: String, },
  imagecap26: {type: String, }, imagecap27: {type: String, }, imagecap28: {type: String, },
  online1: {type: String, }, online2: {type: String, }, online3: {type: String, }, online4: {type: String, }, online5: {type: String, }, online6: {type: String, }, online7: {type: String, }, online8: {type: String, }, online9: {type: String, }, online10: {type: String, },
  online11: {type: String, }, online12: {type: String, }, online13: {type: String, }, online14: {type: String, }, online15: {type: String, }, online16: {type: String, }, online17: {type: String, }, online18: {type: String, }, online19: {type: String, }, online20: {type: String, },
  online21: {type: String, }, online22: {type: String, }, online23: {type: String, }, online24: {type: String, }, online25: {type: String, }, online26: {type: String, }, online27: {type: String, }, online28: {type: String, },
});

const ModelAnime = mongoose.models.Anime || mongoose.model("Animes", AnimeSchema);

export default ModelAnime;
