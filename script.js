window.addEventListener('DOMContentLoaded', (event) => {
    loadHTML('header.html', document.getElementById('header'));
    loadHTML('footer.html', document.getElementById('footer'));
});

function loadHTML(url, element) {
    fetch(url).then(response => response.text()).then(data => {
        element.innerHTML = data;
    });
}

function toggleCanvas() {
    let canvas = document.querySelector('#canvas');
    if (window.getComputedStyle(canvas).display === 'none') {
        canvas.style.display = 'block';
    } else {
        canvas.style.display = 'none';
    }
}