//1. Post for store.js
import request from 'supertest';
const TYPE = 'Content-Type';
const JSON = /json/;

export const postStore = async()=> {
  return await request('https://petstore.swagger.io/v2') //base URL
  .post('/store/order')//method
  .send({
    "id": 0,
    "petId": 0,
    "quantity": 23,
    "shipDate": "2022-01-30T20:35:42.003Z",
    "status": "placed",
    "complete": true
  })
  .set('Accept', 'application/json')//headers
  .expect(TYPE, JSON)
  .expect(200)//status code
  .then(response => {
    console.log(response.body)
  });
}

//2. Get method for store.js
export const getStore = async()=> {
    return await request('https://petstore.swagger.io/v2') //base URL
    .get('/store/order/7')//method
    .set('Accept', 'application/json')//headers
    .expect(TYPE, JSON)
    .expect(200)//status code
    .then(response => {
      console.log(response.body)
    });
  }


//3. Delete method for store.js
export const deleteStore = async()=> {
    return await request('https://petstore.swagger.io/v2') //base URL
    .delete('/store/order/7')//method
    .set('Accept', 'application/json')//headers
    .expect(TYPE, JSON)
    .expect(200)//status code
    .then(response => {
      console.log(response.body)
    });
  }
