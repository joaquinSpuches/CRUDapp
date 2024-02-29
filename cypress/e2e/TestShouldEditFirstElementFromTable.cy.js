describe('Test should edit time spent from the element with ID 0 from table to 200 hours', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('edits the time spent from original time to 200', () => {
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="timeSpent"]').clear().type('200')
    cy.contains('Submit').click()
    cy.url().should('include', '/')
    cy.contains('200').should('exist')
  
   
    })
})