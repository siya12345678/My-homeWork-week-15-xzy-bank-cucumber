package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomerLoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public  CustomerLoginPage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement searchCustomer;

    @CacheLookup
    @FindBy(xpath = "//button[@class='btn btn-default']")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//span[@class='fontBig ng-binding']")
    WebElement logOut;
    public void searchCustomerFromDropDown(){

        selectFromDropDown(searchCustomer,"6");
        log.info("search customer from drop down :" + searchCustomer.toString());
    }
    public void clickOnLoginButton(){

        clickOnElement(loginButton);
        log.info("click on login button :" + loginButton.toString());
    }
    public void verifyLogoutTabAndClickOnLogoutPage(){
        Boolean isDisplay=driver.findElement(By.xpath("//button[@class='btn logout']")).isDisplayed();
        if(isDisplay){
            String exp="Siya Patel";
            verifyPage(exp,logOut);
            log.info("verify logout tab and click on logout page :" + logOut.toString());
        }
        else{
            System.out.println("logOut tab is not display");
        }
    }


}
