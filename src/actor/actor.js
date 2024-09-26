import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema({
  idPelicula: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  estaRetirado: {
    type: Boolean,
    required: true,
  },
  premios: {
    type: [String], 
    default: [],
  },
}, { collection: 'actors' });

const Actor = mongoose.model('Actor', actorSchema);

export default Actor;
