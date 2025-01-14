const express = require('express');
const puppeteer = require('puppeteer');
const router = express.Router();
router.use(express.json());

// inject-grades
router.post('/', async (req, res, next) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://fullstack.instructure.com/courses/1172/gradebook', { waitUntil: 'networkidle0' });

    // actions (e.g., filtering and updating grades)
    await page.type('#student-names-filter', 'Test Student', { delay: 100 });
    await page.type('#assignments-filter', 'Block 6', { delay: 100 });
    await page.click('#assignments-filter option[value*="Grocery List"]');
    await page.click('.Grid__GradeCell__Content');
    await page.type('.active.editable', '5');
    await page.keyboard.press('Enter');

    res.send('Grade updated successfully!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while updating the grade.');
  } finally {
    await browser.close();
  }
});


module.exports = router;