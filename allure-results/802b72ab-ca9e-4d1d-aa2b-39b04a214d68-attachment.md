# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\PutApiRequest.spec.ts >> Create aput request using json file path
- Location: tests\api\PutApiRequest.spec.ts:8:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'readFileSync')
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import{fs} from 'fs';
  3  | 
  4  | function getDataFromJsonFile(filepath:string){
> 5  |    return JSON.parse(fs.readFileSync('filepath','UTF-8'));
     |                         ^ TypeError: Cannot read properties of undefined (reading 'readFileSync')
  6  | }
  7  | 
  8  | test('Create aput request using json file path',async ({request})=>{
  9  | 
  10 |     const respone=await request.post('/booking',{data:getDataFromJsonFile('testData/post_request_body.json')});
  11 |     const responseBody=await respone.json();
  12 |     console.log(responseBody);
  13 |     
  14 | 
  15 |     //status validation
  16 |     expect(responseBody.ok()).toBeTruthy();
  17 |     expect(responseBody.status()).toBe(200);
  18 | 
  19 |     //validate response body attribute
  20 |     expect(responseBody).toHaveProperty('bookingid');
  21 |     expect(responseBody).toHaveProperty('booking');
  22 |     expect(responseBody).toHaveProperty('booking.additionalneeds');
  23 | 
  24 |     //Validate booking details
  25 | 
  26 |     const booking=responseBody.booking;
  27 | 
  28 |     expect(booking).toMatchObject({
  29 |         firstname:responseBody.firstname,
  30 |         lastname:responseBody.lastname,
  31 |         totalprice:responseBody.totalprice,
  32 |         depositpaid:responseBody.depositpaid,
  33 | 
  34 |     })
  35 | 
  36 |    const bookingid= responseBody.bookingid;
  37 |    console.log("Booking id===>",bookingid);
  38 | 
  39 |    
  40 | 
  41 | 
  42 |     //request.get('/booking')  
  43 | 
  44 | })
```