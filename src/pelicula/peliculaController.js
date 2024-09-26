import Pelicula from './pelicula.js';
import mongoose from 'mongoose';

const peliculaCollection = 'peliculas';

export const handleInsertPeliculaRequest = async (req, res) => {
  try {
    const nuevaPelicula = new Pelicula(req.body);
    const resultado = await nuevaPelicula.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al agregar la película', error });
  }
};

export const handleGetPeliculasRequest = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.status(200).json(peliculas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las películas', error });
  }
};

export const handleGetPeliculaByIdRequest = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensaje: 'ID mal formado' });
  }
  try {
    const pelicula = await Pelicula.findById(id);
    if (!pelicula) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }
    res.status(200).json(pelicula);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la película', error });
  }
};

export const handleUpdatePeliculaByIdRequest = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensaje: 'ID mal formado' });
  }
  try {
    const peliculaActualizada = await Pelicula.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    if (!peliculaActualizada) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }
    res.status(200).json(peliculaActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la película', error });
  }
};

export const handleDeletePeliculaByIdRequest = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensaje: 'ID mal formado' });
  }
  try {
    const peliculaEliminada = await Pelicula.findByIdAndDelete(id);
    if (!peliculaEliminada) {
      return res.status(404).json({ mensaje: 'Película no encontrada' });
    }
    res.status(200).json({ mensaje: 'Película eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la película', error });
  }
};
