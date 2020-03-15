import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const inventory = yield call(api.get, `/inventory/${id}`);

  const amountInInventory = inventory.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > amountInInventory) {
    toast.error('Quantidade não disponível em estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const inventory = yield call(api.get, `/inventory/${id}`);
  const inventoryAmount = inventory.data.amount;

  if (amount > inventoryAmount) {
    toast.error('Quantidade não disponível em estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
