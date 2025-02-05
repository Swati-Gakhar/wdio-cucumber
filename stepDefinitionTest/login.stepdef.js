//import {Given,When,Then} from 'cucumber';
const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../features/pageobjects/login.page')

Given(/^I am on the login page$/, async() => {
    await loginPage.openURL("https://practicetestautomation.com/practice-test-login/")
});

When(/^I log in with a default username and password$/, async() => {
    await loginPage.login("student", "Password123")
});

When(/^I click the Submit button$/, async() => {
    await loginPage.clickSubmit();
});

Then(/^I shall be on the Success page$/, async() => {
    await expect(loginPage.postTitle).toHaveTextContaining("Logged In Successfully");
});