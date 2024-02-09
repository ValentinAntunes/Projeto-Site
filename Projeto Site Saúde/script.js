function getGoal() {
    // Exibir pergunta sobre objetivo
    document.getElementById('goal-question').classList.remove('hidden');
}

function updateStats() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const goal = document.getElementById('goal').value;

    // Exibir informações do usuário
    const userInfo = document.getElementById('user-info');
    userInfo.innerHTML = `
        <li>Peso: ${weight} kg</li>
        <li>Altura: ${height} cm</li>
        <li>Idade: ${age}</li>
        <li>Objetivo: ${goal}</li>
    `;

    // Exibir plano de dieta com base no objetivo
    const dietPlan = document.getElementById('diet-plan');
    dietPlan.classList.remove('hidden');
    const dietDescription = document.getElementById('diet-description');
    switch(goal) {
        case 'perder-peso':
            dietDescription.innerText = "Plano Semanal de Dieta para Perder Peso: \n - Segunda: Café da manhã: Aveia com frutas; Almoço: Salada com frango grelhado; Jantar: Peixe com quinoa. \n - Quarta: Café da manhã: Omelete com espinafre; Almoço: Sopa de legumes; Jantar: Frango assado com batatas doces. \n - Sexta: Café da manhã: Smoothie de frutas; Almoço: Salada de atum; Jantar: Vegetais grelhados com tofu. \n - Sábado: Café da manhã: Panquecas de banana; Almoço: Sanduíche de peru; Jantar: Salmão assado com legumes.";
            break;
        case 'ganhar-massa':
            dietDescription.innerText = "Plano Semanal de Dieta para Ganhar Massa Muscular: \n - Segunda: Café da manhã: Ovos mexidos com torradas integrais; Almoço: Carne magra com batatas doces; Jantar: Filé de salmão com arroz integral. \n - Quarta: Café da manhã: Smoothie de proteína; Almoço: Frango grelhado com quinoa; Jantar: Omelete com legumes. \n - Sexta: Café da manhã: Aveia com nozes; Almoço: Sanduíche de peru com abacate; Jantar: Bife de carne com brócolis. \n - Sábado: Café da manhã: Iogurte grego com frutas; Almoço: Espaguete de trigo integral com almôndegas; Jantar: Peito de frango grelhado com legumes.";
            break;
        case 'aumentar-resistencia':
            dietDescription.innerText = "Plano Semanal de Dieta para Aumentar Resistência: \n - Segunda: Café da manhã: Cereal integral com leite de amêndoas; Almoço: Sanduíche de peru com salada; Jantar: Sopa de lentilha com pão integral. \n - Quarta: Café da manhã: Smoothie de frutas com aveia; Almoço: Salada de grão-de-bico; Jantar: Peixe assado com batatas. \n - Sexta: Café da manhã: Torradas de abacate; Almoço: Wrap de frango com vegetais; Jantar: Tofu com legumes no vapor. \n - Sábado: Café da manhã: Panquecas de trigo integral; Almoço: Salada de macarrão com frango grelhado; Jantar: Salmão grelhado com quinoa.";
            break;
        case 'manter-saude':
            dietDescription.innerText = "Plano Semanal de Dieta para Manter a Saúde: \n - Segunda: Café da manhã: Iogurte grego com mel e granola; Almoço: Salada de quinoa com legumes grelhados; Jantar: Frango assado com batatas e vegetais. \n - Quarta: Café da manhã: Smoothie verde; Almoço: Wrap de salmão com abacate; Jantar: Sopa de lentilha com pão integral. \n - Sexta: Café da manhã: Ovos mexidos com espinafre; Almoço: Sanduíche de peru com salada; Jantar: Peixe assado com arroz integral. \n - Sábado: Café da manhã: Panquecas de aveia com frutas; Almoço: Salada de grão-de-bico com atum em conserva; Jantar: Frango grelhado com legumes.";
            break;
        default:
            dietDescription.innerText = "Nenhum plano de dieta disponível.";
    }

    // Exibir plano de treino com base no objetivo
    const workoutPlan = document.getElementById('workout-plan');
    workoutPlan.classList.remove('hidden');
    const workoutDescription = document.getElementById('workout-description');
    switch(goal) {
        case 'perder-peso':
            workoutDescription.innerText = "Plano Semanal de Treino para Perder Peso: \n - Segunda: Cardio (30 minutos); Quarta: Treinamento de força (45 minutos); Sexta: HIIT (Treinamento Intervalado de Alta Intensidade) (20 minutos); Sábado: Yoga (30 minutos).";
            break;
        case 'ganhar-massa':
            workoutDescription.innerText = "Plano Semanal de Treino para Ganhar Massa Muscular: \n - Segunda: Peito e tríceps (45 minutos); Quarta: Costas e bíceps (45 minutos); Sexta: Pernas e ombros (45 minutos); Sábado: Treino de corpo inteiro (60 minutos).";
            break;
        case 'aumentar-resistencia':
            workoutDescription.innerText = "Plano Semanal de Treino para Aumentar Resistência: \n - Segunda: Corrida (5 km); Quarta: Ciclismo (15 km); Sexta: Natação (500 metros); Sábado: Caminhada (10 km).";
            break;
        case 'manter-saude':
            workoutDescription.innerText = "Plano Semanal de Treino para Manter a Saúde: \n - Segunda: Caminhada (30 minutos); Quarta: Pilates (30 minutos); Sexta: Exercícios de peso corporal (30 minutos); Sábado: Alongamento (20 minutos).";
            break;
        default:
            workoutDescription.innerText = "Nenhum plano de treino disponível.";
    }

    // Exibir recomendações
    const recommendations = document.getElementById('recommendations');
    recommendations.classList.remove('hidden');

    // Calcular quantidade de proteína adequada para ingerir diariamente
    const proteinIntake = document.getElementById('protein-intake');
    const proteinAmount = calculateProteinIntake(weight, height);
    proteinIntake.innerText = `Quantidade de Proteína Adequada por Dia: ${proteinAmount} gramas`;

    // Indicar suplementos recomendados com base na idade e no objetivo
    const supplements = document.getElementById('supplements');
    const recommendedSupplements = recommendSupplements(age, goal);
    supplements.innerText = `Suplementos Recomendados: ${recommendedSupplements}`;

    // Calcular quantidade de água necessária por dia e calcular massa corporal e níveis de gordura adequados
    const hydration = document.getElementById('hydration');
    const waterAmount = calculateWaterIntake(weight, height);
    hydration.innerText = `Quantidade de Água Necessária por Dia: ${waterAmount} litros`;

    const bmiResult = calculateBMI(weight, height);
    const bmiFeedback = document.getElementById('bmi-feedback');
    if (bmiResult < 18.5) {
        bmiFeedback.innerText = "Seu IMC indica que você está abaixo do peso. Considere ganhar peso para alcançar um nível saudável.";
    } else if (bmiResult >= 18.5 && bmiResult < 24.9) {
        bmiFeedback.innerText = "Seu IMC está dentro da faixa saudável. Continue mantendo hábitos saudáveis!";
    } else if (bmiResult >= 24.9 && bmiResult < 29.9) {
        bmiFeedback.innerText = "Seu IMC indica que você está acima do peso. Considere perder peso para alcançar um nível saudável.";
    } else {
        bmiFeedback.innerText = "Seu IMC indica que você está obeso. Considere perder peso para melhorar sua saúde.";
    }
    
}

function calculateProteinIntake(weight, height) {
    // Fórmula para calcular a quantidade de proteína recomendada em gramas por dia
    // Fonte: https://www.healthline.com/nutrition/how-much-protein-per-day
    const proteinPerKg = 0.8; // Gramas por quilo de peso corporal
    return (weight * proteinPerKg).toFixed(2);
}

function recommendSupplements(age, goal) {
    // Lógica para recomendar suplementos com base na idade e no objetivo
    // Suplementos comuns incluem proteína em pó, creatina, etc.
    // Esta é uma lógica simplificada, consulte um profissional de saúde para recomendações específicas
    let supplements = "";
    if (age > 50) {
        supplements += "Multivitamínico, ";
    }
    if (goal === 'ganhar-massa') {
        supplements += "Whey Protein, Creatina";
    }
    return supplements;
}

function calculateWaterIntake(weight, height) {
    // Fórmula para calcular a quantidade de água necessária por dia
    // Fonte: https://www.healthline.com/nutrition/how-much-water-should-you-drink-per-day
    const waterPerKg = 0.03; // Litros por quilo de peso corporal
    return (weight * waterPerKg).toFixed(2);
}

function calculateBMI(weight, height) {
    // Fórmula para calcular o índice de massa corporal (IMC)
    // Fonte: https://www.nhs.uk/common-health-questions/lifestyle/what-is-the-body-mass-index-bmi/
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}
