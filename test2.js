import { Selector } from 'testcafe';

fixture `Example page tests`
    .page `http://devexpress.github.io/testcafe/example`;
    

test('My name', async t => {
    const nameInput = Selector('#developer-name');
    await t
        //extend it with populate tc
        .typeText(nameInput, 'Alex Reign')
        .setNativeDialogHandler(() => true)
        .click('#populate')
//        .pressKey('enter')
        .expect(nameInput.value).eql('Peter Parker')
        .click('#submit-button')
}); 