# What is this?

Scrapping tool to easily get information from websites.

It uses methods from Puppeteer and encapsulate them to certain objectives.

More info about Puppeteer: https://pptr.dev/

#Installation

Dependencie:
`npm i puppeteer --save`

Package:
`npm i easyscrapping --save`

Then...

```
const puppeteer = require( 'puppeteer' );
const scrapper = require( 'easyscrapping' ); 
const browser = await puppeteer.launch( { headless: false } );
const page = await browser.newPage();

let links = scrapper.getLinks(page, 'article > a', {visile: true});
links -> [url, url, ...]
```

## Options
```
getLinks(page, elementPath, option)
ex:
     page = "currentPage" -> Puppeteer
     elementPath = "div > div > div > span" -> Selector
     option = {visile: true} or {timeout:5000}

-> return href from all the span elements in the current page
```

```
getLinksTable(page, tablePath, elementPath, option)
ex:
     page = "currentPage" -> Puppeteer
     tablePath = ".uiTabBar" -> Selector
     elementPath = "ul > li > a" -> Selector
     option = {visile: true} or {timeout:5000}

-> return href from all the a elements in the current table
```

```
getTextContent(page, elementPath, option)
ex:
     page = "currentPage" -> Puppeteer
     elementPath = "div > div > div > span" -> Selector
     option = {visile: true} or {timeout:5000}

-> return textContent from all the span elements in the current page
```

```
getTextContentTable(page, tablePath, elementPath, option)
ex:
     page = "currentPage" -> Puppeteer
     tablePath = ".uiTabBar" -> Selector
     elementPath = "ul > li > a" -> Selector
     option = {visile: true} or {timeout:5000}

-> returns all the texContent from the element (elementPath) in the current table (tablePath)
```

```
getTitle(page, elementPath, option)
ex:
     page = "currentPage" -> Puppeteer
     elementPath = "div > div > div > span" -> Selector
     option = {visile: true} or {timeout:5000}

-> returns the Title from all the elements (elementPath) in the current page
```

```
clickButton(page, elementPath, option)
ex:
     page = "currentPage" -> Puppeteer
     elementPath = "div > div > div > span" -> Selector
     option = {visile: true} or {timeout:5000}

-> Select the button by its elementhPath and click it
```

```
input(page, elementPath, option, input)
ex:
     page = "currentPage" -> Puppeteer
     elementPath = "div > div > div > input" -> Selector
     option = {visile: true} or {timeout:5000}
     input = "string"

-> Select the input element by its elementhPath and input the string
```