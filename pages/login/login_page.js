const { until } = require("selenium-webdriver")

class LoginHahaloloPage {
    constructor(driver) {
        this.driver = driver
    }

    async loginHalo(username, pwd, pin) {
        await this.clickLoginhahalolo()
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

    async clickLoginhahalolo() {
        const login = await this.driver.wait(until.elementLocated({ id: "platforms-halo"}))
        await login.click()
        // await Promise.any.driver.wait(until.elementLocated({id: "platforms-halo"}))
        // .then (Loginhahalolo ) => {login ()}
    }

    async enterUsername(username) {
        const pwdInput = await this.driver.wait(until.elementLocated({ id: "accountId"}))
        await pwdInput.sendKeys(username)
    }

    async enterPwd(pwd) {
        const loginBtn = await this.driver.wait(until.elementLocated({ id: "password"}))
        await loginBtn.sendKeys(pwd)
    }

    async clickLoginbtn() {
        const loginBtn = await this.driver.wait(until.elementLocated({ xpath: "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[2]/button"}))
        await loginBtn.click()
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