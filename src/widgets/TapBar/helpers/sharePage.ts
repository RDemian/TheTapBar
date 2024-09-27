import { copyToClipboard } from './copyToClipboard';

/**
 * Шаринг страницы
 */
export const sharePage = async() => {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        })
            .then(function () {
                console.log('Shareing successfull');
            })
            .catch(function (err) {
                console.log('Sharing failed', err);
            });
    } else {
        copyToClipboard();
        console.log('Your browser does not support Web Share API');
    }
};
