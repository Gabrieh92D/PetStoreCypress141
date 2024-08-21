//Bibliotecas
import pet from '../fixtures/pet.json'
import petAlterado from '../fixtures/petAlterado.json'
import listaPets from '../fixtures/listaPets.json'
 

//describe é um conjuto de funções
describe('CRUD da entidade Pet', () => {

//Post Pet
it('POST PET', () => {
  cy.request({
    method: 'POST',
    url: '/pet', //endpoit
    body: pet

  }).then(({ status, body}) =>{
    expect(status).to.eq(200)
    expect(body.id).to.eq(pet.id)
    expect(body.name).to.eq(pet.name)
    expect(body.category.id).to.eq(pet.category.id)
    expect(body.category.name).to.eq(pet.category.name)
    expect(body.tags[0].id).to.eq(pet.tags[0].id)
    expect(body.tags[0].name).to.eq(pet.tags[0].name)
    expect(body.status).to.eq(pet.status)
  })


})//TERMINA POST


//Get Pet
it('GET Pet', () => {
  cy.request({
    url: `/pet/${pet.id}`,
    method: 'GET'
  }).then(({ status, body }) => {
    expect(status).to.eq(200)
    expect(body.id).to.eq(pet.id)
    expect(body.name).to.eq(pet.name)
    expect(body.category.id).to.eq(pet.category.id)
    expect(body.category.name).to.eq(pet.category.name)
    expect(body.tags[0].id).to.eq(pet.tags[0].id)
    expect(body.tags[0].name).to.eq(pet.tags[0].name)
    expect(body.status).to.eq(pet.status)
  })
})//termina GET


//Put Pet
it('PUT Pet', () => {
  cy.request({
    method: 'PUT',
    url:  '/pet',
    body: petAlterado
  }).then(({ status, body }) =>{
    expect(status).to.eq(200)
    expect(body.id).to.eq(petAlterado.id)
    expect(body.name).to.eq(petAlterado.name)
    expect(body.category.id).to.eq(petAlterado.category.id)
    expect(body.category.name).to.eq(petAlterado.category.name)
    expect(body.tags[0].id).to.eq(petAlterado.tags[0].id)
    expect(body.tags[0].name).to.eq(petAlterado.tags[0].name)
    expect(body.status).to.eq(petAlterado.status)
  })
})// termina o PUT

//Delete Pet
// Delete Pet
it('DELETE Pet', () => {
  cy.request({
    method: 'DELETE',
    url: `/pet/${pet.id}`
  }).then(({ status, body}) => {
    expect(status).to.eq(200) // status code --> comunicação com a API
    expect(body.code).to.eq(200) // process code --> processamento na API
    expect(body.type).to.eq('unknown') // tipo desconhecido - padrão
    expect(body.message).to.eq(`${pet.id}`) // código do animal que foi excluído
  })
}) // termina DELETE//termina o delete

})

listaPets.forEach((element) => {
  it(`POST PET Data Drive - ${element.name}`, () => {
    cy.request({
      method: 'POST',
      url: '/pet', //endpoit
      body: element
    }).then(({ status, body}) =>{
      expect(status).to.eq(200)
      expect(body.id).to.eq(element.id)
      expect(body.name).to.eq(element.name)
      expect(body.category.id).to.eq(element.category.id)
      expect(body.category.name).to.eq(element.category.name)
      expect(body.tags[0].id).to.eq(element.tags[0].id)
      expect(body.tags[0].name).to.eq(element.tags[0].name)
      expect(body.status).to.eq(element.status)
    })
  
  
  })//TERMINA POST dta drrive
})

//Post Pet Data Drive



