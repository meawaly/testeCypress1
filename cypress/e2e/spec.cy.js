describe('Meu Primeiro Teste', () => {
  it('Deve verificar o título da página', () => {
    // Visita a URL da página que você quer testar
    cy.visit('https://portal.logsyst.com.br');

    //Realizar login
    cy.get('.sc-dSCufp > #email').click().type("coorp100@saopaulo.com.br")
    cy.get('.sc-dSCufp > #password').click().type("@devsViptech1")
    cy.get('.sc-fPXMVe').click()

    //Acessar opção "Cadastros"
    cy.get(':nth-child(4) > .sc-gweoQa').click()

    //Validar se é a aba de áreas
    cy.get('.dVtNse').contains("Áreas")

    //Acessar rastreadores 
    cy.get('[href="/registers/trackers"]').click()

    //Validar se é a aba de Rastreadores
    cy.get('.dVtNse').contains('Rastreadores')

    //Acessar a opçao de cadastrar rastreador
    cy.get('.khtPsb > .sc-fPXMVe').click()

    //Validade se apareceu o modal 
    cy.contains('Cadastrar Rastreador')

  });
});