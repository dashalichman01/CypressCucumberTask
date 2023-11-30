Feature: Shopping

    Background: 
        Given User is logged in

    Scenario: Open item page
        When User click on item name
        Then Cart item page is opened

    Scenario: Add product to cart
        When User add to cart product
        Then 'Remove' button is displsyed
        And Cart badge is equal to 1

    Scenario: Remove product from inventory page
        When User add to cart product
        And User remove product
        Then 'Add to cart' button is displayed

    Scenario: Remove product from cart
        When User add to cart product
        And User open cart 
        And User remove product from cart
        Then Cart is empty

    Scenario: Check cart after logout
        When User add to cart product
        And User logout
        And User login with correct data
        And User open cart
        Then Cart badge is equal to 1

    Scenario: Check footer links
        When User click on "<socialMedia>" social media button
        Then User is redirected to "<page>"
        Examples:
        |socialMedia | page                   | 
        |Twitter     | twitter.com/saucelabs  |
        |Facebook    | facebook.com/saucelabs |

