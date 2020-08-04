import { Selector, ClientFunction } from 'testcafe';

fixture `randomuser menu`
    .page `https://randomuser.me/`;
    
const getUrl = ClientFunction(() => {
    return document.location.href;
});

test('home', async t => {
    await t
        .click(Selector('a').withText('Home'))
        .expect(getUrl()).eql('https://randomuser.me/');
}); 
test('photos', async t => {
    await t
        .click(Selector('a').withText('User Photos'))
        .expect(getUrl()).eql('https://randomuser.me/photos');
}); 
test('documentation', async t => {
    await t
        .click(Selector('a').withText('Documentation'))
        .expect(getUrl()).eql('https://randomuser.me/documentation');
}); 
test('changelog', async t => {
    await t
        .click(Selector('a').withText('Change Log'))
        .expect(getUrl()).eql('https://randomuser.me/changelog');
}); 
test('ststs', async t => {
    await t
        .click(Selector('a').withText('Stats & Graphs'))
        .expect(getUrl()).eql('https://randomuser.me/stats');
}); 
test('donate', async t => {
    await t
        .click(Selector('a').withText('Donate'))
        .expect(getUrl()).eql('https://randomuser.me/donate');
}); 
test('copyright', async t => {
    await t
        .click(Selector('a').withText('Copyright Notice'))
        .expect(getUrl()).eql('https://randomuser.me/copyright');
}); 
test('photoshop', async t => {
    await t
        .click(Selector('a').withText('Photoshop Extension'))
        .expect(getUrl()).eql('https://randomuser.me/photoshop');
}); 