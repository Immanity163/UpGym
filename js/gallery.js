// Функция для изменения изображения и добавления обводки
function changeImage(imageSrc, selectedImage) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;

    // Удаляем класс 'selected' у всех маленьких изображений
    const smallImages = document.querySelectorAll('.small-images img');
    smallImages.forEach(img => img.classList.remove('selected'));

    // Добавляем класс 'selected' к нажатому изображению
    selectedImage.classList.add('selected');
}

// Устанавливаем начальное состояние при загрузке страницы
window.onload = function() {
    const firstImage = document.querySelector('.small-images img');
    if (firstImage) {
        changeImage(firstImage.src.replace('_small', '_large'), firstImage);
        firstImage.classList.add('selected'); // Обводим первое изображение
    }
};