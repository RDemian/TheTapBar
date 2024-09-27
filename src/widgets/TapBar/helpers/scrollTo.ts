/**
 * Прокрутка к указанной позиции
 * @param position - отступ от начала документа
 */
export const scrollToPosition = (position = 0) => {
    window.scrollTo({
        top: position,
        behavior: 'smooth',
    });
};
