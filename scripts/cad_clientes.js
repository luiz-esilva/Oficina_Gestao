document.getElementById('btnLimpar').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('confirmLimpar').addEventListener('click', function() {
    document.getElementById('clienteForm').reset();
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('cancelLimpar').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});