const DriverManager = require("../../driver/driverManage");
const LoginHahaloloPage = require("../../pages/login/login_page");

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

    });
    
});