const chai = require('chai');
const axios = require('axios');

const expect = chai.expect;


describe('Lấy ra danh shippers', () => {

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

  it('Lấy ra danh sách thành công trả về list empty', async () => {

    const response = await axios.get('http://localhost:3000/shippers');
    console.log(response.data)
    expect(response.data.httpCode).to.equal(200);
   
  });


  it('Lấy ra danh sách thất bại trả về error', async () => {

    const response = await axios.get('http://localhost:3000/shippers');
    console.log(response.data)
    expect(response.data.httpCode).to.equal(200);
   
  });
})