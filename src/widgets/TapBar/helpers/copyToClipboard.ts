/**
 * Копируем в буфер обмена
 */
export const copyToClipboard = async() => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href)
            .then(function () {
                console.log('Copy successfull');
            })
            .catch(function (err) {
                console.log('Copy failed', err);
            });
    } else {
        console.log('Your browser does not support Web Clipboard API');
    }
};
