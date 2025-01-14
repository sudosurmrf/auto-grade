const express = require('express');
const puppeteer = require('puppeteer');
require('dotenv').config();
const router = express.Router();
router.use(express.json());

// inject-grades
router.post('/', async (req, res, next) => {
  const { studentId, studentName, moduleNumber, grade } = req.body;
  console.log('Student Id: ', studentId);
  console.log('Student Name: ', studentName);
  console.log('Module: ', moduleNumber);
  console.log('Grade: ', grade);
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // canvas login page
    await page.goto('https://fullstack.instructure.com/login/canvas', { waitUntil: 'networkidle2' });
    //google OAUTH
    if(process.env.GOOGLE_OAUTH){
      await page.waitForSelector('.Button--primary');
      await page.click('.Button--primary');
      await page.keyboard.press('Enter');
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
    } else {
      //regular email / pw
      await page.waitForSelector('.ic-Input'); 
      const inputFields = await page.$$('.ic-Input'); // selects the ic-Input, theres 3 but we need 2
      if (inputFields.length < 2) {
        throw new Error('Login input fields not found');
      }
      await inputFields[0].type(process.env.FSA_EMAIL, { delay: 120 }); // types email
      await inputFields[1].type(process.env.FSA_PW, { delay: 100 }); // types pw
  
      //hits login
      await page.keyboard.press('Enter');
      await page.waitForNavigation({ waitUntil: 'networkidle2' }); // waiting for the completion first
    }
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