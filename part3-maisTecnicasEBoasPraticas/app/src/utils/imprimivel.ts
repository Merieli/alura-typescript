// funcao utilitária para imprimir um deteminado dado, os métodos contidos na interface serão de implementação obrigatória nas classes em que gor utilizado
export interface Imprimivel {
    // define a obrigatoriedade de implementar o método paraTexto()
    paraTexto(): string;
}

// para definir o uso de uma interface deve ser usado após o nome da classe desejada o "implements" e em seguida o nome da interface