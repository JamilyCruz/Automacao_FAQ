/// <reference types="cypress" />

describe('', () => {

    beforeEach(() => {
        cy.viewport(1240,800)
        cy.visit('https://casasbahia20.custhelp.com')
        cy.on('uncaught:exception', (_err, _runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    });

    it('Validação da categoria Entrega', () => {
        cy.get('#home-faq > :nth-child(3) > :nth-child(1)').should('contain', 'Se precisar, temos algumas')  
        cy.get('#home-faq > :nth-child(3) > :nth-child(2)').should('contain', 'informações aqui')
        cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(1)').should('be.visible')
        cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(1)').click()
        cy.get('.list > a').should('be.visible')
        cy.get('.list > a').should('contain', 'Voltar')
        cy.get('.search').should('be.visible')
        cy.get('.search').should('contain', 'Entregas')
        cy.contains('Minha entrega atrasou. E agora?')
        cy.contains('Como rastreio a minha entrega')
        cy.contains('Qual é o prazo máximo de entrega?')
        cy.contains('Meu produto aparece como entregue, mas não recebi. E agora?')
        cy.contains('Como fico sabendo sobre os prazos e locais de entrega?')
        cy.contains('A transportadora tentou realizar a entrega do meu produto, mas não tinha ninguém para receber. O que faço?')
        cy.contains('Como faço para agendar a minha entrega?')
        cy.contains('Posso alterar meu endereço de entrega após finalizar uma compra?')
        cy.contains('Minha entrega veio incompleta. E agora?')
        cy.get('[title="Página 1 de 2 selecionada"]').should('exist')
        cy.get('[title="Página 2 de 2"]').should('exist')

        cy.get('#rn_Paginator_2_PageLink_2').click()
        cy.get('.list > a').should('be.visible')
        cy.get('.list > a').should('contain', 'Voltar')
        cy.get('.search').should('be.visible')
        cy.get('.search').should('contain', 'Entregas')
        cy.contains('Saiba como funciona o Retira Rápido')
        cy.contains('Posso pedir para alguém retirar o meu pedido?')
        cy.contains('Comprei um produto de um lojista, mas não consigo acompanhar a entrega em "Meus Pedidos".')
        cy.contains('Preciso apresentar algum documento para retirar meu produto na loja?')
        cy.contains('Como é feita a entrega de produtos pelo lojista?')
        cy.contains('Saiba como funciona a Entrega Expressa')
        cy.contains('Posso ir à loja assim que receber a confirmação que meu pedido está disponível para retirada?')
        cy.contains('Por que o produto que quero comprar aparece como indisponível?')
        cy.get('[title="Página 1 de 2"]').should('exist')
        cy.get('[title="Página 2 de 2 selecionada"]').should('exist')
        cy.get('.list > a').click()
        cy.url().should('eq', 'https://casasbahia20.custhelp.com/app/home')
        cy.get('[title="Página 1 de 2 selecionada"]').should('exist')
               
    });


});