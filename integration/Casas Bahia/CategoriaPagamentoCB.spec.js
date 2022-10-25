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

it('Validar a categoria Pagamentos - Página 1', () => {
    cy.get('#home-faq > :nth-child(3) > :nth-child(1)').should('contain', 'Se precisar, temos algumas')  
    cy.get('#home-faq > :nth-child(3) > :nth-child(2)').should('contain', 'informações aqui')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('be.visible')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('contain', 'Pagamentos')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').click()
    cy.get('.list > a').should('be.visible')
    cy.get('.list > a').should('contain', 'Voltar')
    cy.get('.search').should('be.visible')
    cy.get('.search').should('contain', 'Pagamentos')
    cy.get(':nth-child(1) > .rn_Element1 > h3 > a').should('contain', 'Por que meu pedido não foi aprovado?')
    cy.get(':nth-child(2) > .rn_Element1 > h3 > a').should('contain', 'Quais as formas de pagamento disponíveis?')
    cy.get(':nth-child(3) > .rn_Element1 > h3 > a').should('contain', 'Qual o prazo para a aprovação do meu pedido')
    cy.get(':nth-child(4) > .rn_Element1 > h3 > a').should('contain', 'Como faço para imprimir a 2º via do boleto do meu pedido?')
    cy.get(':nth-child(5) > .rn_Element1 > h3 > a').should('contain', 'Como faço para pagar a parcela do carnê?')
    cy.get(':nth-child(6) > .rn_Element1 > h3 > a').should('contain', 'Meu pedido ainda consta em análise, mas já recebi a mensagem da administradora do meu cartão, o que fazer?')
    cy.get(':nth-child(7) > .rn_Element1 > h3 > a').should('contain', 'Saiba tudo sobre o cartão Casas Bahia')
    cy.get(':nth-child(8) > .rn_Element1 > h3 > a').should('contain', 'O que é e como usar o simulador de parcelas do banQi?')  
    cy.get(':nth-child(9) > .rn_Element1 > h3 > a').should('contain', 'Como consulto e pago parcelas do meu carnê da Casas Bahia no banQi?') 
    cy.get(':nth-child(10) > .rn_Element1 > h3 > a').should('contain', 'Como pedir e usar meu cartão físico ou virtual banQi?') 
    cy.get('[title="Página 1 de 5 selecionada"]').should('exist')
    cy.get('[title="Página 2 de 5"]').should('exist')
    cy.get('[title="Página 3 de 5"]').should('exist')
    //cy.get('[title="Página 4 de 5"]').should('exist')
    cy.get('[title="Página 5 de 5"]').should('exist')
    cy.get('#rn_Paginator_2_PageLink_2').click()
});

it('Validar a categoria Pagamentos - Página 2', () => {
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('be.visible')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('contain', 'Pagamentos')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').click()
    cy.get('#rn_Paginator_2_PageLink_2').click()
    cy.get('.list > a').should('be.visible')
    cy.get('.list > a').should('contain', 'Voltar')
    cy.get('.search').should('be.visible')
    cy.get('.search').should('contain', 'Pagamentos')
    cy.get(':nth-child(1) > .rn_Element1 > h3 > a').should('contain', 'Meu pedido teve aprovação do pagamento?')
    cy.get(':nth-child(2) > .rn_Element1 > h3 > a').should('contain', 'Outras dúvidas sobre PIX no banQi')
    cy.get(':nth-child(3) > .rn_Element1 > h3 > a').should('contain', 'Como funciona a conta digital banQi?')
    cy.get(':nth-child(4) > .rn_Element1 > h3 > a').should('contain', 'Como rastrear a entrega do meu cartão banQi?')
    cy.get(':nth-child(5) > .rn_Element1 > h3 > a').should('contain', 'Paguei minha parcela, mas aparece como pendente no banQi.')
    cy.get(':nth-child(6) > .rn_Element1 > h3 > a').should('contain', 'Preciso renegociar ou alterar o vencimento de uma parcela na minha conta banQi')
    cy.get(':nth-child(7) > .rn_Element1 > h3 > a').should('contain', 'Recebeu seu cartão banQi? Veja aqui como começar a usar!')
    cy.get(':nth-child(8) > .rn_Element1 > h3 > a').should('contain', 'Dicas sobre como pagar o seu carnê das Casas Bahia com o banQi')
    cy.get(':nth-child(9) > .rn_Element1 > h3 > a').should('contain', 'Minha compra com o cartão banQi foi recusada. Por que isso aconteceu?')
    cy.get(':nth-child(10) > .rn_Element1 > h3 > a').should('contain', 'Como cancelar uma compra no cartão banQi?')
    cy.get('[title="Página 2 de 5 selecionada"]').should('exist')
    cy.get('[title="Página 1 de 5"]').should('exist')
    cy.get('[title="Página 3 de 5"]').should('exist')
    cy.get('[title="Página 5 de 5"]').should('exist')
    cy.get('#rn_Paginator_2_PageLink_3').click() 
});

it('Validar a categoria Pagamentos - Página 3', () => {
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('be.visible')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('contain', 'Pagamentos')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').click()
    cy.get('#rn_Paginator_2_PageLink_3').click()
    cy.get('.list > a').should('be.visible')
    cy.get('.list > a').should('contain', 'Voltar')
    cy.get('.search').should('be.visible')
    cy.get('.search').should('contain', 'Pagamentos')
    cy.get(':nth-child(1) > .rn_Element1 > h3 > a').should('contain', 'Meu cartão banQi chegou! Como ativar?')
    cy.get(':nth-child(2) > .rn_Element1 > h3 > a').should('contain', 'Boleto “não registrado”, o que fazer no banQi?')
    cy.get(':nth-child(3) > .rn_Element1 > h3 > a').should('contain', 'Como altero minha senha da minha conta banQi?')
    cy.get(':nth-child(4) > .rn_Element1 > h3 > a').should('contain', 'Como pagar contas e boletos no banQi?')
    cy.get(':nth-child(5) > .rn_Element1 > h3 > a').should('contain', 'Qual o prazo para utilização dos Vales-compra?')
    cy.get(':nth-child(6) > .rn_Element1 > h3 > a').should('contain', '10 super dicas sobre o cartão pré-pago banQi')
    cy.get(':nth-child(7) > .rn_Element1 > h3 > a').should('contain', 'Não recebi o código via SMS da minha conta banQi')
    cy.get(':nth-child(8) > .rn_Element1 > h3 > a').should('contain', 'Paguei a mesma parcela duas vezes na minha conta banQi: e agora?')
    cy.get(':nth-child(9) > .rn_Element1 > h3 > a').should('contain', 'Como abrir minha conta banQi?')
    cy.get(':nth-child(10) > .rn_Element1 > h3 > a').should('contain', 'O que é a chave Pix na minha conta banQi?')
    cy.get('[title="Página 3 de 5 selecionada"]').should('exist')
    cy.get('[title="Página 1 de 5"]').should('exist')
    cy.get('[title="Página 2 de 5"]').should('exist')
    cy.get('[title="Página 4 de 5"]').should('exist')
    cy.get('#rn_Paginator_2_PageLink_4').click()
});

it('Validar a categoria Pagamentos - Página 4', () => {
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('be.visible')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('contain', 'Pagamentos')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').click()
    cy.get('#rn_Paginator_2_PageLink_3').click()
    cy.get('#rn_Paginator_2_PageLink_4').click()
    cy.get('.list > a').should('be.visible')
    cy.get('.list > a').should('contain', 'Voltar')
    cy.get('.search').should('be.visible')
    cy.get('.search').should('contain', 'Pagamentos')
    cy.get(':nth-child(1) > .rn_Element1 > h3 > a').should('contain', 'Como cadastrar a chave Pix no banQi?')
    cy.get(':nth-child(2) > .rn_Element1 > h3 > a').should('contain', 'Depósito via boleto: qual o prazo para o valor estar na minha conta banQi?')
    cy.get(':nth-child(3) > .rn_Element1 > h3 > a').should('contain', 'Como visualizar meu histórico de transações no banQi?')
    cy.get(':nth-child(4) > .rn_Element1 > h3 > a').should('contain', 'Quais as tarifas, taxas e limites de transação do banQi?')
    cy.get(':nth-child(5) > .rn_Element1 > h3 > a').should('contain', 'Vantagens e diferenças entre DOC, TED e PIX na minha conta banQi')
    cy.get(':nth-child(6) > .rn_Element1 > h3 > a').should('contain', 'Esqueci meu PIN de segurança da minha conta banQi')
    cy.get(':nth-child(7) > .rn_Element1 > h3 > a').should('contain', 'Como faço um depósito por boleto na minha conta banQi?')
    cy.get(':nth-child(8) > .rn_Element1 > h3 > a').should('contain', 'O que é Pix na minha conta banQi?')
    cy.get(':nth-child(9) > .rn_Element1 > h3 > a').should('contain', 'Senha e PIN da conta banQi: qual a diferença?')
    cy.get(':nth-child(10) > .rn_Element1 > h3 > a').should('contain', 'Como colocar dinheiro no meu BanQi?')
    cy.get('[title="Página 4 de 5 selecionada"]').should('exist')
    cy.get('[title="Página 1 de 5"]').should('exist')
    cy.get('[title="Página 3 de 5"]').should('exist')
    cy.get('[title="Página 5 de 5"]').should('exist')
    cy.get('#rn_Paginator_2_PageLink_5').click()
});

it('Validar a categoria Pagamentos - Página 5', () => {
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('be.visible')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').should('contain', 'Pagamentos')
    cy.get('body.home:nth-child(2) div.container:nth-child(4) div.main:nth-child(1) div.faq div.faq__categories:nth-child(4) > a.faq__categories__category:nth-child(2)').click()
    cy.get('#rn_Paginator_2_PageLink_5').click()
    cy.get('.list > a').should('be.visible')
    cy.get('.list > a').should('contain', 'Voltar')
    cy.get('.search').should('be.visible')
    cy.get('.search').should('contain', 'Pagamentos')
    cy.get(':nth-child(1) > .rn_Element1 > h3 > a').should('contain', 'Como altero meu PIN de segurança da minha conta banQi?')
    cy.get(':nth-child(2) > .rn_Element1 > h3 > a').should('contain', 'Como pedir a portabilidade da chave PIX para o banQi?')
    cy.get('[title="Página 5 de 5 selecionada"]').should('exist')
    cy.get('[title="Página 1 de 5"]').should('exist')
    cy.get('[title="Página 3 de 5"]').should('exist')
    cy.get('[title="Página 4 de 5"]').should('exist')
    cy.get('.list > a').click()
    cy.url().should('eq', 'https://casasbahia20.custhelp.com/app/home')
  });

});

