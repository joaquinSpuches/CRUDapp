describe('Test should delete element from the table with ID 10 ', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  it('deletes the entry', () => {
    cy.get('[data-cy="10"]').click()
    cy.contains('Delete').click()
    cy.url().should('include', '/')
    cy.get('[data-cy="10"]').should('not.exist')
  
 })
})