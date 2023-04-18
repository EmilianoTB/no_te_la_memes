fetch('https://api.mocki.io/v2/c9e5d456/captions')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder a los datos del JSON en la variable "data"
    console.log(data);

    // Ahora, puedes agregar el evento de clic a cada botón para seleccionar un valor aleatorio del elemento correspondiente del JSON
    const btn1 = document.getElementById('ex');
    const btn2 = document.getElementById('weed');
    const btn3 = document.getElementById('alcohol');
    const btn4 = document.getElementById('sexo');
    const btn5 = document.getElementById('pena');
    const btn6 = document.getElementById('fiesta');

    btn1.addEventListener('click', () => {
      const index = Math.floor(Math.random() * data.comida.length);
      document.getElementById('resultado').textContent = `${data.comida[index]}`;
    });

    btn2.addEventListener('click', () => {
      const index = Math.floor(Math.random() * data.weed.length);
      document.getElementById('resultado').textContent = `${data.weed[index]}`;
    });

    btn3.addEventListener('click', () => {
      const index = Math.floor(Math.random() * data.alcohol.length);
      document.getElementById('resultado').textContent = `${data.alcohol[index]}`;
    });

    btn4.addEventListener('click', () => {
      const index = Math.floor(Math.random() * data.sexo.length);
      document.getElementById('resultado').textContent = `${data.sexo[index]}`;
    });

    btn5.addEventListener('click', () => {
      const index = Math.floor(Math.random() * data.pena.length);
      document.getElementById('resultado').textContent = `${data.pena[index]}`;
    });

    btn6.addEventListener('click', () => {
      const index = Math.floor(Math.random() * data.fiesta.length);
      document.getElementById('resultado').textContent = `${data.fiesta[index]}`;
    });
  })
  .catch(error => console.error(error));
