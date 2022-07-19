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


    })
   
    it("Login hahalolo fail username", async function () {
        let username = "halome106@skyoi.th"
        let password = "admin@123"
        await loginHaloPage.loginUserfail(username, password)
        
    })

    it("Login hahalolo fail password", async function () {
        let username = "halome106@skyoi.tk"
        let password = "admin@124"
        await loginHaloPage.loginPwdfail(username, password)
    })

    it("Login hahalolo fail userpass", async function () {
        let username = "halome106@skyoi.th"
        let password = "admin@124"
        await loginHaloPage.loginFailidpwd(username, password)
    })


    it("Login hahalolo fail userpass null", async function () {
       
    })

    it("Login hahalolo fail user null", async function () {
        let username = ""
        let password = "admin@123"
        await loginHaloPage.loginUsernull(username, password)
    })
    
    it("Login hahalolo fail pwd null", async function () {
             let username = "halome106@skyoi.tk"
             let password = ""
        await loginHaloPage.loginPwdnull(username, password)
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