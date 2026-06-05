# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\PostRequest.spec.ts >> test post request using static data
- Location: tests\api\PostRequest.spec.ts:4:5

# Error details

```
SyntaxError: Unexpected token 'I', "Internal S"... is not valid JSON
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | 
  4  | test('test post request using static data',async ({request})=>{
  5  |    //request body
  6  |     const requestBody = {
  7  |     "bookingid": 4409,
  8  |     "booking": {
  9  |         "firstname": "Jim",
  10 |         "lastname": "Brown",
  11 |         "totalprice": 111,
  12 |         "depositpaid": true,
  13 |         "bookingdates": {
  14 |             "checkin": "2018-01-01",
  15 |             "checkout": "2019-01-01"
  16 |         },
  17 |         "additionalneeds": "Breakfast"
  18 |     }
  19 | }
  20 |     //send post request
  21 | 
  22 |    const response=await request.post('/booking',{data:requestBody});
  23 |    
> 24 |    const responseBody=await response.json();
     |                       ^ SyntaxError: Unexpected token 'I', "Internal S"... is not valid JSON
  25 |    console.log(responseBody);
  26 | 
  27 |    //validate status
  28 |    expect(response.ok()).toBeTruthy();
  29 |    expect(response.status()).toBe(200);
  30 | 
  31 |    //validate response body attribute
  32 |    expect(requestBody).toHaveProperty('bookingid');
  33 |    expect(requestBody).toHaveProperty('booking');
  34 |    expect(requestBody).toHaveProperty('booking.additionalneeds')
  35 | 
  36 |    //validate booking details
  37 | 
  38 |    const booking=responseBody.booking;
  39 | 
  40 |    expect(booking).toMatchObject({
  41 |      firstname: "Jim",
  42 |         lastname: "Brown",
  43 |         totalprice: 1000,
  44 |         depositpaid: true,
  45 |         additionalneeds: "super bowls",
  46 |    })
  47 | 
  48 |    //validate booking dates (nested json object
  49 | 
  50 |    expect(booking.bookingdates).toMatchObject({
  51 |             checkin: "2025-07-01",
  52 |             checkout: "2025-07-05",
  53 | 
  54 |    })
  55 | 
  56 | 
  57 | 
  58 | 
  59 | })
```