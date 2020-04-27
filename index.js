module.exports = {
    /**
     * getLinks -> returns all the links from the element (path) in the current page
     * ex:
     *      elementPath = "div > div > div > span" -> Selector
     *      page = "currentPage" -> Puppeteer
     *      option = {visile: true} or {timeout:5000}
     *      -> return href from all the span elements in the current page
     *
     * @param page
     * @param elementPath
     * @param option
     * @returns {Promise<*>}
     */
    getLinks : async function(page, elementPath, option){
        await page.waitForSelector(elementPath, option);
        return await page.$$eval(elementPath, nodes => nodes.map(n => n.href));
    },

    /**
     * getLinksTable -> returns all the links from the element (elementPath) in the current table (tablePath)
     * ex:
     *      tablePath = ".uiTabBar" -> Selector
     *      elementPath = "ul > li > a" -> Selector
     *      page = "currentPage" -> Puppeteer
     *      option = {visile: true} or {timeout:5000}
     *      -> return href from all the a elements in the current table
     *
     * @param page
     * @param tablePath
     * @param option
     * @param elementPath
     * @returns {Promise<*>}
     */
    getLinksTable : async function(page, tablePath, option, elementPath){
        await page.waitForSelector(tablePath, option);
        const table = await page.$(tablePath);
        return await table.$$eval(elementPath, nodes => nodes.map(n => n.href));
    },

    /**
     * getTextContent -> returns all the textContent from all the elements (path) in the current page
     * ex:
     *      elementPath = "div > div > div > span" -> Selector
     *      page = "currentPage" -> Puppeteer
     *      option = {visile: true} or {timeout:5000}
     *      -> return textContent from all the span elements in the current page
     * @param page
     * @param elementPath
     * @param option
     * @returns {Promise<*>}
     */
    getTextContent : async function(page, elementPath, option){
        await page.waitForSelector(elementPath, option);
        return await page.$$eval(elementPath, nodes => nodes.map(n => n.textContent));
    },

    /**
     * getTextContentTable -> returns all the texContent from the element (elementPath) in the current table (tablePath)
     * ex:
     *      tablePath = ".uiTabBar" -> Selector
     *      elementPath = "ul > li > a" -> Selector
     *      page = "currentPage" -> Puppeteer
     *      option = {visile: true} or {timeout:5000}
     *      -> return href from all the a elements in the current table
     *
     * @param page
     * @param tablePath
     * @param option
     * @param elementPath
     * @returns {Promise<*>}
     */
    getTextContentTable : async function(page, tablePath, option, elementPath){
        await page.waitForSelector(tablePath, option);
        const table = await page.$(tablePath);
        return await table.$$eval(elementPath, nodes => nodes.map(n => n.textContent));
    },

    /**
     * getTitle -> returns the Title from all the elements (path) in the current page
     * ex:
     *      elementPath = "div > div > div > span" -> Selector
     *      page = "currentPage" -> Puppeteer
     *      option = {visile: true} or {timeout:5000}
     *      -> return textContent from all the span elements in the current page
     *
     * @param page
     * @param elementPath
     * @param option
     * @returns {Promise<*>}
     */
    getTitle : async function(page, elementPath, option){
        await page.waitForSelector(elementPath, option);
        return await page.$$eval(elementPath, nodes => nodes.map(n => n.title));
    },

    /**
     * clickButton -> Select the button by its elementhPath and click it
     * ex:
     *      elementPath = "div > div > div > span" -> Selector
     *      page = "currentPage" -> Puppeteer
     *      option = {visile: true} or {timeout:5000}
     *
     * @param page
     * @param elementPath
     * @param option
     * @returns {Promise<void>}
     */
    clickButton : async function(page, elementPath, option){
        const button = await page.waitForSelector(elementPath, option);
        button.click();
    },

    /**
     * input -> Select the input element by its elementhPath and input the string
     * ex:
     *      elementPath = "div > div > div > input" -> Selector
     *      page = "currentPage" -> Puppeteer
     *      option = {visile: true} or {timeout:5000}
     *
     * @param page
     * @param elementPath
     * @param option
     * @param input
     * @returns {Promise<void>}
     */
    input : async function(page, elementPath, option, input){
        const element = await page.waitForSelector(elementPath, option);
        await element.type(input);
    }
}