import { Selector, ClientFunction } from 'testcafe';

fixture `randomuser home page data validation`
    .page `https://randomuser.me/`;

const getUrl = ClientFunction(() => {
    return document.location.href;
});

test('Locate learn button and click it', async t => {
    const learnmore = Selector('#learnmore').exists;
    await t
        .expect(learnmore).ok()
        .click('#learnmore');
        //.expect(getUrl()).eql('https://randomapi.com/');
});

test('No empty fields', async t => {
    const name_val = Selector('#values_list').child(0).getAttribute('data-value');
    const email_val = Selector('#values_list').child(1).getAttribute('data-value');
    const birthday_val = Selector('#values_list').child(2).getAttribute('data-value');
    const address_val = Selector('#values_list').child(3).getAttribute('data-value');
    const phone_val = Selector('#values_list').child(4).getAttribute('data-value');
    const password_val = Selector('#values_list').child(5).getAttribute('data-value');
    await t
        .expect(name_val).notEql('', 'input is empty')
        .expect(email_val).notEql('', 'input is empty')
        .expect(birthday_val).notEql('', 'input is empty')
        .expect(address_val).notEql('', 'input is empty')
        .expect(phone_val).notEql('', 'input is empty')
        .expect(password_val).notEql('', 'input is empty');
});

test('Name contains two words', async t => {
    // const name_val = Selector('#values_list').child(0).getAttribute('data-value');
    const name_value = ClientFunction(() => {
        const n_v =  document.getElementById("values_list").childNodes[0].getAttribute('data-value');
        let n_arr = n_v.split(" ");
        if (n_arr.length === 2){
            return true;
        } else {
            return false;
        }         
    });
    await t
        .expect(name_value()).ok('passed');
        //.expect(name_value()).eql('ololo'); //debug line
});

test('Email contains @', async t => {
    const email_val = Selector('#values_list').child(1).getAttribute('data-value');
    await t
        .expect(email_val).contains('@', 'string is not an email')
        .expect(email_val).contains('.', 'string is not an email');
});

test('Phone number contains no letters', async t => {
    //const phone_val = Selector('#values_list').child(4).getAttribute('data-value');
    const phone_value = ClientFunction((str) => {
        const phone_val =  document.getElementById("values_list").childNodes[4].getAttribute('data-value');
        if (phone_val.match(/^[-()0-9]+$/)) {
            return true;
        } else{
            return false;
        }
      });        
    await t
        .expect( phone_value() ).ok( 'passed' );
});


// const name_count = Selector('#values_list').child('li').count;
// const name = Selector('#values_list').child(0);
// const email = Selector('#values_list').child(1);
// const birthday = Selector('#values_list').child(2);
// const address = Selector('#values_list').child(3);
// const phone = Selector('#values_list').child(4);
// const password = Selector('#values_list').child(5);
