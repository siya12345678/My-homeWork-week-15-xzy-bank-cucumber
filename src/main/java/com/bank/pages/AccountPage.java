package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public AccountPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//button[@ng-click='openAccount()']")
    WebElement openAccount;


    @CacheLookup
    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement customerSearch;

    @CacheLookup
    @FindBy(xpath = "//select[@id='currency']")
    WebElement currency;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement process;

    // By openAccount=By.xpath("//button[@ng-click='openAccount()']");
    //By customerSearch= By.xpath("//select[@id='userSelect']");//6
    //By currency=By.xpath("//select[@id='currency']");//Pound
    // By process=By.xpath("//button[@type='submit']");

    public void clickOnOpenAccount(){

        clickOnElement(openAccount);
        log.info("clicking on open account :" + openAccount.toString());
    }
    public void selectCustomerSearch(String customerName)  {

        selectFromDropDown(customerSearch,"6");
        log.info("select customer search :" + customerSearch.toString());

    }
    public void selectCurrency(String pound){

        selectFromDropDown(currency,"Pound");
        log.info("select currency :" + currency.toString());

    }
    public void clickOnProcessButton(){

        clickOnElement(process);
        log.info("clicking on process button :" +process.toString());
    }
    public void verifyPopWindowTextAndAccept(String exp){

        alertPopUpWindowAndVerifyText(exp);
        log.info("verify pop up window and text :") ;
    }
}
