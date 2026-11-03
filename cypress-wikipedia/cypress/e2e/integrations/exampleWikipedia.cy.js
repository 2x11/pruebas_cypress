describe('Wikipedia', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://www.wikipedia.org'); // Visita Wikipedia global
    });

    it('Test 01 - BDD Expectations', () => {
        cy.get('#searchInput').should('be.visible')
        cy.get('#searchInput').type('Globant{enter}')
        cy.origin('https://es.wikipedia.org', () => {
            cy.get('img[src*="Globant_Logo"]').should('be.visible');
            cy.get('h1#firstHeading span.mw-page-title-main').should('be.visible').and('contain.text', 'Globant');
        });



        it('Test #02 - Implicit Wait', () => {
            cy.get('#searchInput').as('searchInput')
            cy.get('@searchInput').type('Globant{enter}')
            cy.wait(6000)
            cy.get('h1[id="firstHeading"] span[class="mw-page-title-main"]').as('title').should('be.visible').and('have.text', 'Globant')

        })
    });
})