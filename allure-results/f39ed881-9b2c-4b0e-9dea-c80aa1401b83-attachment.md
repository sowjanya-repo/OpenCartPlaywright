# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\GetRequestFromStaticData.spec.ts >> create Get request using static data
- Location: tests\api\GetRequestFromStaticData.spec.ts:4:5

# Error details

```
Error: expect(received).toHaveProperty(path)

Expected path: "bookingid"
Received path: []

Received value: [{"bookingid": 1}, {"bookingid": 2}, {"bookingid": 3}, {"bookingid": 4}, {"bookingid": 5}, {"bookingid": 6}, {"bookingid": 7}, {"bookingid": 8}, {"bookingid": 9}, {"bookingid": 10}, …]
```

# Test source

```ts
  1  | 
  2  | import {test,expect} from '@playwright/test';
  3  | 
  4  | test('create Get request using static data',async ({request})=>{
  5  | 
  6  |     const requestBody={
  7  | 
  8  |         firstname: "Jim",
  9  |         lastname: "Brown",
  10 |         totalprice: 1000,
  11 |         depositpaid: true,
  12 |         bookingdates: {
  13 |             checkin: "2025-07-01",
  14 |             checkout: "2025-07-05",
  15 |         },
  16 |         additionalneeds: "super bowls",
  17 | 
  18 |     }
  19 | 
  20 |     const response=await request.get('/booking',{data:requestBody});
  21 |     const responseBody=await response.json();
  22 |     console.log(responseBody);
  23 | 
  24 |     //Validate the status
  25 |     expect(response.ok()).toBeTruthy();
  26 |     expect(response.status()).toBe(200);
  27 | 
  28 |     //Validate response body attribute
> 29 |     expect(responseBody).toHaveProperty('bookingid');
     |                          ^ Error: expect(received).toHaveProperty(path)
  30 |     expect(responseBody).toHaveProperty('booking');
  31 |     expect(responseBody).toHaveProperty('booking.additionalneeds')
  32 |     
  33 | 
  34 |     const booking=responseBody.booking;
  35 |     expect(booking).toMatchObject({
  36 |         firstname:requestBody.firstname,
  37 |         lastname: requestBody.lastname,
  38 |         totalprice: requestBody.totalprice,
  39 |         depositpaid: requestBody.depositpaid,
  40 |         additionalneeds: requestBody.additionalneeds
  41 |         
  42 |     })  
  43 |     
  44 |       //validate booking dates (nested json object)
  45 |         expect(booking.bookingdates).toMatchObject({
  46 |             checkin: requestBody.bookingdates.checkin,
  47 |             checkout: requestBody.bookingdates.checkout,
  48 |         });
  49 | 
  50 | 
  51 | 
  52 | })
```