# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\PutApiRequest.spec.ts >> Create aput request using json file path
- Location: tests\api\PutApiRequest.spec.ts:8:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "created"
Received: "Internal Server Error"
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
  30 |     expect(booking).toMatchObject({
  31 |        firstname:requestBody.firstname,
  32 |         lastname: requestBody.lastname,
  33 |         totalprice: requestBody.totalprice,
  34 |         depositpaid: requestBody.depositpaid,
  35 |         additionalneeds: requestBody.additionalneeds
  36 | 
  37 |     })
  38 | 
  39 |    const bookingid= responseBody.bookingid;
  40 |    console.log("Booking id===>",bookingid);
  41 | 
  42 |    
  43 |     //2.Update using put request
  44 |     //token creation
  45 | 
  46 |     const tokenRequestBody=getDataFromJsonFile('testData/token_request_body.json');
  47 |     const tokenResponse=await request.post('/booking',{data:tokenRequestBody});
  48 | 
> 49 |     expect(tokenResponse.statusText()).toBe('created');
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  50 |     expect(tokenResponse.status()).toBe(201)
  51 | 
  52 |     const tokenBody=await tokenResponse.json();
  53 |     const token=tokenBody.token;
  54 |     console.log('Token===>',token);
  55 | 
  56 |     const updateRequestBody=getDataFromJsonFile('testData/put_request_body.json');
  57 | 
  58 |     const updateResponse=await request.put('/booking',{
  59 |         headers:{'cokkies':`token=${token}`},
  60 |         data:updateRequestBody
  61 |     })
  62 |     
  63 |     expect(updateResponse.statusText()).toBe('created');
  64 |     expect(updateResponse.status()).toBe(200);
  65 |     const updateResponseBody=await updateResponse.json();
  66 |     console.log(updateRequestBody);
  67 |     console.log('Booking details updated successfully...');
  68 |     
  69 |     
  70 |     
  71 | 
  72 | })
```