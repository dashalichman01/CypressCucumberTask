Feature: Login

  Background: 
    Given User is on the main page

  Scenario: Login standart user

    When User enter "<username>" and "<password>"
    And User click login button
    Then User is redirected to inventory page

    Examples:
      | username       | password      |
      | standard_user  | secret_sauce  |

  Scenario: Login without providing username and password

    When User click login button
    Then User should see "<message>"

    Examples:
      | message                            |
      | Epic sadface: Username is required |

  Scenario: Login witn wrong data

    When User enter "<username>" and "<password>"
    And User click login button
    Then User should see "<message>"

      Examples:
      | username      | password     | message                                                                  |
      | standard_user | 1111         | Epic sadface: Username and password do not match any user in this service|
      | user          | secret_sauce | Epic sadface: Username and password do not match any user in this service|      

  Scenario Outline: Logout

    When User is loggged in
    And User click burger menu button
    And User click logout button
    Then User is redirected to the login page


