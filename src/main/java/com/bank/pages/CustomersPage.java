package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomersPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public  CustomersPage(){

        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Deposit']")
    WebElement deposit;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement amount;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement depositButton;

    @CacheLookup
    @FindBy(xpath = "//span[@class='error ng-binding']")
    WebElement depositSuccessfully;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Withdrawl']")
    WebElement withDrawlTeb;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement withDrawlAmount;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Withdraw']")
    WebElement withDrawlButton;

    @CacheLookup
    @FindBy(xpath = "//span[@class='error ng-binding']")
    WebElement withDrawlSuccessfully;
    public void clickOnDeposit(){
        clickOnElement(deposit);
        log.info("click on deposit :" + deposit.toString());

    }
    public void enterAmount100(){
        sendTextToElement(amount,"100");
        log.info("enter amount 100 :" + amount.toString());
    }
    public void clickOnDepositButtonLast(){
        clickOnElement(depositButton);
        log.info("click on deposit button :" + depositButton.toString());
    }
    public void verifyDepositSuccessfully(String exp){
        verifyPage(exp,depositSuccessfully);
        log.info("verify deposit successfully : " + depositSuccessfully.toString());


    }
    public void clickOnWithDrawl(){

        clickOnElement(withDrawlTeb);
        log.info("click on withdrawl :" + withDrawlTeb.toString());
    }
    public void enterWithDrawlAmount50(){
        sendTextToElement(withDrawlAmount,"50");
        log.info("enter withdrawl amount 50 :" + withDrawlAmount.toString());

    }
    public void clickOnWithdrawButton(){

        clickOnElement(withDrawlButton);
        log.info("click on withdraw button :" + withDrawlButton.toString());
    }

    public void verifyWithdrawSuccessfully(String exp){

        verifyPage(exp,withDrawlSuccessfully);
        log.info("verify withdraw successfully :" + withDrawlSuccessfully.toString());
    }
}
