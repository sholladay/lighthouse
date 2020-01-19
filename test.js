import test from 'ava';
import lighthouse from '.';

test('lighthouse()', (t) => {
    t.notThrows(lighthouse, 'Fix all module errors.');
});
