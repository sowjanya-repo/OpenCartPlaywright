# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\GetApiRequest.spec.ts >> Get booking details by ID-path paramenter 
- Location: tests\api\GetApiRequest.spec.ts:3:5

# Error details

```
SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test('Get booking details by ID-path paramenter ',async ({request})=>{
  4  | 
  5  |     const bookingid=1;
  6  | 
  7  |     //sending get request along with path parameter
  8  |     const response=await request.get(`/booking,${bookingid}`);
  9  | 
  10 |     
  11 |     //parse the response and print
> 12 |     const responseBody=await response.json();
     |                        ^ SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
  13 |     console.log(responseBody);
  14 | 
  15 |     //verify status
  16 |     expect(response.ok()).toBeTruthy();
  17 |     expect(response.status()).toBe(200);
  18 | 
  19 |     
  20 | 
  21 | })
```