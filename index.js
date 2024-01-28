let nomePersonagem = "Igor";
let quantidadeExperiencia = 10550;
let nivel;

if(quantidadeExperiencia < 1000){
    nivel = "Ferro";
    console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
} else if (quantidadeExperiencia >= 1000 && quantidadeExperiencia <= 2000){
    nivel = "Bronze";
    console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
} else if (quantidadeExperiencia > 2000 && quantidadeExperiencia <= 5000){
    nivel = "Prata";
    console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
} else if (quantidadeExperiencia > 5000 && quantidadeExperiencia <= 7000){
    nivel = "Ouro";
    console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
} else if (quantidadeExperiencia > 7000 && quantidadeExperiencia <= 8000){
    nivel = "Platina";
    console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
} else if (quantidadeExperiencia > 8000 && quantidadeExperiencia <= 9000){
    nivel = "Ascendente";
    console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
} else if (quantidadeExperiencia > 9000 && quantidadeExperiencia <= 10000){
    nivel = "Imortal";
    console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
} else if(quantidadeExperiencia > 10000){
    nivel = "Radiante";
    console.log(`O Herói de nome ${nomePersonagem} está no nível de ${nivel}`);
}