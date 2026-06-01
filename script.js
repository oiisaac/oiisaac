const carros = [
    { id: 1, marca: "SEAT", modelo: "Ibiza Style", ano: "2022", preco: "15.400", km: "28.000", etiqueta: "ECO", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=400&auto=format&fit=crop" },
    { id: 2, marca: "Volkswagen", modelo: "Golf GTI", ano: "2023", preco: "38.900", km: "5.500", etiqueta: "C", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=400&auto=format&fit=crop" },
    { id: 3, marca: "Tesla", modelo: "Model 3", ano: "2021", preco: "32.500", km: "45.000", etiqueta: "0", img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=400&auto=format&fit=crop" }
];

function renderizarCarros(lista) {
    const container = document.getElementById('lista-carros');
    container.innerHTML = '';

    lista.forEach(carro => {
        container.innerHTML += `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
                <div class="relative">
                    <img src="${carro.img}" alt="${carro.modelo}" class="w-full h-48 object-cover">
                    <span class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">ETIQUETA ${carro.etiqueta}</span>
                </div>
                <div class="p-5">
                    <h4 class="font-bold text-gray-800 text-lg">${carro.marca} ${carro.modelo}</h4>
                    <p class="text-gray-500 text-sm italic">Madrid, España</p>
                    <div class="text-2xl font-black text-blue-900 mt-4">${carro.preco} €</div>
                    <button onclick="verDetalhes(${carro.id})" class="mt-4 w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition">VER DETALLES</button>
                </div>
            </div>
        `;
    });
}

// 1. Função para o botão de busca
function buscarCarros() {
    const termo = document.getElementById('busca').value.toLowerCase();
    const filtrados = carros.filter(c => c.marca.toLowerCase().includes(termo) || c.modelo.toLowerCase().includes(termo));
    renderizarCarros(filtrados);
}

// 2. Função para ver detalhes (Simula abertura de página)
function verDetalhes(id) {
    const carro = carros.find(c => c.id === id);
    alert(`📅 Año: ${carro.ano}\n🛣️ KM: ${carro.km}\n🌍 Ubicación: Madrid\n\n¿Quieres reservar este ${carro.modelo}? Contacta con nuestro asesor.`);
}

// 3. Funções para o Menu Superior
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const opcao = e.target.innerText;
        alert(`Has seleccionado: ${opcao}. \nEsta sección estará disponible próximamente para el mercado de Madrid.`);
    });
});
// Função para abrir o formulário de venda
function abrirModalVenda() {
    document.getElementById('modalVenda').classList.remove('hidden');
}

function fecharModal() {
    document.getElementById('modalVenda').classList.add('hidden');
}

// Ajustando o clique no menu superior "Vender"
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const texto = e.target.innerText.toLowerCase();
        if (texto.includes('vender')) {
            e.preventDefault();
            abrirModalVenda();
        } else if (texto.includes('compra') || texto.includes('financiación') || texto.includes('servicios')) {
            e.preventDefault();
            alert(`Sección de ${e.target.innerText} en mantenimiento para Madrid.`);
        }
    });
});

// Lógica para o envio do formulário (Simulação)
document.getElementById('formVenda')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Gracias! Hemos recibido los datos de tu coche. Nuestro equipo de Madrid te contactará pronto al 602418047.");
    fecharModal();
});
renderizarCarros(carros);