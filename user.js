//1. Post method for user.js
import request from 'supertest';
const TYPE = 'Content-Type';
const JSON = /json/;

export const postUser = async()=> {
  return await request('https://petstore.swagger.io/v2') //base URL
  .post('/store/order')//method
  .send()
  .set('Accept', 'application/json')//headers
  .expect(TYPE, JSON)
  .expect(200)//status code
  .then(response => {
    console.log(response.body)
  });
}

//2. Get method for user.js
//3. Put method for user.js
//4. Delete method for user.js
