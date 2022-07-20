const DriverManager = require("../../driver/driverManage");
const LoginHahaloloPage = require("../../pages/login/login_page");
const assert = require("assert");

describe('Login', function () {
    this.timeout(20000)
    let driverManager, driver
    let loginHaloPage

    beforeEach(async function () {
        driverManager = new DriverManager()
        driver = driverManager.getDirver()

        loginHaloPage = new LoginHahaloloPage(driver)
        await driver.get("https://sb.halome.dev/")
        

    });
    afterEach(async function () {
        await driver.quit()
      });


    it("Login hahalolo success", async function () {
        let username = "halome106@skyoi.tk"
        let password = "admin@123"
        let pin = "123456"
        await loginHaloPage.loginHalo(username, password, pin)


    })

    it("Login hahalolo fail username", async function () {
        let username = "halome106@skyoi.th"
        let password = "admin@123"
        let noti
        await loginHaloPage.loginUserfail(username, password)
        if (await driver.getCurrentUrl !== "https://sb.halome.dev/") {
            noti = await loginHaloPage.getText()
            assert.equal(noti,"Tên tài khoản hoặc mật khẩu không chính xác")
        }

    })

    it("Login hahalolo fail password", async function () {
        let username = "halome106@skyoi.tk"
        let password = "admin@124"
        let noti
        await loginHaloPage.loginPwdfail(username, password)
        if (await driver.getCurrentUrl !== "https://sb.halome.dev/") {
            noti = await loginHaloPage.getText()
            assert.equal(noti,"Tên tài khoản hoặc mật khẩu không chính xác")
        }

    })

    it("Login hahalolo fail userpass", async function () {
        let username = "halome106@skyoi.th"
        let password = "admin@124"
        let noti
        await loginHaloPage.loginFailidpwd(username, password)
        if (await driver.getCurrentUrl !== "https://sb.halome.dev/") {
            noti = await loginHaloPage.getText()
            assert.equal(noti,"Tên tài khoản hoặc mật khẩu không chính xác")
        }
    })


    it("Login hahalolo fail userpass null", async function () {
        let username = ""
        let password = ""
        let notifyUsername
        let notifyPwd
        await loginHaloPage.loginFailnull(username, password)
        if (await driver.getCurrentUrl !== "https://sb.halome.dev/") {
            notifyUsername = await loginHaloPage.getTextid()
            notifyPwd = await loginHaloPage.getTextpwd()
            assert.equal(notifyUsername,"Tên tài khoản là bắt buộc")
            assert.equal(notifyPwd,"Mật khẩu là bắt buộc")

        }
    })

    it("Login hahalolo fail user null", async function () {
        let username = ""
        let password = "admin@123"
        let noti
        await loginHaloPage.loginUsernull(username, password)
        if (await driver.getCurrentUrl !== "https://sb.halome.dev/") {
            noti = await loginHaloPage.getTextid()
            assert.equal(noti,"Tên tài khoản là bắt buộc")
        }
    })
//
    it("Login hahalolo fail pwd null", async function () {
             let username = "halome106@skyoi.tk"
             let password = ""
             let noti
        await loginHaloPage.loginPwdnull(username, password)
        if (await driver.getCurrentUrl !== "https://sb.halome.dev/") {
            noti = await loginHaloPage.getTextpwd()
            assert.equal(noti,"Mật khẩu là bắt buộc")
        }
    })

        it("Login hahalolo not you", async function () {
            let username = "halome106@skyoi.tk"
            let password = "admin@123"
            await loginHaloPage.loginNotyou(username, password)

    })

    it("Login hahalolo come back", async function () {
        let username = "halome106@skyoi.tk"
        let password = "admin@123"
        await loginHaloPage.loginComeback(username, password)

})
});