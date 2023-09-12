import { MongoClient } from "mongodb";

const uri = 'mongodb://127.0.0.1:27017/habits';

export async function connectToDatabase() {
  const client = await MongoClient.connect(uri);

  const db = client.db();


  return { client, db };
}