Feature: Checkout

    Background: 
        Given User is logged in      

    Scenario: Checkout with correct data
        When User add to cart product
        And User open cart 
        And User click 'checkout' button
        And User enter data
        And User click 'continue' button
        And User click 'finish' button
        Then Success message "Thank you for your order!" is displayed

    Scenario: Checkout with no data
        And User open cart 
        And User click 'checkout' button 
        And User click 'continue' button
        Then Error message "Error: First Name is required" is displayed

    Scenario: Checkout without postal code
        When User open cart 
        And User click 'checkout' button 
        And User enter first name and last name
        And User click 'continue' button
        Then Error message "Error: Postal Code is required" is displayed
