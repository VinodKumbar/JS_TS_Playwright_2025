class LoginPage{
    constructor(page){
        this.page = page;
        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
        this.signInbtn = page.locator("#login");     

    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username, password){
        await  this.userName.fill(username);
        await  this.passWord.fill(password);
        await this.signInbtn.click();
        await page.waitForLoadState('networkidle');
    }
}
module.exports = {LoginPage}