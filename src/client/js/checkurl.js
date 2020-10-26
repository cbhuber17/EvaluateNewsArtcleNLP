// TBD document function
export function checkURL(url) {

    // Regex expression to test if it is a valid URL
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/gi;
    const regex = new RegExp(expression);

    return url.match(regex);
}