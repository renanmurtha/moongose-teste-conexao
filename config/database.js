import mongoose from 'mongoose';
import env from '../config/env.js'; // Corrigido o caminho do import

const isAtlas = env.dbCloud === 'true' ? true : false;
const uriAtlas = env.mongoAtlasUri;

const uri = env.mongoURI;
const dbName = env.mongoDBName;
const port = parseInt(env.mongoPort, 10); // Porta do MongoDB

let finalUri = '';

if (!uri) {
  throw new Error('Mongo URI is required');
}
if (!dbName) {
  throw new Error('Mongo DB Name is required');
}
if (!port) {
  throw new Error('Mongo Port is required');
}

if (isAtlas) {
  if (!uriAtlas) {
    throw new Error('Mongo Atlas URI is required');
  }
} else {
  if (!uri) {
    throw new Error('Mongo URI is required');
  }
}

if (isAtlas) {
  finalUri = `${uriAtlas.replace(/\/$/, '')}/${dbName}`;
} else {
  if (port) {
    finalUri = `${uri.replace(/\/$/, '')}:${port}/${dbName}`;
  } else {
    finalUri = `${uri.replace(/\/$/, '')}/${dbName}`; // Corrigido a variável finalUri  para receber a URI correta  
  }
}

console.log('\n')

export default async function dbConnect() {
  if (mongoose.connection.readyState === 1) return mongoose.connection.readyState
  return mongoose.connect(finalUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
