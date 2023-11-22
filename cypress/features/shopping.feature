Feature: Shopping

    Background: 
        Given User is logged in

    Scenario: Open item page

        When User click on item name
        Then cart item page is opened

    Scenario: Add product to cart

        When User add to cart product
        Then Remove button is displsyed
        And Cart badge is equal to 1

    Scenario: Remove product from inventory page

        When User add to cart product
        And User remove product
        Then Add to cart button is displayed

    Scenario: Remove product from cart

        When User add to cart product
        And User open cart 
        And User remove product from cart
        Then Cart is empty

    Scenario: Check cart after logout

        When User add to cart product
        And User logout
        And login with correct data
        And User open cart
        Then Cart badge is equal to 1

    Scenario: Check footer links

        When User click "<footerBtn>"
        Then User is redirected to "<page>"

        Examples:
        | footerBtn       | page                   | 
        | .social_twitter | twitter.com/saucelabs  |
        | .social_facebook| facebook.com/saucelabs |

