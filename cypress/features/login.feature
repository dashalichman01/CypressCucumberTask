Feature: Login

  Background: 
    Given User is on the main page

  Scenario: Login standart user
    When User enter "standard_user" as username and "secret_sauce" as password
    And User click 'login' button
    Then User is redirected to inventory page

  Scenario: Login without providing username and password
    When User click 'login' button
    Then User should see "Epic sadface: Username is required" error message

  Scenario: Login witn wrong data
    When User enter "<username>" and "<password>"
    And User click 'login' button
    Then User should see "<message>" error message
      Examples:
      | username      | password     | message                                                                  |
      | standard_user | 1111         | Epic sadface: Username and password do not match any user in this service|
      | user          | secret_sauce | Epic sadface: Username and password do not match any user in this service|      

  Scenario: Logout
    When User is loggged in
    And User click 'burger menu' button
    And User click 'logout' button
    Then User is redirected to the login page


