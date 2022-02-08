import { Component, OnInit } from '@angular/core';

interface iShoppincart {
  user: { id: number; nome: string; lastnome: string };
  itens: [
    {
      product: { id: number; nome: string };
      quantity: number;
    },
    {
      product: { id: number; nome: string };
      quantity: number;
    }
  ];
}
// interface shoppincartItens {
//   itens: [{
//     product: {id: number, firstName: string, lastName: string},
//     quantity: number,
//   }]
// }
@Component({
  selector: 'app-funcoes-puras',
  templateUrl: './funcoes-puras.component.html',
})
/**
 * Estudaremos como transformar um objeto usando programação funcional,
 * sobre SIDE_EFFECT, onde o retorno que vai para API Não pode mudar o Objeto PRINCIPAL
 * que neste caso é SHOPPINGCART, mas somente uma Var local ou uma Const
 * onde o Backend precisa receber um objeto diferente do que é
 * mostrado no Front
 * API precisa rreceber algo assim:
 * shoppingCart: {
 * user: {id: number, fullName: String},
 * itens: [{
 *  product: {id: number},
 *  quantity: number
 * }]
 * }
 *
 */
export class FuncoesPurasComponent implements OnInit {
  shoppingCart: iShoppincart = {
    user: { id: 1, nome: 'tony', lastnome: 'filho' },
    itens: [
      { product: { id: 1, nome: 'manga' }, quantity: 10 },
      { product: { id: 1, nome: 'manga' }, quantity: 10 },
    ],
  };
  constructor() {
    /**
     * É um logica e um trabalho muito grande para fazer uma transformação de dados
     * usando programação funcional
     * @param cart é um copia do Objeto shoppincart
     * @returns retorna um novo Objeto modificado por programação
     * IMPERATIVA
     
    function formatImperativoShopCart(cart: any) {
      const localCart: any = new Object(cart);
      localCart.user.nome = `${cart.user.nome} ${cart.user.lastnome}`;
      delete cart.user.firstnome;
      delete cart.user.lastnome;
      localCart.itens.forEach((item: any) => {
        item.product = { id: item.product.id };
        item.quantity = item.quantity;
      });
      return localCart;
    }
    */
    /**
     * Console.log() da função  programação imperativa
    
    console.group('Exemplo de programação Imperativa');
    console.log(formatImperativoShopCart(this.shoppingCart));
    console.groupEnd();
 */
    /**
     *
     * @param cart é a inteface do Objeto shoppingCart
     */

    function formatFuncional(cart: iShoppincart) {
      const newcart: any = {};
      console.log(cart.user.nome);
      newcart.user = {
        id: cart.user.id,
        nome: `${cart.user.nome} ${cart.user.lastnome}`,
      };
      newcart.itens = cart.itens.map((item) => ({
        ...item,
        product:{id: item.product.id},
        quantity: item.quantity,
      }));

      return newcart;
    }

    /**
     * Console.log() da função  programação Funcional
     */
    console.group('Exemplo de programação Funcional');
    console.log(formatFuncional(this.shoppingCart));
    console.groupEnd();
  }

  ngOnInit(): void {}
}
