import mongoose from 'mongoose';

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  director: { type: String, required: true },
  año: { type: Number, required: true },
  genero: { type: String, required: true },
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);
export default Pelicula;
