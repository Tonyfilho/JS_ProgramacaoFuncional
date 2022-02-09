import { Component, OnInit } from '@angular/core';

interface iShopping {
  user: {
    id: number;
    nome: string;
    lastnome: string;
  };
  itens: {
    product: {
      id: number;
      nome: string;
    };
    quantity: number;
  }[];
}
@Component({
  selector: 'app-imutabilidade-com-spread',
  templateUrl: './imutabilidade-com-spread.component.html',
})
/**
 * imutabilidade é quando recebemos um dados de outra variavel e COPIAMOS não atribuimos a outra variavel sem passar
 * a REFERENCIA da memoria, mais sim uma copia.
 */
export class ImutabilidadeComSpreadComponent implements OnInit {
  /**
   * Exemplo de MUTABILIDADE
   */
  numeros: number[] = [1, 2, 3, 4, 5];
  numerosMutaveis = this.numeros;
  numeros2: number[] = [1, 2, 3, 4, 5];
  numerosImutaveis = [...this.numeros2, 6, 7, 8];
  imudabilidadeCart = {};
  imutabilidadeSpreatMap = {};
  imutabilidadeSpreatReduce = {};
  Copy = {};

  shoppingCart: iShopping = {
    user: { id: 1, nome: 'tony', lastnome: 'filho' },
    itens: [
      { product: { id: 1, nome: 'manga' }, quantity: 10 },
      { product: { id: 2, nome: 'banana' }, quantity: 5 },
    ],
  };
  constructor() {
    /**
     * consoles do Mutabeis, onde ATRIBUIMOS numerosMutaveis= this.numeros,
     * com isto quando adciono algum item em NUMEROSMUTAVEIS o array NUMEROS tb recebe.
     */
    this.numerosMutaveis.push(6);
    console.group('Exemplo de mutaveis');
    console.log('Array Original Numeros [1,2,3,4,5]', this.numeros);
    console.log('Array NumerosMutaveis', this.numerosMutaveis);
    console.groupEnd();
    console.group('Exemplo de Imutaveis');
    console.log('Array Original Numeros [1,2,3,4,5]', this.numeros2);
    console.log('Array NumerosMutaveis', this.numerosImutaveis);
    console.groupEnd();
  }

  ngOnInit(): void {
    /**
     * modificando o Objeto PAI shoppingCart, sem termos MUTABULIDADE,
     * desta forma usamos a IMUTABILIDADE
     */

    this.imudabilidadeCart = {
      ...this.shoppingCart,
      user: {
        id: this.shoppingCart.user.id,
        nome: `${this.shoppingCart.user.nome} ${this.shoppingCart.user.lastnome}`,
      },
      itens: {
        product: {
          id: 2,
          nome1: this.shoppingCart.itens
            .map((nome) => nome.product.nome)
            .find((nomeManga) => nomeManga == 'manga'),
          nome2: this.shoppingCart.itens
            .map((nome) => nome.product.nome)
            .find((nomeBanana) => nomeBanana == 'banana'),
        },
      },
    };
    /**
     * IMUTABILIDADE com copia do tipo deep no ANGULA NÃO FUNCIONA, pois o Angular já aplica isto como BASE
     */
    this.imutabilidadeSpreatMap = {
      ...this.shoppingCart,
      user: {
        id: this.shoppingCart.user.id,
        nome: `${this.shoppingCart.user.nome} ${this.shoppingCart.user.lastnome}`,
      },
      itens: {
        product: {
          id: 3,
          fruta01: this.shoppingCart.itens
            .map((obj) => obj.product)
            .find((fruta) => fruta.nome == 'manga'),
          fruta02: this.shoppingCart.itens
            .map((obj) => obj.product)
            .find((fruta) => fruta.nome == 'banana'),
        },
      },
    };
    this.imutabilidadeSpreatReduce = {...this.shoppingCart , user: {id: this.shoppingCart.user.id, nome: `${this.shoppingCart.user.nome} ${this.shoppingCart.user.lastnome}`},
    itens: {...this.shoppingCart.itens.reduce((novo: any, atual, index: number) => {
      novo[index] = {id: atual.product.id, frutas: atual.product.nome}
      return novo
    }, {})}
  };
    console.group('Exemplo de Imutaveis em Objetos');
    console.log('Array Original', this.shoppingCart);
    console.log('Array ObjetosImutaveis', this.imudabilidadeCart);
    console.groupEnd();
    console.group('Exemplo de Imutaveis em Objetos DEEP COPY');
    console.log('Array ObjetosImutaveis', this.imutabilidadeSpreatMap);
    console.groupEnd();
    console.group('Exemplo de Imutaveis em Objetos SPREAD, REDUCE');
    console.log('Array ObjetosImutaveis', this.imutabilidadeSpreatReduce);
    console.groupEnd();
  }
}
