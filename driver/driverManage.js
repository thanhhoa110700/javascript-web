const webdriver = require('selenium-webdriver')

class DriverManager {
    getDirver() {  
        const driver = new webdriver.Builder().forBrowser('chrome').build()
        driver.manage().setTimeouts( { implicit: 20000 } )
        driver.manage().window().maximize();
        return driver
    }

}

module.exports = DriverManager