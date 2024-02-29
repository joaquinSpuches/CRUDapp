describe('Loading home page with the table with data from hourEntries json', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  it('loads the table', () => {
    cy.get('table').should('exist')
  })



})