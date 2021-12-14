$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("banktest.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "\r\nAs user I want to login into xyz-bank website",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6902247700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "BankManager should add customer successfully",
  "description": "",
  "id": "bank-test;bankmanager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter first name \"siya\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter last name \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter post code \"HA0 2PR\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see message customer added successfully\"Customer added successfully with customer id :6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 124292200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 2109792100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 2072395100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siya",
      "offset": 20
    }
  ],
  "location": "BankTestStep.iEnterFirstName(String)"
});
formatter.result({
  "duration": 2109220700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterLastName(String)"
});
formatter.result({
  "duration": 90222400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterPostCode(String)"
});
formatter.result({
  "duration": 102000900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 2075903500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 49
    }
  ],
  "location": "BankTestStep.iShouldSeeMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 21104800,
  "status": "passed"
});
formatter.after({
  "duration": 819554900,
  "status": "passed"
});
formatter.before({
  "duration": 3735002800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Bank manager should open account successfully",
  "description": "",
  "id": "bank-test;bank-manager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Smoke"
    },
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter first name \"siya\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter last name \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter post code \"HA0 2PR\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see message customer added successfully\"Customer added successfully with customer id :6\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on open account",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter customer name \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see Account created successfully \"Account created successfully with account Number :1016\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 2079144300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 2074383300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siya",
      "offset": 20
    }
  ],
  "location": "BankTestStep.iEnterFirstName(String)"
});
formatter.result({
  "duration": 2089329500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterLastName(String)"
});
formatter.result({
  "duration": 80498400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterPostCode(String)"
});
formatter.result({
  "duration": 102933500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 2065806200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 49
    }
  ],
  "location": "BankTestStep.iShouldSeeMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 15911300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOpenAccount()"
});
formatter.result({
  "duration": 94536100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 23
    }
  ],
  "location": "BankTestStep.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 500128300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 18
    }
  ],
  "location": "BankTestStep.iEnterCurrency(String)"
});
formatter.result({
  "duration": 203062600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnProcessButton()"
});
formatter.result({
  "duration": 74389200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankTestStep.iShouldSeeAccountCreatedSuccessfully(String)"
});
formatter.result({
  "duration": 16883700,
  "status": "passed"
});
formatter.after({
  "duration": 846029600,
  "status": "passed"
});
formatter.before({
  "duration": 3798507100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "bank-test;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Sanity"
    },
    {
      "line": 32,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter first name \"siya\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter last name \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter post code \"HA0 2PR\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should see message customer added successfully\"Customer added successfully with customer id :6\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on open account",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter customer name \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see Account created successfully \"Account created successfully with account Number :1016\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click on homepage button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on customer login",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I can search customer from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I should see logout tab and click on logout page",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 2080778900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 2085222500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siya",
      "offset": 20
    }
  ],
  "location": "BankTestStep.iEnterFirstName(String)"
});
formatter.result({
  "duration": 2092283100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterLastName(String)"
});
formatter.result({
  "duration": 90877800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterPostCode(String)"
});
formatter.result({
  "duration": 96299200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 2070748000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 49
    }
  ],
  "location": "BankTestStep.iShouldSeeMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 10585600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOpenAccount()"
});
formatter.result({
  "duration": 94758200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 23
    }
  ],
  "location": "BankTestStep.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 483943700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 18
    }
  ],
  "location": "BankTestStep.iEnterCurrency(String)"
});
formatter.result({
  "duration": 195394500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnProcessButton()"
});
formatter.result({
  "duration": 76176600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankTestStep.iShouldSeeAccountCreatedSuccessfully(String)"
});
formatter.result({
  "duration": 10817200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnHomepageButton()"
});
formatter.result({
  "duration": 109236200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnCustomerLogin()"
});
formatter.result({
  "duration": 85598900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iCanSearchCustomerFromDropDown()"
});
formatter.result({
  "duration": 461645000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 84762800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iShouldSeeLogoutTabAndClickOnLogoutPage()"
});
formatter.result({
  "duration": 401283900,
  "status": "passed"
});
formatter.after({
  "duration": 787444200,
  "status": "passed"
});
formatter.before({
  "duration": 3740858300,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "bank-test;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@Sanity"
    },
    {
      "line": 53,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter first name \"siya\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter last name \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter post code \"HA0 2PR\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should see message customer added successfully\"Customer added successfully with customer id :6\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "I click on open account",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I enter customer name \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I should see Account created successfully \"Account created successfully with account Number :1016\"",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I click on homepage button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click on customer login",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I can search customer from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on deposit",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on deposit button last",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I should see deposit successfully \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 2074508900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 2066977200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siya",
      "offset": 20
    }
  ],
  "location": "BankTestStep.iEnterFirstName(String)"
});
formatter.result({
  "duration": 2092738700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterLastName(String)"
});
formatter.result({
  "duration": 90241300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterPostCode(String)"
});
formatter.result({
  "duration": 90803500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 2076852700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 49
    }
  ],
  "location": "BankTestStep.iShouldSeeMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 10536900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOpenAccount()"
});
formatter.result({
  "duration": 74651600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 23
    }
  ],
  "location": "BankTestStep.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 468130200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 18
    }
  ],
  "location": "BankTestStep.iEnterCurrency(String)"
});
formatter.result({
  "duration": 202905200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnProcessButton()"
});
formatter.result({
  "duration": 91874500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankTestStep.iShouldSeeAccountCreatedSuccessfully(String)"
});
formatter.result({
  "duration": 10986700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnHomepageButton()"
});
formatter.result({
  "duration": 103230300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnCustomerLogin()"
});
formatter.result({
  "duration": 90364900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iCanSearchCustomerFromDropDown()"
});
formatter.result({
  "duration": 466680000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 87547200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnDeposit()"
});
formatter.result({
  "duration": 365681200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "BankTestStep.iEnterAmount(String)"
});
formatter.result({
  "duration": 386349200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnDepositButtonLast()"
});
formatter.result({
  "duration": 73719000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 35
    }
  ],
  "location": "BankTestStep.iShouldSeeDepositSuccessfully(String)"
});
formatter.result({
  "duration": 34775500,
  "status": "passed"
});
formatter.after({
  "duration": 819225800,
  "status": "passed"
});
formatter.before({
  "duration": 3840065800,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-test;customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 77,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I enter first name \"siya\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I enter last name \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I enter post code \"HA0 2PR\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I should see message customer added successfully\"Customer added successfully with customer id :6\"",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I click on open account",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I enter customer name \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I enter currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I should see Account created successfully \"Account created successfully with account Number :1016\"",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "I click on homepage button",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I click on customer login",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I can search customer from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click on deposit",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click on deposit button last",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I should see deposit successfully \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "I click on homepage button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click on customer login",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I enter customer name \"6\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on withdrawl",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I enter withdrawl amount \"50\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click on withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I should see transaction withdraw successfully \"Transaction successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 101100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 2064542500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 2079871200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siya",
      "offset": 20
    }
  ],
  "location": "BankTestStep.iEnterFirstName(String)"
});
formatter.result({
  "duration": 2101873500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterLastName(String)"
});
formatter.result({
  "duration": 80213700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA0 2PR",
      "offset": 19
    }
  ],
  "location": "BankTestStep.iEnterPostCode(String)"
});
formatter.result({
  "duration": 84927300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 2079691200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 49
    }
  ],
  "location": "BankTestStep.iShouldSeeMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 21054000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOpenAccount()"
});
formatter.result({
  "duration": 92588800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 23
    }
  ],
  "location": "BankTestStep.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 470575800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 18
    }
  ],
  "location": "BankTestStep.iEnterCurrency(String)"
});
formatter.result({
  "duration": 191487100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnProcessButton()"
});
formatter.result({
  "duration": 78662600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankTestStep.iShouldSeeAccountCreatedSuccessfully(String)"
});
formatter.result({
  "duration": 7674400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnHomepageButton()"
});
formatter.result({
  "duration": 115648800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnCustomerLogin()"
});
formatter.result({
  "duration": 82094600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iCanSearchCustomerFromDropDown()"
});
formatter.result({
  "duration": 447558700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 84469000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnDeposit()"
});
formatter.result({
  "duration": 332438200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "BankTestStep.iEnterAmount(String)"
});
formatter.result({
  "duration": 399028300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnDepositButtonLast()"
});
formatter.result({
  "duration": 223019300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 35
    }
  ],
  "location": "BankTestStep.iShouldSeeDepositSuccessfully(String)"
});
formatter.result({
  "duration": 29383300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnHomepageButton()"
});
formatter.result({
  "duration": 30708000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnCustomerLogin()"
});
formatter.result({
  "duration": 60382800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 23
    }
  ],
  "location": "BankTestStep.iEnterCustomerName(String)"
});
formatter.result({
  "duration": 167824800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 64662300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnWithdrawl()"
});
formatter.result({
  "duration": 69620000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 26
    }
  ],
  "location": "BankTestStep.iEnterWithdrawlAmount(String)"
});
formatter.result({
  "duration": 386648200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnWithdrawButton()"
});
formatter.result({
  "duration": 59755800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 48
    }
  ],
  "location": "BankTestStep.iShouldSeeTransactionWithdrawSuccessfully(String)"
});
formatter.result({
  "duration": 30792100,
  "status": "passed"
});
formatter.after({
  "duration": 813926100,
  "status": "passed"
});
});