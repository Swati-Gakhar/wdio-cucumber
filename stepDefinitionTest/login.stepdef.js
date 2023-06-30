//import {Given,When,Then} from 'cucumber';
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the login page$/, async() => {
    await browser.url("https://practicetestautomation.com/practice-test-login/");
});

When(/^I log in with a default username and password$/, async() => {
    await browser.$("//input[@name='username']").setValue("student");
    await browser.$("//input[@name='password']").setValue("Password123");
});

When(/^I click the Submit button$/, async() => {
    await browser.$("//button[@id='submit']").click();
});

Then(/^I shall be on the Success page$/, async() => {
    //await expect($("//h1[@class='post-title']")).toHaveTextContaining("Logged In Successfully");
});