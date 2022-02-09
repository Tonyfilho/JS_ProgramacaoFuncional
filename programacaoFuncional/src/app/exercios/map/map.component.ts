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
function formataObjetoMap(cart: iShopping) {
  const localObjet: iShopping | any = {};
  localObjet.user = {
    id: cart.user.id,
    nome: `${cart.user.nome} ${cart.user.lastnome}`,
  };
  localObjet.itens = cart.itens.map((item) => {
    return { ...item, id: item.product.id, quantity: item.quantity };
  });

  return localObjet;
}
function formataObjetoReduce(cart: iShopping) {
  const localCart: iShopping | any = {};
  localCart.user = {
    id: cart.user.id,
    nome: `${cart.user.nome} ${cart.user.lastnome}`,
  };
  localCart.itens = cart.itens.reduce((novo: any, atual) => {
    novo.push({ id: atual.product.id, quantity: atual.quantity });

    return novo;
  }, []);
  return localCart;
}
/**
 * 
 * @param cart 
 * OBS: No REDUCE o RETURN tem que ser no SPREAD,caso contrário vem undefine ou vazio
 */
function formataObjetoReduceSpread(cart: iShopping) {
  const localCart: iShopping | any = {};
  localCart.user = {
    id: cart.user.id,
    nome: `${cart.user.nome} ${cart.user.lastnome}`,
  };
  localCart.itens = cart.itens.reduce((novo: any, atual) => {    
    return [...novo, {id: atual.product.id, quantity: atual.quantity}];    
  }, []);
  
  return localCart;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  shoppingCart: iShopping = {
    user: { id: 1, nome: 'tony', lastnome: 'filho' },
    itens: [
      { product: { id: 1, nome: 'manga' }, quantity: 10 },
      { product: { id: 2, nome: 'banana' }, quantity: 5 },
    ],
  };
  /**Criando uma COPIA do Objeto, não mais uma Referencia do objeto acima */
  shoppingSpread = {...this.shoppingCart};
    constructor() {}

  ngOnInit(): void {
    console.group('Formantando Objetos MAP');
    console.log(formataObjetoMap(this.shoppingCart));
    console.groupEnd();
    console.group('Formantando Objetos REDUCE');
    console.log(formataObjetoReduce(this.shoppingCart));
    console.groupEnd();
    console.group('Formantando Objetos REDUCE e SPREAD');
    console.log(formataObjetoReduceSpread(this.shoppingCart));
    console.groupEnd();
  }
}
