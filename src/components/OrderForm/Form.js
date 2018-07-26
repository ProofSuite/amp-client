// @flow
import React from 'react';
import { Button, FormGroup } from '@blueprintjs/core';
import type { FormTypes, InputFieldsTypes } from '../../types/orderForm';

type FromTypes = FormTypes;
type InputFields = InputFieldsTypes;

const Form = (props: FromTypes) => {
  const { state, quoteToken, onInputChange, loggedIn, formName, baseToken } = props;
  return (
    <div>
      {state.selectedTabId === 'limit' ? (
        <LimitForm props={state} quoteToken={quoteToken} baseToken={baseToken} onInputChange={onInputChange} />
      ) : (
        <StopLimitForm props={state} quoteToken={quoteToken} baseToken={baseToken} onInputChange={onInputChange} />
      )}
      {loggedIn ? (
        <Button string="submit" intent="primary" text={formName} />
      ) : (
        <Button string="button" large={true} intent="primary" text="Login" />
      )}
    </div>
  );
};

export default Form;

const LimitForm = (fieldsProps: InputFields) => {
  const { props, quoteToken, baseToken, onInputChange } = fieldsProps;
  return (
    <div className="column">
      <FormGroup label="Price" labelFor="text-input" required={true}>
        <input
          id="text-input"
          name="price"
          onChange={evt => onInputChange({ evt, target: 'price' })}
          value={props.price}
          min="0"
          className="pt-input"
          type="number"
          placeholder="Input group"
          dir="auto"
        />
        <span className="curr-name">{baseToken}</span>
      </FormGroup>
      <FormGroup label="Amount" labelFor="text-input" required={true}>
        <input
          id="text-input"
          onKeyPress={() => onInputChange({ target: 'radio' })}
          onChange={evt => onInputChange({ evt, target: 'amount' })}
          value={props.amount}
          min="0"
          className="pt-input"
          type="number"
          placeholder="Input group"
          dir="auto"
        />
        <span className="curr-name">{quoteToken}</span>
      </FormGroup>
      <FormGroup className="radio-btns-container">
        <div className="pt-input-group radio-buttons">
          <label className={props.portion === 25 ? 'box active-box' : 'box'}>
            25%
            <input
              type="radio"
              onChange={evt => onInputChange({ evt, target: 'portion' })}
              value={25}
              checked={props.portion === 25}
            />
          </label>
          <label className={props.portion === 50 ? 'box active-box' : 'box'}>
            50%
            <input
              type="radio"
              onChange={evt => onInputChange({ evt, target: 'portion' })}
              value={50}
              checked={props.portion === 50}
            />
          </label>
          <label className={props.portion === 75 ? 'box active-box' : 'box'}>
            75%
            <input
              type="radio"
              onChange={evt => onInputChange({ evt, target: 'portion' })}
              value={75}
              checked={props.portion === 75}
            />
          </label>
          <label className={props.portion === 100 ? 'box active-box' : 'box'}>
            100%
            <input
              type="radio"
              onChange={evt => onInputChange({ evt, target: 'portion' })}
              value={100}
              checked={props.portion === 100}
            />
          </label>
        </div>
      </FormGroup>
      <FormGroup label="Total" labelFor="text-input" required={true}>
        <input
          id="text-input"
          onKeyPress={() => onInputChange({ target: 'radio' })}
          onChange={evt => onInputChange({ evt, target: 'total' })}
          value={props.total}
          min="0"
          className="pt-input"
          type="number"
          placeholder="Input group"
          dir="auto"
        />
        <span className="curr-name">{baseToken}</span>
      </FormGroup>
    </div>
  );
};

const StopLimitForm = (fieldsProps: InputFields) => {
  const { props, quoteToken, baseToken, onInputChange } = fieldsProps;
  return (
    <div className="column">
      <FormGroup label="Stop Price" labelFor="text-input">
        <input
          id="text-input"
          onChange={evt => onInputChange({ evt, target: 'stopPrice' })}
          value={props.stopPrice}
          min="0"
          className="pt-input"
          type="number"
          placeholder="Input group"
          dir="auto"
        />
        <span className="curr-name">{baseToken}</span>
      </FormGroup>
      <FormGroup label="Limit Price" labelFor="text-input">
        <input
          id="text-input"
          onChange={evt => onInputChange({ evt, target: 'limitPrice' })}
          value={props.limitPrice}
          min="0"
          className="pt-input"
          type="number"
          placeholder="Input group"
          dir="auto"
        />
        <span className="curr-name">{baseToken}</span>
      </FormGroup>
      <FormGroup label="Amount" labelFor="text-input">
        <input
          id="text-input"
          onChange={evt => onInputChange({ evt, target: 'amount' })}
          value={props.amount}
          min="0"
          className="pt-input"
          type="number"
          placeholder="Input group"
          dir="auto"
        />
        <span className="curr-name">{quoteToken}</span>
      </FormGroup>
      <FormGroup label="Total" labelFor="text-input">
        <input
          id="text-input"
          onChange={evt => onInputChange({ evt, target: 'total' })}
          value={props.total}
          min="0"
          className="pt-input"
          type="number"
          placeholder="Input group"
          dir="auto"
        />
        <span className="curr-name">{baseToken}</span>
      </FormGroup>
    </div>
  );
};
