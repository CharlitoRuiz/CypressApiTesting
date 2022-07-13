///<reference types="Cypress" />
describe('Probar los metodos del API', () => {
  it('Metodo GET', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1').then(response => {
      expect(response.status).to.eq(200);
    });
  });
  it('Metodo POST', () => {
    cy.request('POST', 'posts', 
    {
      title: 'foo',
      body: 'bar',
      userId: 1,
      Headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('body', 'bar');
    })
  })
  it('Metodo PUT', () => {
    cy.request('PUT', 'posts/1', 
    {
      title: 'foo',
      body: 'bar',
      userId: 1,
    Headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'foo');
      console.log(response.body);
    })
  })
  it('Metodo DELETE', () => {
    cy.request('DELETE', 'posts/1')
    .then(response => {
      expect(response.status).to.eq(200);
      console.log(response.body);
    })
  })
  it('Metodo PATCH', () => {
    cy.request('PATCH', 'posts/1', 
    {
      title: 'foo',
    Headers: {
        'Content-type': 'application/json; charset=UTF-8',
      
    }})
    .then(response => {
      expect(response.body.title).to.eq("foo");
      console.log(response.body);
    })
  })
})