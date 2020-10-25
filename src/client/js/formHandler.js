// TBD document function
async function handleSubmit(event) {

    event.preventDefault();

    // TBD update below based on HTML name and url to enter (e.g. change formText here and in server async func)
    // check what text was put into the form field
    let formText = document.getElementById('input-url').value;

    urlToAnalyze = { formText };

    // POST the urlToAnalyze
    const response = await fetch('/api', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(urlToAnalyze),
    });

    // Try to process the response
    try {
        const apiData = await response.json();

        // TBD check apiData.status.code == 0, or the returned result of this function

        return apiData;
    }
    catch (error) {
        console.log('ERROR: could not get API data in handleSubmit().  Msg: ' + error);
        alert('Could not POST data/retrieve to/from server.  Make sure the server is up and running.');
    }
}

// TBD uncomment
// export { handleSubmit }