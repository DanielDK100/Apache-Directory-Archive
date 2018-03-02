function displayErrrorMessage(errorCode, errorCodeElement, errrorMessageElement) {
    var errorMessage;
    switch(errorCode) {
        case '400':
        errorMessage = 'Sorry, I don\'t understand what you want me to do.';
        break;
        case '403':
        errorMessage = 'You aren\'t allowed to be here.';
        break;
        case '404':
        errorMessage = 'I can\'t find what you are looking for...';
        break;
        case '408':
        errorMessage = 'I refuse to wait any longer.';
        break;
        case '500':
        errorMessage = 'I don\'t know what to do. This isn\'t your fault.';
        break;
        case '502':
        errorMessage = 'I received some invalid information from my master.';
        break;
        default:
        errorMessage = 'Unknown errror.';
        break;
    }
    document.title = errorCode + ' - ' + document.title;
    $(errorCodeElement).text(errorCode);
    $(errrorMessageElement).text(errorMessage);
}
displayErrrorMessage(location.search.split('=')[1], $('#error-code'), $('#error-message'));