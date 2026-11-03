// En primer lugar, debemos importar el POM de la locación correspondiente.
import TodosPage from "../../support/pages/TodosPage.js";
//Creamos una instancia de la clase
const TODOS_PAGE = new TodosPage();
//Declaro variables.
const TASK_1 = "Present POM";
const TASK_2 = "Teach Cypress";


context("Example 01", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo#");
  });


  it("Test #1", () => {
    // Create a couple of tasks
    TODOS_PAGE.addTodo(TASK_1);
    TODOS_PAGE.addTodo(TASK_2);
    // Validate there exist a total of 4 tasks
    TODOS_PAGE.todoCount().should("eq", 4);


    // Toggle the third task
    TODOS_PAGE.clickTodoToggle(2);


    // Validate there exist a total of  3 tasks
    TODOS_PAGE.todoCount().should("eq", 3);


    // Open completed tasks tab
    TODOS_PAGE.clickCompletedLink();
  });
});