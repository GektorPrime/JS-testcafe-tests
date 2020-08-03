import { Selector } from 'testcafe';

fixture `Example page tests`
    .page `http://devexpress.github.io/testcafe/example`;

test('My name', async t => {
    const nameInput = Selector('#developer-name');
    await t
        .typeText(nameInput, 'Alex Reign')
        .setNativeDialogHandler(() => true)
        .click('#populate')
        .expect(nameInput.value).eql('Peter Parker')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, Peter Parker!');
    
    const articleHeader = await Selector('.result-content').find('h1');
    // Obtain the text of the article header
    let headerText = await articleHeader.innerText;
}); 

test('Checkboxes', async t => {
    await t
        .click('#remote-testing')
        .click('#reusing-js-code') 
        .click('#background-parallel-testing') 
        .click('#continuous-integration-embedding') 
        .click('#traffic-markup-analysis');
});

test('Slider', async t => {
    const slider = Selector('.ui-slider-handle.ui-corner-all.ui-state-default');
    const x = slider.getStyleProperty('left');
    await t
        .click('#tried-test-cafe')
        .expect(x).eql('0px')
        .drag(slider, 360, 0, { offsetX: 10, offsetY: 10 })
        .expect(x).eql('360.656px');
});

test('Radio', async t => {
    await t
        .click('#windows')
        .click('#macos') 
        .click('#linux');
});

test('Interface', async t => {
    const interSelect = Selector('#preferred-interface');
    const interOption = interSelect.find('option');
    await t
        .click(interSelect)
        .click(interOption.withText('Both')) 
        .expect(interSelect.value).eql('Both');
});

test('Let us know', async t => {
    await t
        .typeText('#comments', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s')
});