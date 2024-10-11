function treinoAsc() {
    let opcoes = document.getElementById("option").value;
    let result = document.getElementById("result");
    result.style.opacity = 0;

    setTimeout(() => {
        result.style.opacity = 1;

        switch (parseInt(opcoes)) {
            case 1:
                result.innerHTML = `
                <h2>Segunda: Peito, Ombros e Tríceps</h2>
                <ul>
                    <li><input type="checkbox" class="exercise"> <b>Flexões </b>  ⇾ 4 séries de 12-15 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Flexões Diamante </b>  ⇾ 3 séries de 10-12 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Flexão Pike </b>  ⇾ 4 séries de 10-12 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Tríceps na Cadeira </b>  ⇾ 3 séries de 10-15 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Prancha com Toque no Ombro </b>  ⇾ 3 séries de 20 toques (10 de cada lado).</li>
                </ul>`;
                break;
            case 2:
                result.innerHTML = `
                <h2>Terça: Pernas e Glúteos</h2>
                <ul>
                    <li><input type="checkbox" class="exercise"> <b>Agachamento livre</b>  ⇾ 4 séries de 15-20 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Afundos (Lunges)</b>  ⇾ 4 séries de 12 repetições por perna.</li>
                    <li><input type="checkbox" class="exercise"> <b>Agachamento Búlgaro</b>  ⇾ 3 séries de 10 repetições por perna.</li>
                    <li><input type="checkbox" class="exercise"> <b>Elevação de panturrilha</b>  ⇾ 4 séries de 15-20 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Ponte de glúteos</b>  ⇾ 3 séries de 15-20 repetições.</li>
                </ul>`;
                break;
            case 3:
                result.innerHTML = `
                <h2>Quarta: Costas e Bíceps</h2>
                <ul>
                    <li><input type="checkbox" class="exercise"> <b>Barra Fixa (Costas e Bíceps)</b>  ⇾ 4 séries de 4-8 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Remada Invertida</b>  ⇾ 4 séries de 10-12 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Rosca Direta com Mochila</b>  ⇾ 3 séries de 10-15 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Rosca Direta Barra</b>  ⇾ 3 séries de 10-15 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Abdominal</b>  ⇾ 100x (50 x 50).</li>
                </ul>`;
                break;
            case 4:
                result.innerHTML = `
                <h2>Quinta: Pernas e Core</h2>
                <ul>
                    <li><input type="checkbox" class="exercise"> <b>Agachamento salto</b>  ⇾ 3 séries de 10-12 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Afundo Lateral</b>  ⇾ 3 séries de 10-12 repetições por perna.</li>
                    <li><input type="checkbox" class="exercise"> <b>Ponte Unilateral</b>  ⇾ 3 séries de 10-12 repetições por perna.</li>
                    <li><input type="checkbox" class="exercise"> <b>Abdominal Bike</b>  ⇾ 3 séries de 20x de cada lado.</li>
                    <li><input type="checkbox" class="exercise"> <b>Prancha lateral</b>  ⇾ 3 séries de 30-45s (de cada lado).</li>
                </ul>`;
                break;
            case 5:
                result.innerHTML = `
                <h2>Sexta: Full-Body</h2>
                <ul>
                    <li><input type="checkbox" class="exercise"> <b>Burpees</b>  ⇾ 3 séries de 10-15 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Flexões</b>  ⇾ 3 séries de 10-15 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Mountain Climbers</b>  ⇾ 3 séries de 30s.</li>
                    <li><input type="checkbox" class="exercise"> <b>Agachamento Livre</b>  ⇾ 3 séries de 15-20 repetições.</li>
                    <li><input type="checkbox" class="exercise"> <b>Barra Fixa</b>  ⇾ 3 séries de 4-8 repetições.</li>
                </ul>`;
                break;
            default:
                alert("Opção inválida! Por favor, escolha um dia válido.");
                break;
        }

        let exercises = document.querySelectorAll('.exercise');
        exercises.forEach(exercise => {
            exercise.addEventListener('change', function () {
                if (this.checked) {
                    this.parentNode.classList.add('completed');
                } else {
                    this.parentNode.classList.remove('completed');
                }
            });
        });
    }, 300);
}

let timerInterval;
let elapsedTime = 0;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        elapsedTime++;
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;

        document.getElementById('time').textContent =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('time').textContent = '00:00:00';
}

// function makeElementDraggable(el) {
//     let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0;

//     el.onmousedown = (e) => {
//         e.preventDefault();
//         // Pega a posição inicial do clique
//         initialX = e.clientX;
//         initialY = e.clientY;
//         // Pega o offset atual do elemento
//         offsetX = el.offsetLeft;
//         offsetY = el.offsetTop;

//         document.onmousemove = dragElement;
//         document.onmouseup = stopDragElement;
//     };

//     function dragElement(e) {
//         // Calcula a nova posição do elemento com base no movimento do mouse
//         el.style.left = (offsetX + e.clientX - initialX) + "px";
//         el.style.top = (offsetY + e.clientY - initialY) + "px";
//     }

//     function stopDragElement() {
//         // Para o movimento quando o mouse é solto
//         document.onmousemove = null;
//         document.onmouseup = null;
//     }
// }

// // Torna o timer arrastável
// makeElementDraggable(document.querySelector('.timer'));
