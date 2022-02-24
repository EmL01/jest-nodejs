const request = require('supertest'),
    app = require('./app')

describe('[GET] [/] Get the root route', () => {
    test('Should return an object', async () => {
        const { body } = await request(app).get('/')
        expect(body).toEqual({ tested: true })
    })
})

describe('[GET] [/sum] Get the sum route', () => {
    test('Should add two numbers', async () => {
        const { body } = await request(app).get('/sum').send({ num1: 1, num2: 2 })
        expect(body).toEqual({ sum: 3 })
    })
})

describe('[GET] [/clone] Get the clone route', () => {
    test('Should clone an array', async () => {
        const array = [1, 2, 3]
        const { body } = await request(app).get('/clone').send({ array })
        expect(body).toEqual({ cloned: array })
    })
})