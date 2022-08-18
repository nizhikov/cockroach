import {it, describe} from 'mocha';
import {readFileSync, readdirSync} from 'fs';
import {Field} from './field.js';
import {ProgRunner} from './runner.js';
import {equal} from 'assert';

describe('Prog runner tests', function() {
    it("All files should produce expected result", function() {
        var test_files = '../console/src/test/resources/progs/';

        var promise = Promise.resolve();

        readdirSync(test_files).forEach((file, index) => {
            var content = readFileSync(test_files + file, {encoding: 'utf-8'});
            var test_data = content.split(/\n\s*\n/); // 0 - init field, 1 - programm, 2 - expecting field.

            if (test_data.length < 3)
                throw 'Wrong data format';

            test_data[2] = test_data[2].replace(/\n$/, '');

            var f = new Field(test_data[0]);

            promise = promise.then(() => {
                var runner = new ProgRunner(f, test_data[1]);
                runner.delay = 0;

                return runner.run().then((data) => {
                    console.log('✔ Checking[file='+ file + ']');

                    equal(f.toString(), test_data[2]);
                });
            });
        });

        return promise;
    });
});