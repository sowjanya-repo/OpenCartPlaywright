# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\schemaVerification.spec.ts >> Schema Validation
- Location: tests\api\schemaVerification.spec.ts:5:5

# Error details

```
Error: expect: Property 'tobeTruthy' not found.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import Ajv from 'ajv';
  3  | 
  4  | 
  5  | test('Schema Validation',async({request})=>{
  6  | 
  7  |     const schema={
  8  |         type: 'object',
  9  |         properties: {
  10 |             firstName: { type: 'string' },
  11 |             lastName: { type: 'string' },
  12 |             city: { type: 'string' },
  13 |             state: { type: 'string' },
  14 |         },
  15 |         required: ['firstName', 'lastName', 'city', 'state'],
  16 |         additionalProperties: false,
  17 |     };
  18 | 
  19 | 
  20 |    const response=await request.get('https://mocktarget.apigee.net/json');
  21 |    const responseBody=await response.json();
  22 | 
  23 |    console.log(responseBody);
  24 | 
  25 |    const ajv=new Ajv();
  26 |    const validate=ajv.compile(schema);
  27 |    const isValid= validate(responseBody);
  28 | 
> 29 |    expect(isValid).tobeTruthy();
     |                   ^ Error: expect: Property 'tobeTruthy' not found.
  30 | 
  31 | })
```