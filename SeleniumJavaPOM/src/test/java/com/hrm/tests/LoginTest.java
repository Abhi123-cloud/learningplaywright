package com.hrm.tests;

import com.hrm.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest {

    @Test
    public void testSuccessfulLogin() {
        LoginPage loginPage = new LoginPage(driver);
        
        // OrangeHRM Default Credentials
        loginPage.login("Admin", "admin123");
        
        // Verify URL contains dashboard or check for a dashboard element
        String currentUrl = driver.getCurrentUrl();
        Assert.assertTrue(currentUrl.contains("dashboard"), "Login was not successful!");
    }
}
