import express, { urlencoded } from 'express'
import express from 'express';
import cors from 'cors';

const port = 3000 || 3001; 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => { 
  let message = 'Bienvenido al Mejor Cine!'

  return res.status(200).send(message)
})

app.use('/api', PeliculaRoutes)

await client.connect()
.then(() => {
  console.log('Conectado a clúster')

  app.listen(PORT, () =>{ 
      console.log(`Servidor corriendo en http://localhost:${PORT}`) 
  })
})
.catch((e) => { console.log(e) })
