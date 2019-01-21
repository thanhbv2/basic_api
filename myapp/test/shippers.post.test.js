const chai = require('chai');
const axios = require('axios');

const expect = chai.expect;


describe('Tạo shippers', () => {

  // let query, limit = 20, token;
  // beforeEach(async () => {
  //   query = {
  //     limit,
  //     order: [{ "field": "id", "sort": "DESC" }],
  //     include: ["Team"],
  //     where: {}
  //   }
  //   token = await DataGenerator.getTokenIntegration();
  // })

  it('Tạo thành công trả về shippers', async () => {
    const data = {
      "name": "test",
      "email": "test@gmail.com",
      "mobile": "635 532 8218",
      "address": "1568 Grasskamp Way",
      "isActived": "true",
      "teamId": 1
    }
    const response = await axios.post('http://localhost:3000/shippers', data);
    console.log(response.data)
    expect(response.data.httpCode).to.equal(200);

  });


  it('Tạo failed khi name để trống', async () => {

    // const response = await axios.get('http://localhost:3000/shippers');
    // console.log(response.data)
    // expect(response.data.httpCode).to.equal(200);

  });
})