import readLine from "readline-sync";
import { LampadaInteligente } from "./src/models/LampadaInteligente.js";
import { Termostato } from "./src/models/Termostato.js";

console.log("=== CADASTRO DE DISPOSITIVOS SMART ===");

// 1. Instanciando a Lâmpada Inteligente usando o objeto de propriedades (Interface)
const novaLampada = new LampadaInteligente({
    idRede: "192.168.1.50",
    nomeLocal: "Lâmpada da Sala",
    isLigado: false,
    corHexadecimal: "#FFFFFF",
    nivelBrilho: 70
});

// 2. Instanciando o Termostato usando o objeto de propriedades (Interface)
const novoTermostato = new Termostato({
    idRede: "192.168.1.60",
    nomeLocal: "Termostato do Quarto",
    isLigado: true,
    temperaturaAtual: 22.5,
    temperaturaAlvo: 24.0
});

console.log(`\nLâmpada cadastrada: ${novaLampada.getNomeLocal} (${novaLampada.getIdRede})`);
console.log(`Termostato cadastrado: ${novoTermostato.getNomeLocal} (${novoTermostato.getIdRede})`);

// Interação via teclado utilizando herança (Setters da classe mãe e métodos específicos da filha)
console.log("\n--- Atualizando Dados da Lâmpada ---");
novaLampada.setNomeLocal = readLine.question("Digite o novo nome local para a lampada: ");
const novoBrilho = readLine.questionInt("Digite o novo nivel de brilho (0-100): ");
novaLampada.setBrilho(novoBrilho);

console.log("\n--- Atualizando Dados do Termostato ---");
const novaTempAlvo = readLine.questionFloat("Digite a nova temperatura alvo: ");
novoTermostato.setTemperaturaAlvo(novaTempAlvo);

// Testando o método de alternar energia herdado da classe base
console.log("\n--- Testando Ações (Herança) ---");
console.log(`Status inicial da lâmpada: ${novaLampada.getIsLigado ? "Ligada" : "Desligada"}`);
novaLampada.alternarEnergia(); // Altera o status interno

// Exibindo os dados completos dos dispositivos no final
console.log("\n================================================");
console.log("      STATUS COMPLETO DOS DISPOSITIVOS          ");
console.log("================================================");

console.log(" > DADOS DA LÂMPADA:");
// Dados herdados da classe Dispositivo
console.log(`  ID de Rede:         ${novaLampada.getIdRede}`);
console.log(`  Nome Local:         ${novaLampada.getNomeLocal}`);
console.log(`  Está Ligado?:       ${novaLampada.getIsLigado ? "Sim" : "Não"}`);
// Dados específicos da classe LampadaInteligente
console.log(`  Cor Hexadecimal:    ${novaLampada.getCorHexadecimal}`);
console.log(`  Nível de Brilho:    ${novaLampada.getNivelBrilho}%`);

console.log("\n ---------------------------------------------- \n");

console.log(" > DADOS DO TERMOSTATO:");
// Dados herdados da classe Dispositivo
console.log(`  ID de Rede:         ${novoTermostato.getIdRede}`);
console.log(`  Nome Local:         ${novoTermostato.getNomeLocal}`);
console.log(`  Está Ligado?:       ${novoTermostato.getIsLigado ? "Sim" : "Não"}`);
// Dados específicos da classe Termostato
console.log(`  Temperatura Atual:  ${novoTermostato.getTemperaturaAtual}°C`);
console.log(`  Temperatura Alvo:   ${novoTermostato.getTemperaturaAlvo}°C`);

console.log("================================================\n");