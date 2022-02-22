const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', ()=>{

    test('It should respond with 200 success', async ()=>{
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200)
    });
});


describe('Test POST /launch', ()=>{
    const completeLaunchData = {
        "mission" : "Mission Exo Float",
        "rocket" : "BSA Experiment IS1",
        "target" : "Kepler-186 f",
        "launchDate" : 'April 4, 2032'
    }

    const launchDataWithoutDate = {
        "mission" : "Mission Exo Float",
        "rocket" : "BSA Experiment IS1",
        "target" : "Kepler-186 f",
    }

    const launchDataWithInvalidDate = {
        "mission" : "Mission Exo Float",
        "rocket" : "BSA Experiment IS1",
        "target" : "Kepler-186 f",
        "launchDate" : 'hello'
    }

    test('It should respond with 201 created', async()=>{
        const response = await request(app)
        .post('/launches')
        .send(completeLaunchData)
        .expect('Content-Type', /json/)
        .expect(201)
        
        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);
        
        expect(response.body).toMatchObject(launchDataWithoutDate);

    });
    test('It should catch missing required properties', async()=>{
        const response = await request(app)
        .post('/launches')
        .send(launchDataWithoutDate)
        .expect('Content-Type', /json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            message : 'Missing required property'
        })
    });
    test('It should catch invalid dates', async()=>{
        const response = await request(app)
        .post('/launches')
        .send(launchDataWithInvalidDate)
        .expect('Content-Type', /json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            message : 'Invalid launch date'
        })
    });
});