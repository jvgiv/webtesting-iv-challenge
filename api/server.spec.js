const request = require('supertest')

const server = require('./server.js')

describe('server', () => {

    it('sets env to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    }) 

    describe('POST', () => {
        it('should add a user and return a 200', () => {
            return request(server)
                .post({})
        })
    })
})