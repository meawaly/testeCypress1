describe('Meu Primeiro Teste', () => {
    it('Deve verificar o título da página', () => {
      // Visita a URL da página que você quer testar
      cy.visit('https://portal-hml.tismoo.me');
  
      //Realizar login
      cy.get('.sc-bypJrT > #email').click().type("aabatista@viptech.com.br")
      cy.get('.sc-bypJrT > #password').click().type("1234@5678a")
      cy.get('.fTNabx').click()
  
    //   //Acessar opção "Perfil de saúde" 
      cy.get('.sc-gRtvSG > .sc-cMa-dbN > .active > .sc-kgOKUu').click()
  
    //   //Validade se apareceu o modal 
      cy.contains('Adicionar Perfil de Saúde')
  
      //Adicionar perfil de saúde
      cy.get('.sc-cXPBUD > .sc-eDPEul').click()
  
      //Inserir o primeiro nome 
      cy.get('input#name.sc-dSCufp.egyFrY').click().type("TEST QA")
  
      //Inserir o segundo nome
      cy.get('input#lastName.sc-dSCufp.egyFrY').click().type("QQA")
  
  //Teste funcionalidade
  
      cy.get('input#gender.sc-jaXxmE.bBduzH').should('be.visible').click();
      cy.get('input#gender.sc-jaXxmE.bBduzH').should('be.visible').type("Masculino");


    });
});