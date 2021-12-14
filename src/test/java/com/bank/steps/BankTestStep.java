package com.bank.steps;

import com.bank.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BankTestStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        System.out.println("I am on home page");
    }



    @When("^I click on bank manager login tab$")
    public void iClickOnBankManagerLoginTab() throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().clickOnBankManagerLogin();

    }

    @And("^I click on add customer tab$")
    public void iClickOnAddCustomerTab() throws InterruptedException{
        Thread.sleep(2000);
        new BankManagerLoginPage().clickOnAddCustomerTab();
    }


    @And("^I click on add customer button$")
    public void iClickOnAddCustomerButton() throws InterruptedException{
        Thread.sleep(2000);
        new AddCustomerPage().addCustomerButton();

    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname) throws InterruptedException  {
        Thread.sleep(2000);
        new AddCustomerPage().fillFistName(firstname);

    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastname)  {
        new AddCustomerPage().fillLastName(lastname);

    }

    @And("^I enter post code \"([^\"]*)\"$")
    public void iEnterPostCode(String postcode)  {
        new AddCustomerPage().fillPostCode(postcode);
            }

    @Then("^I should see message customer added successfully\"([^\"]*)\"$")
    public void iShouldSeeMessageCustomerAddedSuccessfully(String message) {
        new AddCustomerPage().verifyPopUpWindowAndClick(message);


    }


    @And("^I click on open account$")
    public void iClickOnOpenAccount() {
        new AccountPage().clickOnOpenAccount();
    }

    @And("^I enter customer name \"([^\"]*)\"$")
    public void iEnterCustomerName(String customername)  {
        new AccountPage().selectCustomerSearch(customername);
    }

    @And("^I enter currency \"([^\"]*)\"$")
    public void iEnterCurrency(String pound) {
       new AccountPage().selectCurrency(pound);
    }

    @And("^I click on process button$")
    public void iClickOnProcessButton() {
        new AccountPage().clickOnProcessButton();
    }


    @Then("^I should see Account created successfully \"([^\"]*)\"$")
    public void iShouldSeeAccountCreatedSuccessfully(String message1)  {
        new AccountPage().verifyPopWindowTextAndAccept(message1);

    }

    @And("^I click on homepage button$")
    public void iClickOnHomepageButton() {
        new HomePage().clickOnHomeButton();

    }

    @And("^I click on customer login$")
    public void iClickOnCustomerLogin() {
        new HomePage().clickOnCustomerLogin();

    }

    @And("^I can search customer from drop down$")
    public void iCanSearchCustomerFromDropDown() {
        new CustomerLoginPage().searchCustomerFromDropDown();
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new CustomerLoginPage().clickOnLoginButton();
    }

    @Then("^I should see logout tab and click on logout page$")
    public void iShouldSeeLogoutTabAndClickOnLogoutPage() {
        new CustomerLoginPage().verifyLogoutTabAndClickOnLogoutPage();
    }

    @And("^I click on deposit$")
    public void iClickOnDeposit() {
        new CustomersPage().clickOnDeposit();
    }

    @And("^I enter amount \"([^\"]*)\"$")
    public void iEnterAmount(String amount)  {
        new CustomersPage().enterAmount100();
    }

    @And("^I click on deposit button last$")
    public void iClickOnDepositButtonLast() {
        new CustomersPage().clickOnDepositButtonLast();

    }

    @Then("^I should see deposit successfully \"([^\"]*)\"$")
    public void iShouldSeeDepositSuccessfully(String message3)  {
        new CustomersPage().verifyDepositSuccessfully(message3);
    }

    @And("^I click on withdrawl$")
    public void iClickOnWithdrawl() {
        new CustomersPage().clickOnWithDrawl();
    }


    @And("^I enter withdrawl amount \"([^\"]*)\"$")
    public void iEnterWithdrawlAmount(String withdrawAmount)  {
        new CustomersPage().enterWithDrawlAmount50();

    }

    @And("^I click on withdraw button$")
    public void iClickOnWithdrawButton() {
        new CustomersPage().clickOnWithdrawButton();
    }

    @Then("^I should see transaction withdraw successfully \"([^\"]*)\"$")
    public void iShouldSeeTransactionWithdrawSuccessfully(String message4) {
       new CustomersPage().verifyDepositSuccessfully(message4);
    }
}
