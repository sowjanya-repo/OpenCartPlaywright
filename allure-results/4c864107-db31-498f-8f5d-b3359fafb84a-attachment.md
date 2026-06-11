# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\DeleteApiRequest.spec.ts >> create a Delete request using json file
- Location: tests\api\DeleteApiRequest.spec.ts:10:5

# Error details

```
Error: expect(received).toMatchObject(expected)

- Expected  - 1
+ Received  + 1

  Object {
    "additionalneeds": "super bowls",
    "depositpaid": true,
-   "firstname": undefined,
+   "firstname": "Jim",
    "lastname": "Brown",
    "totalprice": 1000,
  }
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import fs from 'fs';
  3  | 
  4  | function getJsonData(filename:string){
  5  | 
  6  |     return JSON.parse(fs.readFileSync(filename,'UTF-8'))
  7  | 
  8  | }
  9  | 
  10 | test('create a Delete request using json file',async ({request})=>{
  11 | 
  12 |     const requestBody=getJsonData('testData/post_request_body.json');
  13 | 
  14 |     const response=await request.post('/booking',{data:requestBody});
  15 |     const responseBody=await response.json();
  16 | 
  17 |     expect(response.ok()).toBeTruthy();
  18 |     expect(response.status()).toBe(200);
  19 | 
  20 |     expect(responseBody).toHaveProperty('bookingid');
  21 |     expect(responseBody).toHaveProperty('booking');
  22 |     expect(responseBody).toHaveProperty('booking.additionalneeds');
  23 | 
> 24 |     expect(responseBody.booking).toMatchObject({
     |                                  ^ Error: expect(received).toMatchObject(expected)
  25 |         firstname:responseBody.firstname,
  26 |         lastname: requestBody.lastname,
  27 |         totalprice: requestBody.totalprice,
  28 |         depositpaid: requestBody.depositpaid,
  29 |         additionalneeds: requestBody.additionalneeds
  30 | 
  31 |     })
  32 | 
  33 | })
```