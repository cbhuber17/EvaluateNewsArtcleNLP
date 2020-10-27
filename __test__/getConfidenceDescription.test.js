const formHandler = require('../src/client/js/formHandler');

describe("Verify the confidence description is correct based on input (string) number", () => {

    test("Confidence of -1", () => {
        const confidence_test_case = '-1';
        const expected = 'Unknown confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 0", () => {
        const confidence_test_case = '0';
        const expected = 'No confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 1", () => {
        const confidence_test_case = '1';
        const expected = 'Little confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 20", () => {
        const confidence_test_case = '20';
        const expected = 'Little confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 21", () => {
        const confidence_test_case = '21';
        const expected = 'Some confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 40", () => {
        const confidence_test_case = '40';
        const expected = 'Some confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 41", () => {
        const confidence_test_case = '41';
        const expected = 'Average confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 60", () => {
        const confidence_test_case = '60';
        const expected = 'Average confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 61", () => {
        const confidence_test_case = '61';
        const expected = 'Quite confident.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 80", () => {
        const confidence_test_case = '80';
        const expected = 'Quite confident.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 81", () => {
        const confidence_test_case = '81';
        const expected = 'Very confident.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 100", () => {
        const confidence_test_case = '100';
        const expected = 'Very confident.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 101", () => {
        const confidence_test_case = '101';
        const expected = 'Unknown confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 0 (int)", () => {
        const confidence_test_case = 0;
        const expected = 'No confidence.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Confidence of 100 (int)", () => {
        const confidence_test_case = 100;
        const expected = 'Very confident.';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })

    test("Random input", () => {
        const confidence_test_case = '1k9nxP0d3mdEcY';
        const expected = '';
        expect(formHandler.getConfidenceDescription(confidence_test_case)).toStrictEqual(expected);
    })
})