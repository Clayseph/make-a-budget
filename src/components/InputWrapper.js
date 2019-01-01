import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default class InputWrapper extends Component {
  render() {
    return (
        <FormControl className="formControl">
                    <InputLabel htmlFor="component-simple">{this.props.title}</InputLabel>
                    <Input id="component-simple" name={this.props.name} value={this.props.value} onChange={this.props.onChange} />
        </FormControl>
    );
  }
}
