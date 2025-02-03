
fetch('../HTML/navBar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
})
.catch(error => console.error('Error al cargar la barra de navegación:', error));
