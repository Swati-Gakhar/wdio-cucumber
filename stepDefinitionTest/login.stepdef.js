//import {Given,When,Then} from 'cucumber';
const { Given, When, Then } = require('@wdio/cucumber-framework');


// Given(/^I am on the login page$/, function(){
//     browser.url("https://practicetestautomation.com/practice-test-login/");
// });

Given(/^I am on the login page$/, async() => {
    await browser.url("https://practicetestautomation.com/practice-test-login/");
});

// When(/^I log in with a default user$/, function(){
//     browser.$("//input[@name='username']").setValue("student");
//     browser.$("//input[@name='password']").setValue("Password123");
//     browser.$("//button[@id='submit']").click();
// });

When(/^I log in with a default user$/, async() => {
    await browser.$("//input[@name='username']").setValue("student");
    await browser.$("//input[@name='password']").setValue("Password123");
    await browser.$("//button[@id='submit']").click();
});

// Then(/^I shall be on the Success page$/, function(){
//     var strUrl =browser.getUrl();
//     console.log("******URL is : " + strUrl);
// });

Then(/^I shall be on the Success page$/, async() => {
    var strUrl =browser.getUrl();
    console.log("******URL is : " + strUrl);
});

// Given(/^I am on the login page$/, async() => {
//     await browser.url("https://practicetestautomation.com/practice-test-login/");
// });
// When(/^I log in with a invalid user$/, async() => {
//     await browser.$("//input[@name='username']").setValue("student");
//     await browser.$("//input[@name='password']").setValue("dump");
//     await browser.$("//button[@id='submit']").click();
// });
// Then(/^I shall get an error$/, async() => {
//     var error = await browser.$("//input[@name='username']").setValue("student");
//     await expect(error).toHaveTextContaining("Your username is invalid!");
// });