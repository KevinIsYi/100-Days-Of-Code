const expressJWT = require('express-jwt');
const authJwt = () => {
    const secret = process.env.SECRET;

    return expressJWT({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    })
        .unless({
            path: [
                {
                    url: /\/api\/v1\/products(.*)/,
                    methods: [
                        'GET',
                        'OPTIONS'
                    ]
                }, // Puede recibir varios objetos de este tipo
                {
                    url: /\/api\/v1\/categories(.*)/,
                    methods: [
                        'GET',
                        'OPTIONS'
                    ]
                },
                {
                    url: /\/public\/uploads(.*)/, 
                    methods: [ 
                        'GET',
                        
                    ]
                },
                '/api/v1/user/login',
                '/api/v1/user/register'
            ]
    });
};

const isRevoked = async(req, payload, done) => {
    if (!payload.isAdmin) {
        done(null, true);
    }
    else {
        done();
    }
};

module.exports = {
    authJwt
};