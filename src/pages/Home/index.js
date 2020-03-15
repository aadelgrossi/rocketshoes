import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-skyline/37/B78-4579-937/B78-4579-937_zoom1.jpg"
          alt=""
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-skyline/37/B78-4579-937/B78-4579-937_zoom1.jpg"
          alt=""
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-skyline/37/B78-4579-937/B78-4579-937_zoom1.jpg"
          alt=""
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-skyline/37/B78-4579-937/B78-4579-937_zoom1.jpg"
          alt=""
        />
        <strong>Tênis muito legal</strong>
        <span>R$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
