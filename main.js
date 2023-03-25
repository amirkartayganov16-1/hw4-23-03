const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(person => {
        const div = document.createElement('div');
        div.innerHTML = `<p>Имя: ${person.name}</p><p>Возраст: ${person.age}</p>`;
        container.appendChild(div);
      });
    })
    .catch(error => console.error(error));
});