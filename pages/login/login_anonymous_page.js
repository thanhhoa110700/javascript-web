const {until} = require("selenium-webdriver")
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
class LoginAnonymousPage {
    constructor(driver) {
        this.driver = driver
    }

    async loginAnonymous(phone, otp) {
        await this.clickLoginAnonymous()
        await this.driver.sleep(3000)
        await this.enterPhoneAnonymous(phone)
        await this.clickPhoneStart()
        await this.driver.sleep(2000)
        await this.enterOtp(otp)
        await this.clickSendToOtp()
        await this.driver.sleep(2000)
        await this.enterOtp(otp)
        await this.clickNotifications()
        await this.clickAvtbtn()
        await this.clickLogout()
        await this.clickLogoutok()


    }
    async loginAnonymousNullPhone(phone) {
        await this.clickLoginAnonymous()
        await this.enterPhoneAnonymous(phone)
    }

    async loginAnonymousFivePhone(phone) {
        await this.clickLoginAnonymous()
        await this.enterPhoneAnonymous(phone)
    }
    async loginAnonymousOtpFail(phone, otp) {
        await this.clickLoginAnonymous()
        await this.enterPhoneAnonymous(phone)
        await this.clickPhoneStart()
        await this.driver.sleep(2000)
        await this.clickSendToOtp()
        await this.driver.sleep(2000)
        await this.enterOtp(otp)
    }
    async loginAnonymousCharacters(phone) {
        await this.clickLoginAnonymous()
        await this.enterPhoneAnonymous(phone)
    }
    async loginAnonymousLetter(phone) {
        await this.clickLoginAnonymous()
        await this.enterPhoneAnonymous(phone)
    }

    async loginAnonymousFirst(phone, otp, name ) {
        await this.clickLoginAnonymous()
        await this.enterPhoneAnonymous(phone)
        await this.clickPhoneStart()
        await this.driver.sleep(2000)
        await this.enterOtp(otp)
        await this.enterName(name)
        await this.clickContinue()
        await this.clickNotifications()
       }







    async clickLoginAnonymous() {
        const LoginAnonymous = await this.driver.wait(until.elementLocated({id: "platforms-halome"}))
        await LoginAnonymous.click()
    }

    async enterPhoneAnonymous(phone) {
        const enterPhone = await this.driver.wait(until.elementLocated({id: "phone-login-form-input-phone"}))
        await enterPhone.sendKeys(phone)
    }

    async clickPhoneStart() {
        const enterPhone = await this.driver.wait(until.elementLocated({id: "phone-login-form-button-ok"}))
        await enterPhone.click()

    }

    async enterOtp(otp) {
        const enterOtp = await this.driver.wait(until.elementLocated({id: "phone-verify-form-input-1"}))
        await enterOtp.sendKeys(otp)
    }
    async enterName(name) {
        const enterName = await this.driver.wait(until.elementLocated({id: "phone-login-form-input"}))
        await enterName.sendKeys(name)
    }


    async clickSendToOtp() {
        const sendToOtp = await this.driver.wait(until.elementLocated({id: "phone-verify-form-button-request-sms"}))
        await sendToOtp.click()

    }
    async clickNotifications() {
        const notificationsBtn = await this.driver.wait(until.elementLocated({xpath: "/html/body/div/div/div[3]/div/div/div[2]/button[2]"}))
        await notificationsBtn.click()
    }
    async clickAvtbtn() {
        const avtBtn = await this.driver.wait(until.elementLocated({xpath: "/html/body/div/div/div[1]/div/div/img"}))
        await avtBtn.click()
    }

    async clickLogout() {
        const logOut = await this.driver.wait(until.elementLocated({xpath: "/html/body/div/div/div[2]/div[2]/div/div/div/div[5]/div[6]"}))
        await logOut.click()
    }

    async clickLogoutok() {
        const logOutok = await this.driver.wait(until.elementLocated({id: "modal-button-ok"}))
        await logOutok.click()
    }

    async clickContinue() {
        const Continue = await this.driver.wait(until.elementLocated({id: "phone-login-form-button-ok"}))
        await Continue.click()
    }


}

module.exports = LoginAnonymousPage