/// <reference types="cypress" />

describe('Cadastro de usuário', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios')

    });

    it('Acessar cadastro', () => {
        
        cy.get('[data-testid="nome"]').type('JamilyAlves')
        cy.get('[data-testid="email"]').type('jamilycruz@gmail.com')
        cy.get('[data-testid="password"]').type('teste')
        cy.get('[data-testid="checkbox"]').check()
        cy.get('[data-testid="cadastrar"]').click()

       
        
    });    
});