# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\PostRequest.spec.ts >> test post request using static data
- Location: tests\api\PostRequest.spec.ts:4:5

# Error details

```
Error: expect(received).toHaveProperty(path)

Expected path: "bookingid"
Received path: []

Received value: {"additionalneeds": "super bowls", "bookingdates": {"checkin": "2025-07-01", "checkout": "2025-07-05"}, "depositpaid": true, "firstname": "Jim", "lastname": "Brown", "totalprice": 1000}
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | 
  4  | test('test post request using static data',async ({request})=>{
  5  |    //request body
  6  |     const requestBody = {
  7  |         firstname: "Jim",
  8  |         lastname: "Brown",
  9  |         totalprice: 1000,
  10 |         depositpaid: true,
  11 |         bookingdates: {
  12 |             checkin: "2025-07-01",
  13 |             checkout: "2025-07-05",
  14 |         },
  15 |         additionalneeds: "super bowls",
  16 |     }
  17 | 
  18 |     //send post request
  19 | 
  20 |    const response=await request.post('/booking',{data:requestBody});
  21 |    
  22 |    const responseBody=await response.json();
  23 |    console.log(responseBody);
  24 | 
  25 |    //validate status
  26 |    expect(response.ok()).toBeTruthy();
  27 |    expect(response.status()).toBe(200);
  28 | 
  29 |    //validate response body attribute
> 30 |    expect(requestBody).toHaveProperty('bookingid');
     |                        ^ Error: expect(received).toHaveProperty(path)
  31 |    expect(requestBody).toHaveProperty('booking');
  32 |    expect(requestBody).toHaveProperty('booking.additionalneeds')
  33 | 
  34 |    //validate booking details
  35 | 
  36 |    const booking=responseBody.booking;
  37 | 
  38 |    expect(booking).toMatchObject({
  39 |      firstname: "Jim",
  40 |         lastname: "Brown",
  41 |         totalprice: 1000,
  42 |         depositpaid: true,
  43 |         additionalneeds: "super bowls",
  44 |    })
  45 | 
  46 |    //validate booking dates (nested json object
  47 | 
  48 |    expect(booking.bookingdates).toMatchObject({
  49 |             checkin: "2025-07-01",
  50 |             checkout: "2025-07-05",
  51 | 
  52 |    })
  53 | 
  54 | 
  55 | 
  56 | 
  57 | })
```