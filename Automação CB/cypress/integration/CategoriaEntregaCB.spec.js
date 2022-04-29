/// <reference types="cypress" />

describe('', () => {

    beforeEach(() => {
        cy.viewport(1240,800)
        cy.visit('https://casasbahia20--tst2.custhelp.com/app/home')
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

    });

    it('Validação das perguntas na categoria Entrega', () => {
        cy.get('#home-faq > :nth-child(3) > :nth-child(1)').should('contain', 'Se precisar, temos algumas')  
        cy.get('#home-faq > :nth-child(3) > :nth-child(2)').should('contain', 'informações aqui')
        cy.get('[href="/app/answers/list/c/2587/ctt/Entregas"]').should('be.visible')
        cy.get('[href="/app/answers/list/c/2587/ctt/Entregas"] > .faq__categories__category__title').should('contain', 'Entregas')
        cy.get('[href="/app/answers/list/c/2587/ctt/Entregas"] > .faq__categories__category__icon').click()
        //cy.get('#report-container > .list').should(($div) => {expect($div).to.have.contain('"document.write(custonTitle);Entregas"')})
        cy.contains('Minha entrega atrasou. E agora?')
        cy.contains('Como faço para acompanhar minha entrega?')
        cy.contains('Como fico sabendo sobre os prazos e locais de entrega?')
        cy.contains('Qual é o prazo máximo de entrega?')
        cy.contains('Verifiquei que meu produto foi entregue, mas eu não o recebi. O que faço?')
        cy.contains('A transportadora tentou realizar a entrega do meu produto, mas não tinha ninguém para receber. O que faço?')
        //cy.contains('Recebi um código de rastreio do meu produto. Para que ele serve?')
        cy.contains('Como faço para agendar a minha entrega?')
        cy.contains('Como é feita a entrega do meu produto?')
        cy.contains('Minha entrega veio incompleta. E agora?')
        //cy.get('#rn_Paginator_2_PageLink_2').click()
        //cy.get('#rn_PaginationLinks').find('rn_CurrentPage').find('a').should('have.length', 3)
        console.log(document.getElementsByTagName("rn_PaginationLinks").getElementsByTagName("ul").getElementsByTagName("li").length)
      //.find('li').find('a')
      //.should('have.length', 3)
      //.should('contain', 'Posso alterar meu endereço de entrega após finalizar uma compra?')

    });


});