
# Explicação do Código

### Localização do Código
O código está dentro da **pasta `src`**. Ele organiza a lógica para calcular e exibir o **rank** de um jogador com base na quantidade de pontos de experiência acumulados.

---

## **Tabela de Pontos de Experiência e Ranks**

| **Rank**      | **Faixa de Experiência (pontos)**  |
|---------------|-----------------------------------|
| **Ferro**     | Até 1000                         |
| **Bronze**    | Entre 1001 e 2000                |
| **Prata**     | Entre 2001 e 5000                |
| **Ouro**      | Entre 5001 e 7000                |
| **Platina**   | Entre 7001 e 8000                |
| **Ascendente**| Entre 8001 e 9000                |
| **Imortal**   | Entre 9001 e 10000               |
| **Radiante**  | Acima de 10000                   |

---

## **Descrição do Código**

O código utiliza uma combinação de estruturas condicionais (`if/else`) e um bloco `switch` para determinar e exibir o **rank** do jogador com base na sua experiência.

### **1. Variáveis**

- **`nickanameDoPlayer`**: O apelido do jogador.  
- **`experienciaDoPlayer`**: A quantidade de pontos de experiência acumulados.  
- **`nivel`**: Variável que armazena o rank do jogador, determinado pelas condições.

```javascript
let nickanameDoPlayer = "JujubãoApelona";
let experienciaDoPlayer = 8670;
let nivel = "";
```

---

### **2. Determinação do Rank**

O **bloco `if/else`** verifica a experiência do jogador e define o rank com base na tabela acima. 

#### Exemplo de Condição:
```javascript
if (experienciaDoPlayer <= 1000) {
    nivel = "Ferro";
} else if (experienciaDoPlayer >= 1001 && experienciaDoPlayer <= 2000) {
    nivel = "Bronze";
} 
// E assim por diante...
```

---

### **3. Exibição da Mensagem**

Depois de determinar o rank, o código utiliza um **bloco `switch`** para exibir uma mensagem personalizada:

#### Exemplo de um caso no `switch`:
```javascript
case "Ferro":
    console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
    break;
```

Se o rank não for identificado, o código exibe "Rank não desbloqueado!".

---

### **4. Resultado para o Jogador**

Para os valores iniciais:
- **Apelido do Jogador:** `"JujubãoApelona"`.  
- **Experiência:** `8670`.

O rank atribuído é **Ascendente**, e a mensagem exibida será:

```
Parabéns JujubãoApelona! Seu rank é: Ascendente
```

---

## Código Completo

```javascript
let nickanameDoPlayer = "JujubãoApelona";
let experienciaDoPlayer = 8670;
let nivel = "";

if (experienciaDoPlayer <= 1000) {
    nivel = "Ferro";
} else if (experienciaDoPlayer >= 1001 && experienciaDoPlayer <= 2000) {
    nivel = "Bronze";
} else if (experienciaDoPlayer >= 2001 && experienciaDoPlayer <= 5000) { 
    nivel = "Prata";
} else if (experienciaDoPlayer >= 5001 && experienciaDoPlayer <= 7000) {
    nivel = "Ouro";
} else if (experienciaDoPlayer >= 7001 && experienciaDoPlayer <= 8000) {
    nivel = "Platina";
} else if (experienciaDoPlayer >= 8001 && experienciaDoPlayer <= 9000) {
    nivel = "Ascendente";
} else if (experienciaDoPlayer >= 9001 && experienciaDoPlayer <= 10000) {
    nivel = "Imortal";
} else if (experienciaDoPlayer >= 10001) {
    nivel = "Radiante";
} else { 
    console.log(nickanameDoPlayer + ", você ainda não possui nível para habilitar seu rank");
}

switch (nivel) {
    case "Ferro":
        console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
        break;

    case "Bronze":
        console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
        break;

    case "Prata":
        console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
        break;

    case "Ouro":
        console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
        break;

    case "Platina":
        console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
        break;

    case "Ascendente":
        console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
        break;

    case "Imortal":
        console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
        break;

    case "Radiante":
        console.log("Parabéns " + nickanameDoPlayer + "! " + "Seu rank é: " + nivel);
        break;

    default:
        console.log("Rank não desbloqueado!");
        break;
}
```

---

Se precisar de mais explicações ou modificações, é só pedir! 😊
