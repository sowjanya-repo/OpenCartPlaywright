# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\PatchApiRequest.spec.ts >> Create a patch request using faker
- Location: tests\api\PatchApiRequest.spec.ts:6:5

# Error details

```
TypeError: The argument 'encoding' is invalid encoding. Received 'uft-8'
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import{faker} from '@faker-js/faker'
  3  | import{DateTime} from 'luxon'
  4  | import fs from 'fs'
  5  | 
  6  | test('Create a patch request using faker',async({request})=>{
  7  | 
  8  |     const firstname=faker.person.firstName();
  9  |     const lastname=faker.person.lastName();
  10 |     const totalprice=faker.number.int({min:100,max:1000});
  11 |     const depositpaid=faker.datatype.boolean();
  12 | 
  13 |     const checkindate=DateTime.now().toFormat('yyyy-MM-dd');
  14 |     const checkoutdate=DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');
  15 | 
  16 |     const additionalneeds='Super bowls';
  17 | 
  18 |     //requestbody
  19 | 
  20 |     const requestBody={
  21 | 
  22 |         firstname:firstname,
  23 |         lastname:lastname,
  24 |         totalprice:totalprice,
  25 |         depositpaid:depositpaid,
  26 |         bookingdates:{
  27 |             checkin:checkindate,
  28 |             checkout:checkoutdate,
  29 |         },
  30 | 
  31 |         additionalneeds:additionalneeds,
  32 | 
  33 |     }
  34 | 
  35 |     //send post request
  36 | 
  37 |     const response=await request.post('/booking',{data:requestBody});
  38 |     const responseBody=await response.json();
  39 |     console.log(responseBody);
  40 |     
  41 |     //status verification
  42 |     expect(response.ok()).toBeTruthy();
  43 |     expect(response.status()).toBe(200) ;
  44 | 
  45 |     const bookingid=responseBody.bookingid;
  46 |     console.log('Booking Id====>',bookingid);
  47 | 
  48 |     //2.Patch the post request
  49 |     // create a token
  50 | 
> 51 |     const tokenRequest=JSON.parse(fs.readFileSync('testData/token_request_body.json','uft-8'));
     |                                      ^ TypeError: The argument 'encoding' is invalid encoding. Received 'uft-8'
  52 | 
  53 |     const tokenResponse=await request.post('/auth',{data:tokenRequest});
  54 |     const tokenBody=await tokenResponse.json();
  55 | 
  56 |     expect(tokenResponse.ok()).toBeTruthy();
  57 |     expect(tokenResponse.status()).toBe(200);
  58 | 
  59 |     const token=tokenBody.token;
  60 |     console.log('Token===>',token);
  61 |     
  62 |     
  63 | })
  64 | 
```