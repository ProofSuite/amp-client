// @flow
import React from 'react';
import TokenSelectRenderer from './TokenSelectRenderer';

type Props = {
  tokens: Array<Object>,
  token: Object,
  onChange: (SyntheticEvent<>) => void,
};

const TokenSelect = (props: Props) => {
  return <TokenSelectRenderer items={props.tokens} item={props.token} onChange={props.onChange} />;
};

export default TokenSelect;
