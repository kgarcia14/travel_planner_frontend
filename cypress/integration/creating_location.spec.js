describe('Creating a location', () => {
    it('Displays the locations in the list', () => {
      cy.visit(`http://localhost:3000/locations`);
  
      cy.get('[data-testid="messageText"]')
        .type('Miami');
  
      cy.get('[data-testid="sendButton"]')
        .click();
  
      cy.get('[data-testid="messageText"]')
        .should('have.value', 'Miami');
  
      cy.contains('Miami');
    });
  });