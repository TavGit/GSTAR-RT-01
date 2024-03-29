function filterKegiatan(category) {
    var kegiatanItems = document.querySelectorAll('.kegiatan-item');

    kegiatanItems.forEach(function (item) {
        if (category === 'All' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}




  