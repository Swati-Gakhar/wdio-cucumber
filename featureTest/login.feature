Feature: Performing a login

  Scenario Outline: As a user, I can log into the given website
    Given I am on the login page
    When I log in with a default username and password
    And I click the Submit button
    Then I shall be on the Success page