/**
 * EXPECTED GOAL:
 * Build notes application by understanding tests. Accordingly, implement API endpoints.
 * Simple backend based on a REST API with Node.js and Express and applying TDD (test driven development).
 * 
 * 
 * It is about covering the following specifications expressed as user stories:
 * 1. As a USER I want to be able to call the API, that is, I want to be able to have a local server to make an HTTP call and to return something to me.
 * 2. As a USER I want to be able to call the API to create notes.
 * 3. As a USER I want to be able to call the API to consult the notes.
 * 4. As a USER I want to be able to call the API to see a single note.
 * 5. As a USER I want to be able to call the API to bookmark a note.
 * 6. As a USER I want to be able to call the API to check the notes marked as favorites.
 * 
 * Project Structure:
 * 
 * The project is organized presenting the following structure of folders and files:
 * 
 * |- src
 *      |- routes
 *         base.js
 *         notes.js
 *      config.js
 *      mocks.js
 *      server.js
 *      router.js
 * 
 * !! DO NOT MODIFY THIS FILE !!
 * 
 * HINT: Head to ./src/server.js file implement express server.
 */

const server = require('./src/server');
const mocks = require("./src/mocks");
const { request } = require('supertest');

describe('NotesApp API', () => {

    let instance;

    beforeEach(() => {
        instance = server.start();
    });

    afterEach(() => {
        server.close();
        instance = null;
    });

    describe('/GET /', () => {
        it('it should GET a greet', () => {
            const expected = 'Hello world!';
            request(instance)
                .get('/')
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err;
                });
        });
    });

    describe('/GET /notes', () => {
        it('it should GET all notes', () => {
            request(instance)
                .get('/notes')
                .expect('Content-Type', /json/)
                .expect(200, mocks)
                .end((err, res) => {
                    if (err) throw err;
                });
        });
    });

    describe('/POST /notes', () => {
        it('it should POST a new note', () => {
            const body = {
                title: 'Remember todo 3',
                body: 'Ac lobortis velit posuere eget. Nulla facilisis purus nibh.',
                favorite: false
            };

            request(instance)
                .post('/notes')
                .send(body)
                .expect(201, body)
                .end((err, res) => {
                    if (err) throw err
                });
        });
    });

    describe('/POST /notes', () => {
        it('it should raise exception when POST a duplicated new note', () => {
            const body = {
                title: 'Lorem ipsum',
                body: 'Ac lobortis velit posuere eget. Nulla facilisis purus nibh.',
                favorite: false
            };
            const errorRes = {
                error: 400,
                message: "There is already a note with that title"
            };

            request(instance)
                .post('/notes')
                .send(body)
                .expect(400, errorRes)
                .end((err, res) => {
                    if (err) throw err
                });
        });
    });

    describe('/GET /notes/:title', () => {
        let expected = mocks.filter(item =>
            item.title.toLowerCase() === 'Lorem ipsum'.toLowerCase()
        );
        if (expected.length) expected = expected[0];

        it('it should GET a note filtered by title', () => {
            request(instance)
                .get('/notes/Lorem ipsum')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                });
        });
    });

    describe('/GET /notes/?favorite=true', () => {
        let expected = [
            {
                title: 'Note about something',
                body: 'Quisque pellentesque blandit viverra. Fusce sit amet vestibulum ipsum.',
                favorite: true
            },
            {
                title: 'Remember todo 2',
                body: 'Nulla facilisis purus nibh, ac lobortis velit posuere eget.',
                favorite: true
            }
        ];
        it('it should GET all notes marked as favorite', () => {
            request(instance)
                .get('/notes/?favorite=true')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                });
        });
    });

    describe('/PUT /notes/:title/?favorite=true', () => {
        let expected = {
            title: 'Lorem ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            favorite: true
        };

        it('it should PUT favorite attribute of a note filtered by title', () => {
            request(instance)
                .put('/notes/Lorem ipsum/?favorite=true')
                .expect('Content-Type', /json/)
                .expect(200, expected)
                .end((err, res) => {
                    if (err) throw err
                });
        });

        it('it should fail PUT', () => {
            request(instance)
                .put('/notes/Lorem ipsum')
                .expect('Content-Type', /json/)
                .expect(400)
                .end((err, res) => {
                    if (err) throw err
                });
        });
    });
});
