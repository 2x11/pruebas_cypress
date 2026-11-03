Feature: Pruebas de la API de Star Wars

Scenario: Validar que C-3PO sea Dorado y aparezca en 6 películas
    Given el personaje C-3PO está disponible
    When consulto sus datos
    Then su color de piel debe ser "gold"
    And debe aparecer en 6 películas