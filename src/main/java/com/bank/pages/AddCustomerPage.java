package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddCustomerPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public AddCustomerPage(){

        PageFactory.initElements(driver,this);}

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement enterFistName;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Last Name']" )
    WebElement enterLastName;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Post Code']")
    WebElement postCode;

    @CacheLookup
    @FindBy(xpath = "//button[@class='btn btn-default']")
    WebElement addCustomerButton;

    @CacheLookup
    @FindBy(xpath = "//button[@class='btn btn-default']")
    WebElement homeButton;


    public void fillFistName(String firstname) {

        sendTextToElement(enterFistName, "Siya");
        log.info("fill first name :" + enterFistName.toString());
    }
    public void fillLastName(String lastname){

        sendTextToElement(enterLastName,"Patel");
        log.info("fill last name :" + enterLastName.toString());
    }
    public void fillPostCode(String postcode){

        sendTextToElement(postCode, "40001");
        log.info("fill post code :" + postCode.toString());
    }
    public void addCustomerButton()
    {

        clickOnElement(addCustomerButton);
        log.info("add customer button :" + addCustomerButton.toString());
    }
    public void verifyPopUpWindowAndClick(String exp){

        alertPopUpWindowAndVerifyText(exp);
        log.info("verify pop up window and click :");
    }
    public void clickOnHomeButton(){
        clickOnElement(homeButton);
        log.info("click on home page :" + homeButton.toString());

    }


}
