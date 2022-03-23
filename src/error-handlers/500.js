'use strict';

function throw500Error (req, res, next) {
  
  let error={
    status:500,
    message:'server error!',
   
  };
  res.status(404).send(error);
}

module.exports = throw500Error;