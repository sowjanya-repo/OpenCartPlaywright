# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\postRequestFromJson.spec.ts >> Create post request with json file body
- Location: tests\api\postRequestFromJson.spec.ts:4:5

# Error details

```
Error: expect(received).toMatchObject(expected)

Matcher error: received value must be a non-null object

Received has value: undefined
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import fs from 'fs';
  3  | 
  4  | test('Create post request with json file body',async ({request})=>{
  5  | 
  6  |     //read data from json (request body)
  7  |     const jsonFile="testData/post_request_body.json";
  8  |     const requestBody=JSON.parse(fs.readFileSync(jsonFile,'utf-8'));
  9  | 
  10 |     //send post request
  11 | 
  12 |     const response=await request.post('/booking',{data:requestBody});
  13 |     const responseBody=await response.json();
  14 |     console.log(responseBody);
  15 | 
  16 |     //validate status
  17 | 
  18 |     expect(response.ok()).toBeTruthy();
  19 |     expect(response.status()).toBe(200);
  20 | 
  21 |     //validate response body attribute
  22 | 
  23 |     expect(responseBody).toHaveProperty('bookingid');
  24 |     expect(responseBody).toHaveProperty('booking');
  25 |     expect(responseBody).toHaveProperty('booking.additionalneeds');
  26 | 
  27 |     //validate booking details
  28 |     const booking=requestBody.booking;
> 29 |     expect(booking).toMatchObject({
     |                     ^ Error: expect(received).toMatchObject(expected)
  30 |         firstname:requestBody.firstname,
  31 |         lastname: requestBody.lastname,
  32 |         totalprice: requestBody.totalprice,
  33 |         depositpaid: requestBody.depositpaid,
  34 |         additionalneeds: requestBody.additionalneeds
  35 | 
  36 |     })
  37 | 
  38 |     //Validate booking dates(nested json object)
  39 | 
  40 |     expect(booking.bookingdates).toMatchObject({
  41 |             checkin: requestBody.bookingdates.checkin,
  42 |             checkout: requestBody.bookingdates.checkout,
  43 |     })
  44 | 
  45 | })
  46 | 
  47 | 
```