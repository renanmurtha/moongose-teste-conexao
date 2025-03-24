import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis do .env

const requiredVars = [
  'MONGO_DB_URI',
  'MONGO_DB_URI_ATLAS',
  'MONGO_DB_NAME',
  'MONGO_DB_COLLECTION_NAME',
  'MONGO_DB_PORT',
  'MONGO_DB_CLOUD_ATLAS'
];

// Verifica quais variáveis estão ausentes
const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(`Missing required environment variables:\n${missingVars.join('\n')}`);
  process.exit(1); // Encerra o processo com código de erro
}

const config = {
  dbCloud: process.env.MONGO_DB_CLOUD_ATLAS,
  mongoURI: process.env.MONGO_DB_URI,
  mongoAtlasUri: process.env.MONGO_DB_URI_ATLAS,
  mongoDBName: process.env.MONGO_DB_NAME,
  mongoPort: process.env.MONGO_DB_PORT,
  mongoDBCollectionName: process.env.MONGO_DB_COLLECTION_NAME,
};

export default config;
