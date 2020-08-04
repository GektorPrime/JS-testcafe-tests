# JS-testcafe-tests
The set of tests to demonstrte Testcafe capabilities
[/devexpress/test.js](https://github.com/GektorPrime/JS-testcafe-tests/blob/master/devexpress/test.js) - test shows interaction capabilities on http://devexpress.github.io/testcafe/example page:
- test name input, test populate button, use assertation to check default name, submit
- go through all checkboxes
- test slider, assert the value after changing it
- go through all radio buttons
- open dropdown, select one item, assert expected selection
- input text, assert it

[randomuser](https://github.com/GektorPrime/JS-testcafe-tests/blob/master/randomuser) - set of tests for randomuser.org:
[test_menu.js](https://github.com/GektorPrime/JS-testcafe-tests/blob/master/randomuser/test_menu.js) - test clicks through main menu and checks if it's links are correct
[test_info_validation_home.js](https://github.com/GektorPrime/JS-testcafe-tests/blob/master/randomuser/test_info_validation_home.js) - set of tests for home page utilizing some client functions:
- Locate learn button and click it
- No empty fields in user info
- Name contains two words
- Email contains @
- Phone number contains no letters
- Date format validation
- Adress is alphanumeric
