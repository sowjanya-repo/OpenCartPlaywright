import{test,expect} from '@playwright/test'
import{faker} from '@faker-js/faker'
import{DateTime} from 'luxon'
import fs from 'fs'

test('Create a patch request using faker',async({request})=>{

    const firstname=faker.person.firstName();
    const lastname=faker.person.lastName();
    const totalprice=faker.number.int({min:100,max:1000});
    const depositpaid=faker.datatype.boolean();

    const checkindate=DateTime.now().toFormat('yyyy-MM-dd');
    const checkoutdate=DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');

    const additionalneeds='Super bowls';

    //requestbody

    const requestBody={

        firstname:firstname,
        lastname:lastname,
        totalprice:totalprice,
        depositpaid:depositpaid,
        bookingdates:{
            checkin:checkindate,
            checkout:checkoutdate,
        },

        additionalneeds:additionalneeds,

    }

    //send post request

    const response=await request.post('/booking',{data:requestBody});
    const responseBody=await response.json();
    console.log(responseBody);
    
    //status verification
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200) ;

    const bookingid=responseBody.bookingid;
    console.log('Booking Id====>',bookingid);

    //2.Patch the post request
    // create a token

    const tokenRequest=JSON.parse(fs.readFileSync('testData/token_request_body.json','UTF-8'));

    const tokenResponse=await request.post('/auth',{data:tokenRequest});
    const tokenBody=await tokenResponse.json();

    expect(tokenResponse.ok()).toBeTruthy();
    expect(tokenResponse.status()).toBe(200);

    const token=tokenBody.token;
    console.log('Token===>',token);
    
    //Perform patch update

    const patchRequest=JSON.parse(fs.readFileSync('testData/patch_request_body.json','UTF-8'))

    const patchResponse=await request.patch(`/booking/${bookingid}`,{
        headers:{'cookie':`token=${token}`},
        data:patchRequest
    })

    const patchResponseBody=await patchResponse.json();

    expect(patchResponse.ok()).toBeTruthy();
    expect(patchResponse.status()).toBe(200);

    console.log(patchResponseBody);
    console.log('Booking details Patch updated successfully===> ');
    
    
    
    
})
