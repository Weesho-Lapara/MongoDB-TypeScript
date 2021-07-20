import  { Request, Response } from 'express';
const mongodb = require('mongodb');
const uri = process.env.ATLAS_URI

// Using this we will connect to the database
async function dataWithDatabase() {
  const client = await mongodb.MongoClient.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  );

  return client.db('test').collection('mongo');
}




// This section will help you get a list of all the documents.
export let getDocuments = async (req:Request, res:Response) => {
  let documents =  await dataWithDatabase();
        res.send(await documents.find({}).toArray());
   
  };
  
  // This section will help you create a new document.
 export const addDocuments =  async (req:Request, res:Response) => {
     let documents =  await dataWithDatabase();
    await documents.insertOne({
      text: req.body.text,
      createdAt: new Date()
    });
    res.status(201).send();
    console.log("document added")
  };
  
  // This section will help you update a document by id.
  export let updateDocuments= async (req:Request, res:Response) => {
    const documents =  await dataWithDatabase();
   let document ={text: req.body.text,
    createdAt: new Date()}
    await documents.updateOne({id: req.body.id}, {$set:document}, {upsert:true} );
    res.status(200).send({});
  
  };
  
  // This section will help you delete a document
export let deleteDocuments = async(req:Request, res:Response) => {
  const documents =  await dataWithDatabase();
    await documents.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.status(200).send({});
  };
  
 