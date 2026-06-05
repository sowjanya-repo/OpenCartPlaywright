# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\PostRequestFromFaker.spec.ts >> create Post requesting using faker
- Location: tests\api\PostRequestFromFaker.spec.ts:5:5

# Error details

```
Error: expect(received).toMatchObject(expected)

- Expected  - 2
+ Received  + 2

  Object {
-   "checkin": "2026-47-03",
-   "checkout": "2026-47-08",
+   "checkin": "0NaN-aN-aN",
+   "checkout": "0NaN-aN-aN",
  }
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { faker, Faker } from '@faker-js/faker'
  3  | import {DateTime} from 'luxon';
  4  | 
  5  | test('create Post requesting using faker',async ({request})=>{
  6  | 
  7  |     const firstname=faker.person.firstName();
  8  |     const lastname=faker.person.lastName();
  9  |     const totalprice=faker.number.int({min:100,max:100});
  10 |     const depositpaid=faker.datatype.boolean();
  11 | 
  12 |     const checkindate=DateTime.now().toFormat('yyyy-mm-dd');
  13 |     const checkoutdate=DateTime.now().plus({day:5}).toFormat('yyyy-mm-dd');
  14 | 
  15 |     const additionalneeds="super bowls";
  16 | 
  17 |     //requestbody
  18 |     const requestBody={
  19 |             firstname:firstname,
  20 |             lastname:lastname,
  21 |             totalprice:totalprice,
  22 |             depositpaid:depositpaid,
  23 |             bookingdates:{
  24 |                 checkin:checkindate,
  25 |                 checkout:checkoutdate,
  26 |             },
  27 | 
  28 |             additionalneeds:additionalneeds,
  29 | 
  30 |     }
  31 | 
  32 |     //send post request
  33 | 
  34 |     const response=await request.post('/booking',{data:requestBody});
  35 |     const responseBody= await response.json();
  36 |     console.log(responseBody);
  37 | 
  38 |     //ststus validation
  39 |     expect(response.ok()).toBeTruthy();
  40 |     expect(response.status()).toBe(200);
  41 | 
  42 |     //validate response body attribute
  43 | 
  44 |     expect(responseBody).toHaveProperty('bookingid');
  45 |     expect(responseBody).toHaveProperty('booking');
  46 |     expect(responseBody).toHaveProperty('booking.additionalneeds');
  47 | 
  48 |     //validate booking attributes
  49 |         const booking=responseBody.booking;
  50 | 
  51 |         expect(booking).toMatchObject({
  52 |             firstname: requestBody.firstname,
  53 |         lastname: requestBody.lastname,
  54 |         totalprice: requestBody.totalprice,
  55 |         depositpaid: requestBody.depositpaid,
  56 |         additionalneeds: requestBody.additionalneeds
  57 |         })
  58 |          //validate booking dates (nested json object)
> 59 |         expect(booking.bookingdates).toMatchObject({
     |                                      ^ Error: expect(received).toMatchObject(expected)
  60 |             checkin: requestBody.bookingdates.checkin,
  61 |             checkout: requestBody.bookingdates.checkout,
  62 |         });
  63 | 
  64 | })
```