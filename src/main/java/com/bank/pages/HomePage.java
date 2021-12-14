package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public HomePage() {

        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Bank Manager Login']")
    WebElement bankMangerLogin;

    @CacheLookup
    @FindBy(xpath = "//button[@ng-click='customer()']")
    WebElement customerLogin;

    @CacheLookup
    @FindBy(xpath = "//button[@class='btn home']")
    WebElement homeButton;

    public void clickOnHomeButton() {

        clickOnElement(homeButton);
        log.info("click on home button :" + homeButton.toString());
    }

    public void clickOnCustomerLogin() {

        clickOnElement(customerLogin);
        log.info("click on costomer login : " + customerLogin.toString());
    }

    public void clickOnBankManagerLogin() {
        clickOnElement(bankMangerLogin);
        log.info("click on bank manager login :" + bankMangerLogin.toString());

    }
}
