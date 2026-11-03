// Primer parámetro: nombre del contexto, segundo: función que agrupa los tests
describe('Example 01', () => {
    // beforeEach: se ejecuta antes de cada test dentro del contexto
    beforeEach(() => {
    cy.visit("https://example.cypress.io/todo"); // Se navega automáticamente a la baseUrl definida en cypress.json
    });
    
        // Caso de prueba individual
    it('Test #1', () => {
        let newTodoInput = cy.get(".new-todo");
        newTodoInput.type("My long task #1{enter}");
        newTodoInput.type("My long task #2{enter}");
        let btnCompleted = cy.contains('Completed')
        btnCompleted.click();
        /*cy.contains("Active").click();
        cy.contains("My long task #2").parents("ul.todo-list").click();
        cy. contains("Completed").click();*/
        });

        it('Test #3', () => {
        let newTodoInput = cy.get(".new-todo");
        newTodoInput.type("My long task #1{enter}");
        newTodoInput.type("My long task #2{enter}");
        //cy.parents("ul.todo-list");
        cy.contains('My long task #2');
        cy.get("ul.todo-list li:nth-child(4) div .toggle").click();
        //Cypress no tiene un método llamado toggle() para los elementos que obtiene con cy.get().
        cy.contains("Completed").click()
        });

    /*it('Test #2', () => {
        let newTodoInput = cy.get(".new-todo");
        newTodoInput.type("My long task #1{enter}");
        newTodoInput.type("My long task #2{enter}");
        newTodoInput.contains('My long task #2')
        cy.get("ul.todo-list li:nth-child(4) div .toggle").click();
        });*/

        it('Test #4: Assertions', () => {
            let longitud = 2;
            cy.get('.todo-list li').should('have.length',longitud)
            cy.get(".new-todo").type("My long task #1{enter}")
            cy.get('.todo-list li').should('have.length',++longitud)
            cy.contains('label', "My long task #1")
            .parent()
            .find("input.toggle")
            .check()
            .parent()
            .parent()
            .should("have.class","completed")
            })

            it.only('Test #5: ', () => {
                cy.get('.button-close').should('not.exist')
                cy.contains('close').should('not.exist')
                cy.get('.button-close')
                })
    
    });


