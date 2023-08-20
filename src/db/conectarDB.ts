import { connect } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const conectarDB = async () => {
  const { MONGO_CNN, NODE_ENV } = process.env;

  const esTest = NODE_ENV === 'test';

  console.log(esTest, 'estEST', NODE_ENV, typeof NODE_ENV)

  if (esTest) {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await connect(uri, { dbName: 'wjourney' });
    console.log('wuwuwu00', uri)
    return;
  }

  await connect(MONGO_CNN);
};

export default conectarDB;
