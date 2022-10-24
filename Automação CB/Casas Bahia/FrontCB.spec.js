/// <reference types="cypress" />

describe('', () => {

    beforeEach(() => {
        cy.viewport(1240,800)
        cy.visit('https://casasbahia20.custhelp.com')
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

    });

    it('Validar Vem cá', () => {

        cy.get('.header__logo').should('be.visible')
        cy.get('.header__title').should('contain', 'Vem cá! Faça seu atendimento aqui.')
        
    });

    it('Validar categorias do acesso rápido', () => {

        cy.get(':nth-child(4) > .attendance__box__item--title').should('contain', 'Pedidos')
        cy.get(':nth-child(5) > .attendance__box__item--title').should('contain', '2ª Via')
        cy.get(':nth-child(6) > .attendance__box__item--title').should('contain', 'Outras Solicitações')
        
    });

    it('Validar textos do "Pedidos" no acesso rapido', () => {
        cy.get('#orders__track__order').should('contain', 'Acompanhar Pedido')
        cy.get('[href="https://meuspedidos.casasbahia.com.br"]').should('exist')
        //cy.get('#orders__track__order').click()
        
        cy.get('#orders__delivery__not__received').should('contain', 'Minha Entrega Não Chegou')
        cy.get('[href="https://meuspedidos.casasbahia.com.br"]').should('exist')

        cy.get('#orders__change__cancel').should('contain', 'Trocar / Cancelar Pedido')
        cy.get('[href="https://meuspedidos.casasbahia.com.br"]').should('exist')

    });

    it('Validar texto do "2ª Via" no acesso rapido', () => {
        cy.get('#copy__invoice').should('contain', '2ª Via da Nota Fiscal')
        cy.get('#copy__billet').should('contain', '2ª Via do Boleto')
        cy.get('#copy__payment').should('contain', '2ª Via do Carnê')
        
    });

    it('Validar texto do "Outras Solicitações" no acesso rapido', () => {
        cy.get('#solicitation__debt').should('contain', 'Renegociar Dívida')
        cy.get('#solicitation__refund').should('contain', 'Consultar Reembolso')
        cy.get('#solicitation__register').should('contain', 'Atualizar Cadastro')

        
    });


    it('Busca', () => {
        cy.get('#home-faq > :nth-child(1) > :nth-child(1)').should('contain', 'Não encontrou o que procurava?')
        cy.get('#home-faq > :nth-child(1) > :nth-child(2)').should('contain', 'Me conta mais!')
        cy.get('#faq-form-input').type('Pedidos')
        cy.get('.faq__form__submit > svg').click()
        cy.get('body.list:nth-child(2) div:nth-child(4) div.list.header:nth-child(1) > div.search:nth-child(3)')
        .find('#rn_ResultInfo_0_Results')
        .then(($div) => {
            expect($div).contain('Pedidos')})
        cy.url().should('include', 'https://casasbahia20.custhelp.com/app/answers/list/kw/Pedidos')
        cy.get('[onclick="goBack()"] > span').click()
        cy.get('.header__title').should('contain', 'Vem cá! Faça seu atendimento aqui.')
        
    });

    it('Categorias', () => {
        cy.get('#home-faq > :nth-child(3) > :nth-child(1)').should('contain', 'Se precisar, temos algumas')  
        cy.get('#home-faq > :nth-child(3) > :nth-child(2)').should('contain', 'informações aqui')
        cy.get('[href="/app/answers/list/c/2587/ctt/Entregas"]').should('be.visible')
        cy.get('[href="/app/answers/list/c/2587/ctt/Entregas"] > .faq__categories__category__title').should('contain', 'Entregas')
        cy.get('[href="/app/answers/list/c/2589/ctt/Pagamentos"]').should('be.visible')
        cy.get('[href="/app/answers/list/c/2589/ctt/Pagamentos"] > .faq__categories__category__title').should('contain', 'Pagamentos')
        cy.get('[href="/app/answers/list/c/2588/ctt/Trocas e devoluções"]').should('be.visible')
        cy.get('.faq__categories__category__title_content > :nth-child(1)').should('contain', 'Trocas e')
        cy.get('.faq__categories__category__title_content > :nth-child(2)').should('contain', 'Devoluções')
        cy.get('[href="/app/answers/list/c/2594/ctt/Cancelar pedidos"]').should('be.visible')
        cy.get('[href="/app/answers/list/c/2594/ctt/Cancelar pedidos"] > .faq__categories__category__title').should('contain', 'Cancelar Pedidos')
        cy.get('[href="/app/answers/list/c/2593/ctt/Serviços"]').should('be.visible')
        cy.get('[href="/app/answers/list/c/2593/ctt/Serviços"] > .faq__categories__category__title').should('contain', 'Serviços')
        cy.get('[href="/app/answers/list/c/2592/ctt/NF eletrônica"]').should('be.visible')
        cy.get('[href="/app/answers/list/c/2592/ctt/NF eletrônica"] > .faq__categories__category__title').should('contain', 'NF Eletrônica')
        cy.get('[href="/app/answers/list/c/2591/ctt/Meu Cadastro"]').should('be.visible')
        cy.get('[href="/app/answers/list/c/2591/ctt/Meu Cadastro"] > .faq__categories__category__title').should('contain', 'Meu Cadastro')
        cy.get('[href="/app/answers/list/c/2590/ctt/Dúvidas"]').should('be.visible')
        cy.get('[href="/app/answers/list/c/2590/ctt/Dúvidas"] > .faq__categories__category__title').should('contain', 'Dúvidas')
        
    });
    
});