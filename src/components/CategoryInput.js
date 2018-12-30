import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


export default class CategoryInput extends Component {
  render() {
    return (
            <div className="addCategory">
                    <FormControl className="formControl">
                        <InputLabel htmlFor="component-simple">Category</InputLabel>
                        <Input id="component-simple" name="category" value={this.props.category ? this.props.category : ''} onChange={this.props.onCategoryChange} />
                    </FormControl>
                    <FormControl className="formControl">
                        <InputLabel htmlFor="component-simple">Amount</InputLabel>
                        <Input id="component-simple" type="numeric" name="categoryValue" value={this.props.amount ? this.props.amount : ''} onChange={this.props.onAmountChange} />
                    </FormControl>
                    <Fab color="primary" aria-label="Add" onClick={this.props.addAction}>
                        <AddIcon />
                    </Fab>
            </div>
    );
  }
}
