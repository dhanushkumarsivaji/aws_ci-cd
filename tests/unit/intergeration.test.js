const request = require('supertest')
const app = require('../../server');

test("Should signin a user",async()=>{
    await request(app).post('/api/auth').send({
        email:"dhanushkumarstudy@gmail.com",
	    password:"123456"
    }).expect(200)
})