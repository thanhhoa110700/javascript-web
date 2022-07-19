const { until } = require("selenium-webdriver")

class LoginHahaloloPage {
    constructor(driver) {
        this.driver = driver
    }
    //Login hahalolo success 
    async loginHalo(username, pwd, pin) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        await this.clickContinue()
        await this.enterPincode(pin)
        await this.clickPinbtn()
        await this.clickNotifications()
        await this.clickAvtbtn()
        await this.clickLogout()
        await this.clickLogoutok()

    }
    // Login hahalolo fail username
    async loginUserfail(username, pwd) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        let noti 
        if (await this.driver.getCurrentUrl != "https://sb.halome.dev/"){
            noti = await this.clickText()
       }



    }
    // Login hahalolo fail password
    async loginPwdfail(username, pwd) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        let noti 
        if (await this.driver.getCurrentUrl != "https://sb.halome.dev/"){
            noti = await this.clickText()
    }

    }
    // Login hahalolo fail id pw
    async loginFailidpwd(username, pwd) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        let noti 
        if (await this.driver.getCurrentUrl != "https://sb.halome.dev/"){
            noti = await this.clickText()
    }

    }
    // Login hahalolo null 
    async loginFailnull(username, pwd) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        let noti 
        if (await this.driver.getCurrentUrl != "https://sb.halome.dev/"){
            noti = await this.clickText()
    }

    }
    // Login hahalolo null username
    async loginUsernull(username, pwd) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        let noti 
        if (await this.driver.getCurrentUrl != "https://sb.halome.dev/"){
            noti = await this.clickTextid()
    }

    }
    // Login hahalolo null password
    async loginPwdnull(username, pwd) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        let noti 
        if (await this.driver.getCurrentUrl != "https://sb.halome.dev/"){
            noti = await this.clickTextpwd()
    }

    }

    async loginNotyou(username, pwd) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        await this.clickNotyou()
      
       
    }
    async loginComeback(username, pwd) {
        await this.clickLoginhahalolo()
        await this.driver.sleep(2000)
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLoginbtn()
        await this.clickComeback()
      
       
    }
    

    async clickLoginhahalolo() {
        const login = await this.driver.wait(until.elementLocated({ id: "platforms-halo"}))
        await login.click()
    
    }

    async enterUsername(username) {
        await Promise.any([this.driver.wait(until.elementLocated({ id: "accountId"}))])
        .then((el) => {
            el.sendKeys(username) 
        }
        ).catch((err) => {
            console.log(err)
        })
    };
       
    
    async enterPwd(pwd) {
        // const loginPwd = await this.driver.wait(until.elementLocated({ id: "password"}))
        // await loginPwd.sendKeys(pwd)
        await Promise.any([this.driver.wait(until.elementLocated({ id: "password"}))])
        .then((el) => {
            el.sendKeys(pwd) 
        }
        ).catch((err) => {
            console.log(err)
        })
    }

    async clickLoginbtn() {
        const loginBtn = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[2]/button"}))
        await loginBtn.click();
    }

    async clickText() {
        const loginText = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[3]/div/div/div/div[2]/div/span"}))
        await loginText.getText();
    }

    async clickTextid() {
        const loginidText = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[1]/div/div/div/p/span"}))
        await loginidText.getText();
    }
    async clickTextpwd() {
        const loginText = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/p/span"}))
        await loginText.getText();
    }
    async clickContinue() {
        const continueBtn = await this.driver.wait(until.elementLocated({ id: "platforms-halo"}))
        await continueBtn.click()
    }
    async clickNotyou() {
        const notyouBtn = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div/div[2]/div/div/div[3]/div/p[2]"}))
        await notyouBtn.click()
    }
    async clickComeback() {
        const comeBack = await this.driver.wait(until.elementLocated({ xpath: " /html/body/div/div/div[2]/div/div/div[5]/h1"}))
        await comeBack.click()
    }
    
    async enterPincode(pin) {
        const pinCode = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div/div[2]/div/div/div[3]/div/div[1]/div[1]/input"}))
        await pinCode.sendKeys(pin)
    }

    async clickPinbtn() {
        const pinBtn = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div/div[2]/div/div/div[3]/div/div[2]/button/div"}))
        await pinBtn.click()
    }

    async clickNotifications() {
        const notificationsBtn = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div/div[3]/div/div/div[2]/button[2]"}))
        await notificationsBtn.click()
    }

    async clickAvtbtn() {
        const avtBtn = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div/div[1]/div/div/img"}))
        await avtBtn.click()
    }

    async clickLogout() {
        const logOut = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div/div[2]/div[2]/div/div/div/div[5]/div[6]"}))
        await logOut.click()
    }

    async clickLogoutok() {
        const logOutok = await this.driver.wait(until.elementLocated({ id: "modal-button-ok"}))
        await logOutok.click()
    }


}

module.exports = LoginHahaloloPage