// @flow
import React from 'react';
import { Button, FormGroup, InputGroup, Label } from '@blueprintjs/core';
import type { FormProps, InputFieldsProps } from '../../types/orderForm';

const OrderFormRenderer = (props: FormProps) => {
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

export default OrderFormRenderer;

const LimitForm = (fieldsProps: InputFieldsProps) => {
  const { props, quoteToken, baseToken, onInputChange } = fieldsProps;
  return (
    <div className="column">
      <FormField
        props={{
          label: 'Price',
          onInputChange,
          name: 'price',
          value: props.price,
          placeholder: 'Price',
          spanValue: baseToken,
        }}
      />
      <FormField
        props={{
          label: 'Amount',
          onInputChange,
          name: 'amount',
          value: props.amount,
          placeholder: 'Amount',
          spanValue: quoteToken,
        }}
      />
      <FormGroup className="radio-btns-container">
        <div className="pt-input-group radio-buttons">
          <RadioButton
            props={{
              value: 25,
              portion: props.portion,
              onInputChange: onInputChange,
            }}
          />
          <RadioButton
            props={{
              value: 50,
              portion: props.portion,
              onInputChange: onInputChange,
            }}
          />
          <RadioButton
            props={{
              value: 75,
              portion: props.portion,
              onInputChange: onInputChange,
            }}
          />
          <RadioButton
            props={{
              value: 100,
              portion: props.portion,
              onInputChange: onInputChange,
            }}
          />
        </div>
      </FormGroup>
      <FormField
        props={{
          label: 'Total',
          onInputChange,
          name: 'total',
          value: props.total,
          placeholder: 'Total',
          spanValue: baseToken,
        }}
      />
    </div>
  );
};

const StopLimitForm = (fieldsProps: InputFieldsProps) => {
  const { props, quoteToken, baseToken, onInputChange } = fieldsProps;
  return (
    <div className="column">
      <FormField
        props={{
          label: 'Stop Price',
          onInputChange,
          name: 'stopPrice',
          value: props.stopPrice,
          placeholder: 'Stop Price',
          spanValue: baseToken,
        }}
      />
      <FormField
        props={{
          label: 'Limit Price',
          onInputChange,
          name: 'limitPrice',
          value: props.limitPrice,
          placeholder: 'Limit Price',
          spanValue: baseToken,
        }}
      />
      <FormField
        props={{
          label: 'Amount',
          onInputChange,
          name: 'amount',
          value: props.amount,
          placeholder: 'Amount',
          spanValue: quoteToken,
        }}
      />
      <FormField
        props={{
          label: 'Total',
          onInputChange,
          name: 'total',
          value: props.total,
          placeholder: 'Total',
          spanValue: baseToken,
        }}
      />
    </div>
  );
};

const FormField = ({ props }) => {
  const { label, onInputChange, name, value, placeholder, spanValue } = props;
  return (
    <FormGroup label={label}>
      <InputGroup name={name} onChange={onInputChange} value={value} min="0" type="number" placeholder={placeholder} />
      <span className="curr-name">{spanValue}</span>
    </FormGroup>
  );
};

const RadioButton = ({ props }) => {
  const { onInputChange, value, portion } = props;
  return (
    <Label className={portion === value ? 'box active-box' : 'box'}>
      {value}%
      <InputGroup name="portion" type="radio" onChange={onInputChange} value={value} />
    </Label>
  );
};
