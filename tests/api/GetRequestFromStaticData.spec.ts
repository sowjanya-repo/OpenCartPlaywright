
import {test,expect} from '@playwright/test';

test('create Get request using static data',async ({request})=>{

    const requestBody={

        firstname: "Jim",
        lastname: "Brown",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
            checkin: "2025-07-01",
            checkout: "2025-07-05",
        },
        additionalneeds: "super bowls",

    }

    const response=await request.get('/booking',{data:requestBody});
    const responseBody=await response.json();
    console.log(responseBody);

    //Validate the status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //Check response should not be empty

    expect(responseBody.length).toBeGreaterThan(0);

    for(const item of responseBody){
        expect(item).toHaveProperty('bookingid');

        expect(typeof item.bookingid).toBe('number');
        expect(item.bookingid).toBeGreaterThan(0);

    }


})