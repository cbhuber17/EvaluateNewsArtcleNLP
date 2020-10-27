const checkURL = require('../src/client/js/checkurl');

describe("Verify URL is the correct format", () => {

    test("Valid HTTPS URL", () => {
        const url_test_case = 'https://website.com';
        const expected = [url_test_case];
        expect(checkURL.checkURL(url_test_case)).toStrictEqual(expected);
    })

    test("Valid HTTP URL", () => {
        const url_test_case = 'http://website.ca';
        const expected = [url_test_case];
        expect(checkURL.checkURL(url_test_case)).toStrictEqual(expected);
    })

    test("Missing P in HTTP", () => {
        const url_test_case = 'htt://website.com';
        expect(checkURL.checkURL(url_test_case)).toBe(null);
    })

    test("Missing colon after HTTPS", () => {
        const url_test_case = 'https//website.com';
        expect(checkURL.checkURL(url_test_case)).toBe(null);
    })

    test("Missing one slash after colon", () => {
        const url_test_case = 'https:/website.com';
        expect(checkURL.checkURL(url_test_case)).toBe(null);
    })

    test("Missing two slashes after colon", () => {
        const url_test_case = 'https:website.com';
        expect(checkURL.checkURL(url_test_case)).toBe(null);
    })

    test("Missing domain", () => {
        const url_test_case = 'https://.com';
        expect(checkURL.checkURL(url_test_case)).toBe(null);
    })

    test("Missing domain extension", () => {
        const url_test_case = 'https://website';
        expect(checkURL.checkURL(url_test_case)).toBe(null);
    })

    test("Test random characters", () => {
        const url_test_case = 'T5yUGYWGKNuxYOC0oEFfcMQUhItgmvQERfaRQHWfqvqHq6dy5Omyi';
        expect(checkURL.checkURL(url_test_case)).toBe(null);
    })
})