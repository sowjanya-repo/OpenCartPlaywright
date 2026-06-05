import{test,expect} from '@playwright/test'

test('Get booking details by ID-path paramenter ',async ({request})=>{

    const bookingid=1;

    //sending get request along with path parameter
    const response=await request.get(`/booking/${bookingid}`);

    
    //parse the response and print
    const responseBody=await response.json();
    console.log(responseBody);

    //verify status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

})

test.only('Get booking details by Name- query params', async ({ request }) => {

    const firstname='Jim';
    const lastname='Brown';

    const response=await request.get('/booking',{params:{
        firstname,
        lastname
    }})

    //validate status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);


    const responseBody=await response.json();
    console.log(responseBody);

    for(const item of responseBody){

        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe('number');
        expect(item.bookingid).toBeGreaterThan(0);

    }
    
    
})