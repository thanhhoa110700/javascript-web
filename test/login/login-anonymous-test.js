const DriverManager = require("../../driver/driverManage");
const LoginAnonymousPage = require("../../pages/login/login_anonymous_page");
const assert = require("assert");

describe('Login', function () {
    this.timeout(20000)
    let driverManager, driver
    let loginAnonymousPage

    beforeEach(async function () {
        driverManager = new DriverManager()
        driver = driverManager.getDirver()

        loginAnonymousPage = new LoginAnonymousPage(driver)
        await driver.get("https://sb.halome.dev/")
    });
    afterEach(async function () {
        await driver.quit()
    });

    it("login Anonymous success", async function () {
        let phone = "342929839"
        let otp = "000000"
        await loginAnonymousPage.loginAnonymous(phone, otp)

    })

    it("login Anonymous null phone", async function () {
        let phone = ""
        await loginAnonymousPage.loginAnonymousNullPhone(phone )

    })

    it("login Anonymous less five phone", async function () {
        let phone = "34292"
        await loginAnonymousPage.loginAnonymousFivePhone(phone )

    })

    it("login Anonymous otp fail", async function () {
        let phone = "342929839"
        let otp = "111111"
        await loginAnonymousPage.loginAnonymousOtpFail(phone, otp)


    })
    it("login Anonymous Characters fail", async function () {
        let phone = "@@@@@@@@"
        await loginAnonymousPage.loginAnonymousCharacters(phone)


    })
    it("login Anonymous Letter fail", async function () {
        let phone = "gaothui"
        await loginAnonymousPage.loginAnonymousLetter(phone)


    })
    it("login Anonymous First", async function () {
        let phone = "242929791"
        let otp = "000000"
        let name = "Kim A"
        await loginAnonymousPage.loginAnonymousFirst(phone, otp, name)


    })



});