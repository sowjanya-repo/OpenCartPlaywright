# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\PutApiRequest.spec.ts >> Create aput request using json file path
- Location: tests\api\PutApiRequest.spec.ts:8:5

# Error details

```
Error: expect(received).toMatchObject(expected)

- Expected  - 4
+ Received  + 4

  Object {
-   "depositpaid": undefined,
-   "firstname": undefined,
-   "lastname": undefined,
-   "totalprice": undefined,
+   "depositpaid": true,
+   "firstname": "Jim",
+   "lastname": "Brown",
+   "totalprice": 1000,
  }
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import fs from 'fs';
  3  | 
  4  | function getDataFromJsonFile(filepath:string){
  5  |    return JSON.parse(fs.readFileSync(filepath,'UTF-8'));
  6  | }
  7  | 
  8  | test('Create aput request using json file path',async ({request})=>{
  9  | 
  10 |     const requestBody=getDataFromJsonFile('testData/post_request_body.json');
  11 | 
  12 |     const response=await request.post('/booking',{data:requestBody});
  13 |     const responseBody=await response.json();
  14 |     console.log(responseBody);
  15 |     
  16 | 
  17 |     //status validation
  18 |     expect(response).toBeTruthy();
  19 |     expect(response.status()).toBe(200);
  20 | 
  21 |     //validate response body attribute
  22 |     expect(responseBody).toHaveProperty('bookingid');
  23 |     expect(responseBody).toHaveProperty('booking');
  24 |     expect(responseBody).toHaveProperty('booking.additionalneeds');
  25 | 
  26 |     //Validate booking details
  27 | 
  28 |     const booking=responseBody.booking;
  29 | 
> 30 |     expect(booking).toMatchObject({
     |                     ^ Error: expect(received).toMatchObject(expected)
  31 |         firstname:responseBody.firstname,
  32 |         lastname:responseBody.lastname,
  33 |         totalprice:responseBody.totalprice,
  34 |         depositpaid:responseBody.depositpaid,
  35 | 
  36 |     })
  37 | 
  38 |    const bookingid= responseBody.bookingid;
  39 |    console.log("Booking id===>",bookingid);
  40 | 
  41 |    
  42 | 
  43 | 
  44 |     //request.get('/booking')  
  45 | 
  46 | })
```