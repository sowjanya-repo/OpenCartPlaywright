# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\ApiAuthentication.spec.ts >> Create test using no auth Api authentication
- Location: tests\api\ApiAuthentication.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "200"
Received: 200
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import fs from 'fs'
  3  | 
  4  | test('Create test using no auth Api authentication',async({request})=>{
  5  | 
  6  |     const response= await request.get('https://jsonplaceholder.typicode.com/posts/1');
  7  |     const responseBody=response.json();
  8  | 
  9  |     expect(response.ok()).toBeTruthy();
> 10 |     expect(response.status()).toBe('200');
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  11 | 
  12 |     console.log(responseBody);
  13 |     
  14 | 
  15 | })
```