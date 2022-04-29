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
        cy.get('#orders__delivery__not__received').should('contain', 'Minha Entrega Não Chegou')
        cy.get('#orders__change__cancel').should('contain', 'Trocar / Cancelar Pedido')

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

    it('Validar Banner', () => {
        cy.get('.header__banner__img').should('be.visible')
        cy.get('.header__banner__img').click()
                
    });

    it('Lateral da Tela "Comprou pelo Site ou APP?"', () => {
        cy.get(':nth-child(1) > .contacts__contact__title').should('contain', 'Comprou pelo Site ou APP?')
        cy.get('#whatsapp_container > .contacts__contact__attendance').should('contain', 'Horário de Atendimento')
        cy.get('#whatsapp_container > .contacts__contact__description').should('contain', 'Atendimento 24h.')
        cy.get(':nth-child(1) > .contacts__contact__phones__title').should('contain', 'Telefones:')
        cy.get(':nth-child(1) > :nth-child(5) > .contacts__contact__phones__icon > svg > path').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(5) > .contacts__contact__phones__phone__number').should('contain', '4003-4336')
        cy.get(':nth-child(1) > .contacts__contact__phones__phone__subtitle').should('contain', 'Para RJ e Região')
        cy.get(':nth-child(1) > :nth-child(7) > .contacts__contact__phones__icon > svg').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(7) > .contacts__contact__phones__phone__number').should('contain', '0800-200-4336')
        cy.get('#home-contacts > :nth-child(1) > :nth-child(8)').should('contain', 'Horário de Atendimento')
        cy.get(':nth-child(1) > [style="padding-bottom: 0"]').should('contain', 'De segunda à sexta das 08h às 22h.')
        cy.get('#home-contacts > :nth-child(1) > :nth-child(10)').should('contain', 'Sábados e Domingos das 08h às 20h.')
        
    });

    it('Lateral da Tela "Comprou em lojas fisicas?"', () => {
        cy.get(':nth-child(3) > .contacts__contact__title').should('contain', 'Comprou em lojas físicas')
        cy.get('.contacts__contact__button__icon > svg').should('be.visible')
        cy.get('#contact__chat').should('contain', 'Chat On-line')
        cy.get('span.contacts__contact__description').should('contain', 'Somente para lojas físicas')
        cy.get(':nth-child(3) > .contacts__contact__phones__title').should('contain', 'Telefone:')
        cy.get(':nth-child(3) > :nth-child(5) > .contacts__contact__phones__icon > svg').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(5) > .contacts__contact__phones__phone__number').should('contain', '4003-4336')
        cy.get(':nth-child(3) > .contacts__contact__phones__phone__subtitle').should('contain', 'Para RJ e Região')
        cy.get(':nth-child(3) > :nth-child(7) > .contacts__contact__phones__icon > svg').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(7) > .contacts__contact__phones__phone__number').should('contain', '0800-200-4336')
        cy.get('#home-contacts > :nth-child(3) > .contacts__contact__attendance').should('contain', 'Horário de Atendimento')
        cy.get(':nth-child(3) > [style="padding-bottom: 0"]').should('contain', 'De segunda à sexta das 08h às 20h.')
        cy.get(':nth-child(3) > :nth-child(10)').should('contain', 'Sábados das 08h às 18h.')
        
    });

    it('Busca', () => {
        cy.get('#home-faq > :nth-child(1) > :nth-child(1)').should('contain', 'Não encontrou o que procurava?')
        cy.get('#home-faq > :nth-child(1) > :nth-child(2)').should('contain', 'Me conta mais!')
        cy.get('#faq-form-input').type('Cancelar')
        cy.get('.faq__form__submit > svg').click()
        cy.get('#report-container > .list').find('#rn_ResultInfo_0_Results').then(($div) => {
            expect($div).to.have.contain('Resultados da busca por "document.write(result);Cancelar"')})
        cy.url().should('include', 'https://casasbahia20--tst2.custhelp.com/app/answers/list/kw/Cancelar')
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