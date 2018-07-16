//@flow
export type Token = {
  address: string,
  symbol: string,
};

export type Symbol = string;

export type TokenState = {
  +symbols: Array<Symbol>,
  +bySymbol: { [Symbol]: Token },
};

export type UpdateTokensAction = {
  type: 'tokens/UPDATE_TOKENS',
  payload: Token,
};

export type RemoveTokensAction = {
  type: 'tokens/REMOVE_TOKENS',
  payload: { [Symbol]: Symbol },
};

export type TokenEvent = any => TokenState => TokenState;
export type TokenAction = UpdateTokensAction | RemoveTokensAction;
