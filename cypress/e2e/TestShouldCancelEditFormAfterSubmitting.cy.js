describe('Test should cancel edit form after submitting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })
  it('should cancel edit form after submitting', () => {
    cy.get("[data-cy='0']").click()
    cy.get("[data-cy='timeSpent']").clear().type('200')
    cy.contains('Submit').click()
    cy.on('window:confirm', () => false);
    cy.contains('Back').click()
    cy.url().should('include', '/')
    cy.contains('200').should('not.exist')  
  })
})