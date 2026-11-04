# pruebas_cypress
Proyectos de práctica para aprender a automatizar pruebas con Cypress. Las pruebas visitan sitios web, interactúan con sus elementos y comprueban resultados. Algunas también consultan una API.

## ¿Qué hace cada proyecto?
- cypress-inicial: contiene ejemplos básicos de pruebas sobre una lista de tareas: agregar elementos, marcarlos como completados y filtrar la lista. El archivo example01.cy.js muestra esos ejercicios; también hay ejemplos oficiales de Cypress, como todo.cy.js.
- Cypress-POM: prueba la misma lista, pero organiza las acciones y selectores en una clase llamada TodosPage. Es un ejemplo del patrón Page Object Model (POM), que ayuda a separar los detalles de la página de los pasos de la prueba: example05.cy.js y TodosPage.js.
- cypress-login: intenta probar un formulario de inicio de sesión: completar usuario y contraseña, enviarlo y verificar que aparezca “Welcome”. El caso está en complementary01.cy.js.
- cypress-wikipedia: reúne ejemplos de navegación y búsqueda en Wikipedia, además de una prueba de API sobre el personaje C-3PO de Star Wars. Incluye una prueba de búsqueda en exampleWikipedia.cy.js y pasos de API definidos en sw.js, asociados al escenario de sw.feature.

## Tecnologías y conceptos
- Cypress 14: automatiza el navegador para ejecutar pruebas end-to-end y comprobar aplicaciones web. Es la dependencia principal en los package.json de los proyectos.
- JavaScript: se usa para escribir pruebas, objetos de página y configuración. Los archivos de configuración usan CommonJS; las pruebas también muestran sintaxis de módulos ES.
- Mocha y aserciones de Cypress/Chai: estructuras como describe, context, it y beforeEach organizan las pruebas; expresiones como .should('be.visible') comprueban los resultados.
- Selectores e interacción con el DOM: comandos como cy.get(), cy.contains(), .type() y .click() localizan elementos y actúan sobre ellos.
- Page Object Model (POM): en Cypress-POM, la clase TodosPage centraliza cómo encontrar y operar los elementos de la lista.
- Cucumber y Gherkin: el proyecto Wikipedia incluye el preprocesador de Cucumber y el bundler esbuild. El escenario se expresa con Given, When y Then en sw.feature; su configuración está en cypress.config.js.
- Pruebas de API HTTP: cy.request() consulta SWAPI y luego se verifican propiedades de la respuesta, como el color de piel y la cantidad de películas
