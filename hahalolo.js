const {Builder, By, until} = require ("selenium-webdriver")
const Locator = require ("./pages/login/login_page")
async function example() {
    let login = new Locator()

    const driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://sb.halome.dev/")
    driver.manage().window().maximize();
    // var element = await driver.findElement(By.id("platforms-halo"));
    var element = await driver.wait(until.elementLocated(By.id(login.get_button_login_with_hahalolo())),20000);
    await element.click();
    var element = await driver.wait(until.elementLocated(By.id("accountId")),20000);
    await element.sendKeys("halome106@skyoi.tk");
    var element = await driver.wait(until.elementLocated(By.id("password")),20000);
    await element.sendKeys("admin@123");
    var element = await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[2]/button"));
    await element.click();
    var element = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div/div[3]/div/button/div")),20000);
    await element.click();
    var element = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div/div[3]/div/div[1]/div[1]/input")),20000);
    await element.sendKeys("123456");
    var element = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div/div/div[3]/div/div[2]/button/div"),20000));
    await element.click();
    var element = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[3]/div/div/div[2]/button[2]")),2000);
    await element.click();
    var element = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[1]/div/div/img")),2000);
    await element.click();
    var element = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div[2]/div[2]/div/div/div/div[5]/div[6]")),2000);
    await element.click();
    var element = await driver.wait(until.elementLocated(By.id("modal-button-ok")),2000);
    await element.click();

}
example()
