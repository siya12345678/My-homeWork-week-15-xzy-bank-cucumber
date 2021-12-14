Feature: Bank Test

  As user I want to login into xyz-bank website

  @Smoke @Regression
  Scenario: BankManager should add customer successfully
    Given I am on homepage
    When I click on bank manager login tab
    And I click on add customer tab
    And I enter first name "siya"
    And I enter last name "patel"
    And I enter post code "HA0 2PR"
    And I click on add customer button
    Then I should see message customer added successfully"Customer added successfully with customer id :6"

   @Smoke @Sanity @Regression
    Scenario: Bank manager should open account successfully
      Given I am on homepage
      When I click on bank manager login tab
      And I click on add customer tab
      And I enter first name "siya"
      And I enter last name "patel"
      And I enter post code "HA0 2PR"
      And I click on add customer button
      Then I should see message customer added successfully"Customer added successfully with customer id :6"
      And  I click on open account
      And I enter customer name "6"
      And I enter currency "Pound"
      And I click on process button
      Then I should see Account created successfully "Account created successfully with account Number :1016"

      @Sanity @Regression
      Scenario: Customer should login and logout successfully
        Given I am on homepage
        When I click on bank manager login tab
        And I click on add customer tab
        And I enter first name "siya"
        And I enter last name "patel"
        And I enter post code "HA0 2PR"
        And I click on add customer button
        Then I should see message customer added successfully"Customer added successfully with customer id :6"
        And  I click on open account
        And I enter customer name "6"
        And I enter currency "Pound"
        And I click on process button
        Then I should see Account created successfully "Account created successfully with account Number :1016"
        And I click on homepage button
        And I click on customer login
        And I can search customer from drop down
        And I click on login button
        Then I should see logout tab and click on logout page

        @Sanity @Regression
        Scenario: Customer should deposit money successfully
          Given I am on homepage
          When I click on bank manager login tab
          And I click on add customer tab
          And I enter first name "siya"
          And I enter last name "patel"
          And I enter post code "HA0 2PR"
          And I click on add customer button
          Then I should see message customer added successfully"Customer added successfully with customer id :6"
          And  I click on open account
          And I enter customer name "6"
          And I enter currency "Pound"
          And I click on process button
          Then I should see Account created successfully "Account created successfully with account Number :1016"
          And I click on homepage button
          And I click on customer login
          And I can search customer from drop down
          And I click on login button
          And I click on deposit
          And I enter amount "100"
          And I click on deposit button last
          Then I should see deposit successfully "Deposit Successful"

          @Regression
          Scenario: Customer should withdraw money successfully
            Given I am on homepage
            When I click on bank manager login tab
            And I click on add customer tab
            And I enter first name "siya"
            And I enter last name "patel"
            And I enter post code "HA0 2PR"
            And I click on add customer button
            Then I should see message customer added successfully"Customer added successfully with customer id :6"
            And  I click on open account
            And I enter customer name "6"
            And I enter currency "Pound"
            And I click on process button
            Then I should see Account created successfully "Account created successfully with account Number :1016"
            And I click on homepage button
            And I click on customer login
            And I can search customer from drop down
            And I click on login button
            And I click on deposit
            And I enter amount "100"
            And I click on deposit button last
            Then I should see deposit successfully "Deposit Successful"
            And I click on homepage button
            And I click on customer login
            And I enter customer name "6"
            And I click on login button
            And I click on withdrawl
            And I enter withdrawl amount "50"
            And I click on withdraw button
            Then I should see transaction withdraw successfully "Transaction successful"












