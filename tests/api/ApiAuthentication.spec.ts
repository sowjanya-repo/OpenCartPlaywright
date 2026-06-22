import{test,expect} from '@playwright/test'
import { Buffer } from 'buffer';
import fs from 'fs'
import process from 'process';

//1) No Auth (Public API)

test('Create test using no auth Api authentication',async({request})=>{

    const response= await request.get('https://jsonplaceholder.typicode.com/posts/1');
    const responseBody=response.json();

    expect(response.ok()).toBeTruthy();

    console.log(responseBody);
    
})

// 2. Basic Auth

test('Create test using Basic Auth',async({request})=>{
   
   const response=await request.get('https://httpbin.org/basic-auth/user/pass',{headers:{

    Authorization:'Basic' + Buffer.from('user:pass').toString('base64'),

   },
})

    
   expect(response.status()).toBe(200);

   const responseBody=await response.json();
    
   console.log(responseBody)


})

// 3. Bearer Token Auth (Get github user repositories)

test('Create a api request for bearer token',async({request})=>{

    const bearerToken=process.env.GITHUB_TOKEN;

    const response=await request.get('https://api.github.com/user/repos',{

        headers:{
            Authorization: `Bearer ${bearerToken}`
    }
    })

    expect(response.status()).toBe(200);
    const responseBody=await response.json();
    console.log(responseBody);

})
// 3.1. Bearer Token Auth (Get github user info)

test.only('Bearer token oAuth ',async({request})=>{

    const token="process.env.GITHUB_TOKEN";

    const response=await request.get('https://api.github.com/user',{headers:
        {
            Authorization: `Bearer ${token} `,
            'User-Agent':'playright',
        }
    })
    
    const responseBody= response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(responseBody);
    

})

// 4.1 API Key Auth
// Ref Link: https://www.weatherapi.com/docs/
// Returns current weather of city
//You need to signup and then you can find your API key under your account.
 //https://www.weatherapi.com/signup.aspx

//API Key (14 days trial)  
test('create a API request for API key authentication',async({request})=>{

    const response=await request.get('https://api.openweathermap.org/data/2.5/weather',{params:
        {
            
            q:'Delhi',
            appid:'fe9c5cddb7e01d747b4611c3fc9eaf2c'// <-- hardcoded API key
        }
    })
    expect(response.status()).toBe(200);
  const weather = await response.json();
  console.log(weather);

})



