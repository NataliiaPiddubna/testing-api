// 1.Get method for pet.js  
import request from 'supertest';
const TYPE = 'Content-Type';
const JSON = /json/;

export const getPets = async()=> {
  return await request('https://petstore.swagger.io/v2') //base URL
  .get('/pet/findByStatus?status=available')//method
  .set('Accept', 'application/json')//headers
  .expect(TYPE, JSON)
  .expect(200)//status code
  .then(response => {
    console.log(response.body)
  });
}

// 2.Post method for pet.js (add a new pet to the store) 

export const postNewPet= async()=> {
return await request('https://petstore.swagger.io/v2') //base URL
  .post('/pet') //method
  .send({
    "id": 0,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Timon - add new name",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "sold"
  })
  .set('Accept', 'application/json')//headers
  .expect(TYPE, JSON)
  .expect(200)//status code
  .then(response => {
    console.log(response.body)
  });
}

//3. Put method for pet.js 
export const putMethod = async()=> {
  return await request('https://petstore.swagger.io/v2') //base URL
  .put('/pet')//method
  .send({
    "id": 9223372000001087000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Change name doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  })
  .set('Accept', 'application/json')//headers
  .expect(TYPE, JSON)
  .expect(200)//status code
  .then(response => {
    console.log(response.body)
  });
}

// 4. Delete method for pet.js

export const deletePet = async()=> {
  return await request('https://petstore.swagger.io/v2') //base URL
  .delete('/pet/9223372016854924000')//method
  .set('Accept', 'application/json')//headers
  .expect(TYPE, JSON)
  .expect(200)//status code
  .then(response => {
    console.log(response.body)
  });
}
