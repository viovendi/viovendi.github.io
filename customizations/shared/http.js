async function makeRequest(options) {
    let result;
    try {
        result = await $.ajax(options);
        return result;
    } catch (error) {
        console.error(error);
    }
}