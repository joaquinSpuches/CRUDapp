describe('Test should cancel delete element with ID 10 when is asked to confirm delete ', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  it('deletes the entry', () => {
    cy.get('[data-cy="10"]').click()
    cy.contains('Delete').click()
    cy.on('window:confirm', () => false);
    cy.contains('Back').click()
    cy.url().should('include', '/')
    cy.get('[data-cy="10"]').should('exist')
  
 })
})