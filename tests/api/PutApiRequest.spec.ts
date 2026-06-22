import{test,expect} from '@playwright/test';
import fs from 'fs';

function getDataFromJsonFile(filepath:string){
   return JSON.parse(fs.readFileSync(filepath,'UTF-8'));
}

test('Create a put request using json file path',async ({request})=>{

    const requestBody=getDataFromJsonFile('testData/post_request_body.json');

    const response=await request.post('/booking',{data:requestBody});
    const responseBody=await response.json();
    console.log(responseBody);
    

    //status validation
    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);

    //validate response body attribute
    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody).toHaveProperty('booking');
    expect(responseBody).toHaveProperty('booking.additionalneeds');

    //Validate booking details

    const booking=responseBody.booking;

    expect(booking).toMatchObject({
       firstname:requestBody.firstname,
        lastname: requestBody.lastname,
        totalprice: requestBody.totalprice,
        depositpaid: requestBody.depositpaid,
        additionalneeds: requestBody.additionalneeds

    })

   const bookingid= responseBody.bookingid;
   console.log("Booking id===>",bookingid);

   
    //2.Update using put request
    //token creation

    const tokenRequestBody=getDataFromJsonFile('testData/token_request_body.json');
    const tokenResponse=await request.post('/auth',{data:tokenRequestBody});

    expect(tokenResponse.ok()).toBeTruthy();
    expect(tokenResponse.status()).toBe(200)

    const tokenBody=await tokenResponse.json();
    const token=tokenBody.token;
    console.log('Token===>',token);

    const updateRequestBody=getDataFromJsonFile('testData/put_request_body.json');

    const updateResponse=await request.put(`/booking/${bookingid}`,{
        headers:{'cookie':`token=${token}`},
        data:updateRequestBody
    })
    
    expect(updateResponse.ok()).toBeTruthy();
    expect(updateResponse.status()).toBe(200);
    const updateResponseBody=await updateResponse.json();
    console.log(updateRequestBody);
    console.log('Booking details updated successfully...');
    
})