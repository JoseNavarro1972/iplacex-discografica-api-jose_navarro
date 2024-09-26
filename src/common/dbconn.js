import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://njose3372:0GCDbhxZGiBwOjpJ@eva-u3-express.zhv3a.mongodb.net/?retryWrites=true&w=majority&appName=eva-u3-express';
const dbName = 'EVALUACION3';


let dbClient;

export async function connectToDatabase() {
    if (!dbClient) {
        try {
            dbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await dbClient.connect();
            console.log('Conexión a MongoDB Atlas exitosa');
        } catch (error) {
            console.error('Error conectando a la base de datos:', error);
            process.exit(1);
        }
    }
    return dbClient.db(dbName);
}

export async function closeConnection() {
    if (dbClient) {
        await dbClient.close();
        console.log('Conexión a MongoDB cerrada');
    }
}
