import Actor from '../models/actor.js';
import Movie from '../models/movie.js'; 

const actorCollection = 'actors'; 

export async function handleInsertActorRequest(req, res) {
  try {
    const { idPelicula, nombre, edad, estaRetirado, premios } = req.body;

  
    const movie = await Movie.findOne({ nombre: idPelicula });
    if (!movie) {
      return res.status(400).json({ error: 'La película no existe' });
    }

    const newActor = new Actor({
      idPelicula,
      nombre,
      edad,
      estaRetirado,
      premios,
    });

    await newActor.save();
    res.status(201).json(newActor);
  } catch (error) {
    console.error('Error al insertar actor:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export async function handleGetActoresRequest(req, res) {
  try {
    const actores = await Actor.find({});
    res.status(200).json(actores);
  } catch (error) {
    console.error('Error al obtener actores:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}


export async function handleGetActorByIdRequest(req, res) {
  try {
    const { id } = req.params;
    const actor = await Actor.findById(id);

    if (!actor) {
      return res.status(404).json({ error: 'Actor no encontrado' });
    }

    res.status(200).json(actor);
  } catch (error) {
    console.error('Error al obtener actor por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export async function handleGetActoresByPeliculaIdRequest(req, res) {
  try {
    const { pelicula } = req.params;
    const actores = await Actor.find({ idPelicula: pelicula });

    if (actores.length === 0) {
      return res.status(404).json({ error: 'No se encontraron actores para esta película' });
    }

    res.status(200).json(actores);
  } catch (error) {
    console.error('Error al obtener actores por ID de película:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
