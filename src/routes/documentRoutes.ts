import express from 'express';
import * as controllers from '../controllers/controllers';

const router = express.Router();

router.get('/documents', controllers.getDocuments);
router.post('/documents', controllers.addDocuments);
router.post('/documents/:id', controllers.updateDocuments);
router.delete('/documents/:id', controllers.deleteDocuments);

module.exports =router;



