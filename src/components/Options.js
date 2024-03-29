import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button className="button--link" onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </div>

    {props.options.length === 0 && (
      <div className="widget__message">
        <p>Please add an option to get started!</p>
      </div>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        count={index + 1}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
