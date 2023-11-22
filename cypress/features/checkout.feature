Feature: Checkout

    Background: 
        Given User is logged in      

    Scenario: Checkout with correct data

        When User add to cart product
        And User open cart 
        And User click checkout button
        And User enter data
        And click continue button
        And click finish button
        Then success "<message>" is displayed

        Examples:
        |message                  |
        |Thank you for your order!|

    Scenario: Checkout with no data
  
        And User open cart 
        And User click checkout button 
        And click continue button
        Then error "<message>" is displayed

        Examples:
        |message                      |
        |Error: First Name is required|

    Scenario: Checkout without postal code
 
        When User open cart 
        And User click checkout button 
        And user enter first name and last name
        And click continue button
        Then error "<message>" is displayed

        Examples:
        |message                       |
        |Error: Postal Code is required|
