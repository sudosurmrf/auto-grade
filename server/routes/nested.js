const express = require('express');
const router = express.Router();
const { store, cloneActions } = require('../store');
const app = express();

router.use(express.json());

router.post('/', async( req, res, next) => {
  try{

    const { nestedFolder } = req.body;
    console.log(req.body);
    if(nestedFolder){
      console.log(nestedFolder);
      store.dispatch(cloneActions.nestedFolderSet({ nestedFolder }));
  
      res.sendStatus(200);
    }
  }catch(err){
    console.error('nested problems', err);
  }
});

module.exports = router;
