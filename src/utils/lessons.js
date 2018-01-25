const CONFIG = require('../../config/' + (process.env.NODE_ENV || 'development') + '.js')
const S = require('../../config/secrets.js')

module.exports = LESSONS = {
        jsEnv: {
            date:'19-01-2018',
            dirName: 'js-environment',
            endPoint: '/js-environment',
            title: 'Building a JS Development Environment',
            description: 'How to properly build a JS dev environment when starting a project.',
            socketConfig: {
                secret: S.jsEnvSecret,
                id: "ec200273f477d81a",
                url: CONFIG.socketIOServer
            },
        },
        ngRouting: {
            date:'25-01-2018',
            dirName: 'ng-routing',
            endPoint: '/ng-routing',
            title: 'Angular 2+ Advanced Routing',
            description: 'Advanced routing for Angular 2+ projects.',
            socketConfig: {
                secret: S.ngRouSecret,
                id: "d73c672bc304731c",
                url: CONFIG.socketIOServer
            },
        },
        unitTesting: {
            date:'26-01-2018',
            dirName: 'ng-testing',
            endPoint: '/ng-testing',
            title: 'Introduction to Unit Testing in Angular 2+',
            description: 'How to properly create test specs for Angular 2+ projects.',
            socketConfig: {
                secret: S.ngUTsSecret,
                id: "d6691f1e3836927a",
                url: CONFIG.socketIOServer
            },
        }
    }

