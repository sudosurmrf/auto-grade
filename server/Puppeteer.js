const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // launches in non-headless so we can see whats happening.
  const page = await browser.newPage();

  try {
    await page.goto('https://fullstack.instructure.com/courses/1059/gradebook', { waitUntil: 'networkidle0' });
    await page.waitForSelector('#student-names-filter');
    await page.waitForSelector('#assignments-filter');
    await page.waitForSelector('.Grid__GradeCell__Content');

    // input student name
    await page.type('#student-names-filter', 'Test Student', { delay: 100 });

    //input block 6, dynamic later
    await page.type('#assignments-filter', 'Block 6', { delay: 100 });

    // clicks option that has grocery list in it (just testing, will have dynamic adjustment later)
    await page.click('#assignments-filter option[value*="Grocery List"]');

    // clicks the grade cell
    await page.click('.Grid__GradeCell__Content');

    // inputs 5 and presses enter
    await page.type('.active.editable', '5');
    await page.keyboard.press('Enter');

    console.log('Interaction completed successfully.');

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await browser.close();
  }
})();
