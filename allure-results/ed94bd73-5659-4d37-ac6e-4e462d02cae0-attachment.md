# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\ApiAuthentication.spec.ts >> Create test using Basic Auth
- Location: tests\api\ApiAuthentication.spec.ts:16:6

# Error details

```
SyntaxError: Unexpected token '<', "<html>
<h"... is not valid JSON
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { Buffer } from 'buffer';
  3  | import fs from 'fs'
  4  | 
  5  | test('Create test using no auth Api authentication',async({request})=>{
  6  | 
  7  |     const response= await request.get('https://jsonplaceholder.typicode.com/posts/1');
  8  |     const responseBody=response.json();
  9  | 
  10 |     expect(response.ok()).toBeTruthy();
  11 | 
  12 |     console.log(responseBody);
  13 |     
  14 | })
  15 | 
  16 | test.only('Create test using Basic Auth',async({request})=>{
  17 |    
  18 |    const response=await request.get('https://httpbin.org/basic-auth/user/pass',{headers:{
  19 | 
  20 |     Authorization:'Basic' + Buffer.from('user:pass').toString('base64')
  21 | 
  22 |    }})
  23 | 
> 24 |    const responseBody=await response.json();
     |                       ^ SyntaxError: Unexpected token '<', "<html>
  25 |     
  26 |    expect(response.ok()).toBeTruthy();
  27 |    expect(response.status()).toBe(200)
  28 | 
  29 |    console.log(responseBody)
  30 | 
  31 | 
  32 | })
  33 | 
  34 | //Bearer Token
  35 | 
  36 | //test('Create a ')
```