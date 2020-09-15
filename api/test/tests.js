const mocha = require('mocha');
const assert = require('assert');
const Roles = require('../models/roles.model');
const User = require('../models/user.model');
const Job = require('../models/job.model');

describe('saving records',function(){

    it('saves a record to db',function(){

        var char = new Roles({
            jobtype:'doc'
        });

        char.save().then(function(){
            assert(char.isNew===false);
           
        });

    });


});


describe('saving records of users',function(){

    it('saves a record to db',function(){

        var char = new User({
            firstname: 'abc',
            lastname: 'def',
            email: 'abc@gmail.com',
            password:'abcdef',
        });

        char.save().then(function(){
            assert(char.isNew===false);
           
        });

    });


});


describe('saving records of jobs',function(){

    it('saves a record to db',function(){

        var char = new Job({
            jobtype: 'docab',
            description: 'surgeon',
            company: 'workard',
            apply: 'www.workard.com',
        
        });

        char.save().then(function(){
            assert(char.isNew===false);
           
        });

    });


});
