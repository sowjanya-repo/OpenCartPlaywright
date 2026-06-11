import{test,expect} from '@playwright/test'
import fs from 'fs';

function getJsonData(filename:string){

    return JSON.parse(fs.readFileSync(filename,'utf-8'))

}

test('create a Delete request using json file',async ({request})=>{

    const requestBody=getJsonData('testData/post_request_body.json');

    const response=await request.post('/booking',{data:requestBody});
    const responseBody=await response.json();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody).toHaveProperty('booking');
    expect(responseBody).toHaveProperty('booking.additionalneeds');
    const bookingid=responseBody.bookingid;
    console.log('Bookingid===>',bookingid)

    expect(responseBody.booking).toMatchObject({
        firstname:requestBody.firstname,
        lastname: requestBody.lastname,
        totalprice: requestBody.totalprice,
        depositpaid: requestBody.depositpaid,
        additionalneeds: requestBody.additionalneeds

    })

    //2.Perform delete request
    //create token request

    const tokenRequest=getJsonData('testData/token_request_body.json');

    const tokenResponse=await request.post('/auth',{data:tokenRequest});

    expect(tokenResponse.ok()).toBeTruthy();
    expect(tokenResponse.status() ).toBe(200);
    
    const tokenBody=await tokenResponse.json();
    const token=await tokenBody.token;
    console.log('token===>',token)

    //sending put request
    const updateRequest=getJsonData('testData/put_request_body.json');

    const updateResponse=await request.put(`/booking/${bookingid}`,{
        headers:
           { 'cookie': `token=${token}`},
           data:updateRequest
    })

    expect(updateResponse.statusText()).toBe('OK');
    expect(updateResponse.status()).toBe(200)

    console.log('Updated request successfully...')

    //Delete request

    const deleteResponse=await request.delete(`/booking/${bookingid}`,{headers:{'cookie':`token=${token}`}});
    

    expect(deleteResponse.statusText()).toBe('Created');
    expect(deleteResponse.status()).toBe(201);
    console.log('Delete request completed successfully...')

    })
