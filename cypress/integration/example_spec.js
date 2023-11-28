describe('Meu Primeiro Teste', () => {
    it('Deve verificar o título da página', () => {
      // Visita a URL da página que você quer testar
      cy.visit('https://www.example.com');
  
      // Usa o comando 'should' para verificar o título da página
    //   cy.title().should('include', 'Example Domain');
        cy.get('.sc-dSCufp > #email').click()
        cy.get('.sc-fPXMVe').click()
    });
  });