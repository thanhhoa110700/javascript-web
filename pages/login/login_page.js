const { until } = require("selenium-webdriver")

class LoginHahaloloPage {
    constructor(driver) {
        this.driver = driver
    }

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
        const loginText = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[1]/div/div/div/p/span"}))
        await loginText.getText();
    }
    async clickTextpwd() {
        const loginText = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/p/span"}))
        await loginText.getText();
    }
    async clickContinue() {
        const continueBtn = await this.driver.wait(until.elementLocated({ id: "platforms-halo"}))
        await continueBtn.click()
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