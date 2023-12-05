describe('Meu Primeiro Teste', () => {
  it('Deve verificar o título da página', () => {
    // Visita a URL da página que você quer testar
    cy.visit('https://portal-hml.tismoo.me/');

    //Realizar login
    cy.get('.sc-dSCufp > #email').click().type("aabatista@viptech.com.br")
    cy.get('.sc-dSCufp > #password').click().type("1234@5678a")
    cy.get('.sc-fPXMVe').click()

  

    //Acessar painel de frotas 
    cy.get(':nth-child(2) > .sc-gweoQa').click()
    
   // Input mapa
   cy.get('.sc-hIUJlX').click().type("Guarulhos")
   
   //Acessar Acomp. Manifesto 
   cy.get(':nth-child(3) > .sc-gweoQa').click()

   

   //Preencher o input Acomp. Manifesto 
   cy.get('input.sc-hIUJlX.hvqfHQ').click().type("GESU5988650") //jeito certo de preencher um input 



  });
});