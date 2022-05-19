import { Given, When, Then } from "@wdio/cucumber-framework";
import chai, { assert } from "chai"

Given(/^Google page is opened$/, async function(){
    console.log(`Before opening browser...`);
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log(`After opening browser...`);
})

When(/Search with (.*)/, async function(SearchItem){
    console.log(`>> SearchItem: ${SearchItem}`);
    let ele = $(`[name=q]`)
    await ele.setValue(SearchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function(){
    let ele = await $(`<h3>`)
    ele.click()
    //await browser.pause(2000)
})

Then(/^URL should match (.*)$/, async function(ExpectedURL){
    console.log(`>> expectedURL: ${ExpectedURL}` );
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)
})

/**
 * Web Interactions
 */
Given(/^A web page is opened$/, async function(){
    await browser.url("/inputs")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    //await browser.maximizeWindow()
})

When(/^Perform web Interactions$/, async function (){
    /**
     * 1. Input box
     * Actions: 
     * 1. Type into input box
     * 2. Clear the fild and type or just addvalue
     * 3. Click and type
     * 4. Slow typiing
     *      
     * */
    let num = 12345
    let strNum = num.toString()
    let ele = await $(`[type=number]`)

    //await ele.setValue(strNum)
    await ele.click()

    for(let i =0; i<strNum.length; i++){
        let charStr = strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }

    //browser.pause(3000)
    await browser.debug()
})
