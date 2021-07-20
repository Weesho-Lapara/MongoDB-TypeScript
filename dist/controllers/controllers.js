"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDocuments = exports.updateDocuments = exports.addDocuments = exports.getDocuments = void 0;
const mongodb = require('mongodb');
const uri = process.env.ATLAS_URI;
// Using this we will connect to the database
function dataWithDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield mongodb.MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return client.db('test').collection('mongo');
    });
}
// This section will help you get a list of all the documents.
let getDocuments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let documents = yield dataWithDatabase();
    res.send(yield documents.find({}).toArray());
});
exports.getDocuments = getDocuments;
// This section will help you create a new document.
const addDocuments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let documents = yield dataWithDatabase();
    yield documents.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
    console.log("document added");
});
exports.addDocuments = addDocuments;
// This section will help you update a document by id.
let updateDocuments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const documents = yield dataWithDatabase();
    let document = { text: req.body.text,
        createdAt: new Date() };
    yield documents.updateOne({ id: req.body.id }, { $set: document }, { upsert: true });
    res.status(200).send({});
});
exports.updateDocuments = updateDocuments;
// This section will help you delete a document
let deleteDocuments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const documents = yield dataWithDatabase();
    yield documents.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.status(200).send({});
});
exports.deleteDocuments = deleteDocuments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUE7QUFFakMsNkNBQTZDO0FBQzdDLFNBQWUsZ0JBQWdCOztRQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUM5QyxHQUFHLEVBQ0g7WUFDRSxlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQ0YsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUFBO0FBS0QsOERBQThEO0FBQ3ZELElBQUksWUFBWSxHQUFHLENBQU8sR0FBVyxFQUFFLEdBQVksRUFBRSxFQUFFO0lBQzVELElBQUksU0FBUyxHQUFJLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztJQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBRW5ELENBQUMsQ0FBQSxDQUFDO0FBSk8sUUFBQSxZQUFZLGdCQUluQjtBQUVGLG9EQUFvRDtBQUM5QyxNQUFNLFlBQVksR0FBSSxDQUFPLEdBQVcsRUFBRSxHQUFZLEVBQUUsRUFBRTtJQUM3RCxJQUFJLFNBQVMsR0FBSSxNQUFNLGdCQUFnQixFQUFFLENBQUM7SUFDM0MsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3hCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7UUFDbkIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO0tBQ3RCLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9CLENBQUMsQ0FBQSxDQUFDO0FBUlUsUUFBQSxZQUFZLGdCQVF0QjtBQUVGLHNEQUFzRDtBQUMvQyxJQUFJLGVBQWUsR0FBRSxDQUFPLEdBQVcsRUFBRSxHQUFZLEVBQUUsRUFBRTtJQUM5RCxNQUFNLFNBQVMsR0FBSSxNQUFNLGdCQUFnQixFQUFFLENBQUM7SUFDN0MsSUFBSSxRQUFRLEdBQUUsRUFBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ2pDLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFDLENBQUE7SUFDdEIsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLENBQUUsQ0FBQztJQUM5RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUUzQixDQUFDLENBQUEsQ0FBQztBQVBTLFFBQUEsZUFBZSxtQkFPeEI7QUFFRiwrQ0FBK0M7QUFDMUMsSUFBSSxlQUFlLEdBQUcsQ0FBTSxHQUFXLEVBQUUsR0FBWSxFQUFFLEVBQUU7SUFDOUQsTUFBTSxTQUFTLEdBQUksTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFDLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFBLENBQUM7QUFKTyxRQUFBLGVBQWUsbUJBSXRCIn0=