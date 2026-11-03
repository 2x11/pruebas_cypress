
context('Página de inicio', () => {

    beforeEach(() => {
    cy.visit('/');
    })
    it('debería cargar correctamente', () => {
    cy.get('input[name="UserName"]').type("UserName")
    cy.get("input[name='Password']").type("pwd")
    cy.get("#login").click();
    cy.contains("Welcome").should("exist")
    });
    
    });
    
    