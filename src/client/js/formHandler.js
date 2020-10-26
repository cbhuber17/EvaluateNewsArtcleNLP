// Helper functions
// TBD document functions

function getScoreTagDescription(score) {

    let description = '';

    switch (score) {
        case 'P+':
            description = 'Strong positive';
            break;
        case 'P':
            description = 'Positive';
            break;
        case 'NEU':
            description = 'Neutral';
            break;
        case 'N':
            description = 'Negative';
            break;
        case 'N-':
            description = 'Strong negative';
            break;
        case 'NONE':
            description = 'Without sentiment';
            break;
        default:
            description = '';
            break;
    }

    return description;
}

function getAgreementDescription(agreement) {

    let description = '';

    switch (agreement) {
        case 'AGREEMENT':
            description = 'The different elements in the article have the same polarity.';
            break;
        case 'DISAGREEMENT':
            description = 'There is disagreement between the different elements\' polarity in the article.';
            break;
        default:
            description = '';
            break;
    }

    return description;
}

function getSubjectivityDescription(subjectivity) {

    let description = '';

    switch (subjectivity) {
        case 'OBJECTIVE':
            description = 'The article does not have any subjectivity marks.';
            break;

        case 'SUBJECTIVE':
            description = 'The article has subjective marks.';
            break;

        default:
            description = '';
            break;
    }

    return description;

}

function getConfidenceDescription(confidence) {

    const confidence_num = parseInt(confidence);
    let description = '';

    if (confidence_num == 0) {
        description == 'No confidence.';
    }

    else if (confidence_num > 0 && confidence_num <= 20) {
        description = 'Little confidence.';
    }

    else if (confidence_num > 20 && confidence_num <= 40) {
        description = 'Some confidence.';
    }

    else if (confidence_num > 40 && confidence_num <= 60) {
        description = 'Average confidence.';
    }

    else if (confidence_num > 60 && confidence_num <= 80) {
        description = 'Quite confident.';
    }

    else if (confidence_num > 80 && confidence_num <= 100) {
        description = 'Very confident.';
    }

    else {
        description = 'Unknown confidence.';
    }

    return description;

}

function getIronyDescription(irony) {

    let description = '';

    switch (irony) {
        case 'NONIRONIC':
            description = 'The article does not have any ironic marks.';
            break;

        case 'IRONIC':
            description = 'The article has ironic marks.';

        default:
            description = '';
            break;
    }

    return description;

}

// TBD document function
async function handleSubmit(event) {

    event.preventDefault();

    const formText = document.getElementById('input-url').value;

    const urlToAnalyze = { formText };

    // Check the URL prior to fetching API
    if (!Client.checkURL(urlToAnalyze.formText)) {
        alert("Please provide a valid input URL.");
        return;
    }

    // POST the urlToAnalyze so we can fetch the API call
    const response = await fetch('http://localhost:8081/api', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(urlToAnalyze),
    });

    // Try to process the response
    try {
        const apiData = await response.json();

        if (apiData.status.code == '0') {
            UpdateUI(apiData);
        }
        else {
            alert('Invalid URL to analyze entered.  Try again.');
        }
    }
    catch (error) {
        console.log('ERROR: could not get API data in handleSubmit().  Msg: ' + error);
        alert('Could not POST data/retrieve to/from server.  Make sure the server is up and running.');
    }
}

// TBD document function
function UpdateUI(apiData) {

    const score_tag = { value: apiData.score_tag, description: getScoreTagDescription(apiData.score_tag) };
    const agreement = { value: apiData.agreement, description: getAgreementDescription(apiData.agreement) };
    const subjectivity = { value: apiData.subjectivity, description: getSubjectivityDescription(apiData.subjectivity) };
    const confidence = { value: apiData.confidence, description: getConfidenceDescription(apiData.confidence) };
    const irony = { value: apiData.irony, description: getIronyDescription(apiData.irony) };

    document.getElementById('results').classList.remove('hide');

    document.getElementById('score').innerHTML = `The article score is: ${score_tag.value}.`;
    document.getElementById('score-description').innerHTML = `${score_tag.description}`;

    document.getElementById('agreement').innerHTML = `The article agreement is: ${agreement.value}.`;
    document.getElementById('agreement-description').innerHTML = `${agreement.description}`;

    document.getElementById('subjectivity').innerHTML = `The article subjectivity is: ${subjectivity.value}.`;
    document.getElementById('subjectivity-description').innerHTML = `${subjectivity.description}`;

    document.getElementById('confidence').innerHTML = `The article confidence is: ${confidence.value}.`;
    document.getElementById('confidence-description').innerHTML = `${confidence.description}`;

    document.getElementById('irony').innerHTML = `The article irony is: ${irony.value}.`;
    document.getElementById('irony-description').innerHTML = `${irony.description}`;

    document.getElementById('credits').innerHTML = `<p>Note: MeaningCloud API Credits Remaining: ${apiData.status.remaining_credits}.</p>`
}

export { handleSubmit }