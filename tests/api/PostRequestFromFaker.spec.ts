import{test,expect} from '@playwright/test'
import { faker, Faker } from '@faker-js/faker'
import {DateTime} from 'luxon';

test('create Post requesting using faker',async ({request})=>{

    const firstname=faker.person.firstName();
    const lastname=faker.person.lastName();
    const totalprice=faker.number.int({min:100,max:100});
    const depositpaid=faker.datatype.boolean();

    const checkindate=DateTime.now().toFormat('yyyy-MM-dd');
    const checkoutdate=DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');

    const additionalneeds="super bowls";

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
    const responseBody= await response.json();
    console.log(responseBody);

    //ststus validation
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //validate response body attribute

    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody).toHaveProperty('booking');
    expect(responseBody).toHaveProperty('booking.additionalneeds');

    //validate booking attributes
        const booking=responseBody.booking;

        expect(booking).toMatchObject({
            firstname: requestBody.firstname,
        lastname: requestBody.lastname,
        totalprice: requestBody.totalprice,
        depositpaid: requestBody.depositpaid,
        additionalneeds: requestBody.additionalneeds
        })
         //validate booking dates (nested json object)
        expect(booking.bookingdates).toMatchObject({
            checkin: requestBody.bookingdates.checkin,
            checkout: requestBody.bookingdates.checkout,
        });

})