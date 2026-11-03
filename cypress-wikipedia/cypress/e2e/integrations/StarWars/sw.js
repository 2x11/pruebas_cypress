import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"; 

/*describe('Starwars', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://swapi.py4e.com/api').as("baseUrl"); // Api de starwars
    })
    //copy and paste del ejercicio.
    beforeEach(() => {
    // Hook a nivel raíz
    cy.log('Root Before each');
    });*/

let c3po;

const baseUrl = "https://swapi.py4e.com/api";

//uso de gherking con cucumber
Given("el personaje C-3PO está disponible", () => {
    cy.request(baseUrl+"/people/2/").as("c-3po");
});

When("consulto sus datos", () => {
    cy.get("@c-3po").then((response) => {
        c3po = response.body;
    });
});

Then("su color de piel debe ser {string}", (color) => {
    expect(c3po.skin_color).to.equal(color);
});

Then("debe aparecer en {int} películas", (cantidadPeliculas) => {
    expect(c3po.films.length).to.equal(cantidadPeliculas);
});

// Ignorar errores de publicidad de Google que no afectan el test
//Cypress.on('uncaught:exception', (err) => {
//if (err.message.includes('adsbygoogle.push() error')) return false
//})