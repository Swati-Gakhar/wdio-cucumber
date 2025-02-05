const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username'); }
    get inputPassword () { return $('#password'); }
    get btnSubmit () { return $('button[id="submit"]'); }
    get postTitle () { return $('//h1[@class="post-title"]'); }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async openURL(url) {
        await browser.url(url);
    } 

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async clickSubmit() {
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
