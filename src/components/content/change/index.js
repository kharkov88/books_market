import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input , Label} from 'semantic-ui-react'
import {connect} from 'react-redux'
import "./change.css"
import {change as changeForm} from "../../../actions"

class SimpleForm extends React.Component {
  constructor(){
    super()
    //this.handleSubmit = this.handleSubmit.bind(this)
  }
  // handleSubmit(values){
  //   let {updateItem} = this.props
  //   updateItem(values)
  // }
  render(){
  const {  handleSubmit,pristine, reset, submitting, change } = this.props
  return (
    <form className="form" onSubmit={handleSubmit}>
    <div>
      <div className="form-row">
        <Label >Название:</Label>
        <div>
        <Input>
            <Field
            name="name"
            component="input"
            type="text"
            placeholder="Название книги"
            />
        </Input>    
        </div>
      </div>
      <div className="form-row">
      <Label >Автор:</Label>
        <div>
        <Input>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Автор"
          />
        </Input>
        </div>
      </div>
      <div className="form-row">
      <Label >Год издания:</Label>
        <div>
        <Input>
          <Field
            name="year"
            component="input"
            type="text"
            placeholder="Год издания"
          />
        </Input>
        </div>
      </div>
      <div className="form-row">
      <Label >src image:</Label>
        <div>
        <Input>
          <Field
            name="image_url"
            component="input"
            type="text"
            placeholder="src image"
          />
        </Input>
        </div>
      </div>
    </div>

    <div> 
      <div className="form-row">
        <Label >Описание:</Label>
        <div>
          <Field name="content" component="textarea"  rows="8" cols="45"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </div>
    </form>
  )
}
}

SimpleForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
})(SimpleForm);

SimpleForm = connect(
  state => ({
    initialValues: state.changing, // pull initial values from account reducer
  }),
  { change: changeForm }, // bind account loading action creator
)(SimpleForm);

export default SimpleForm;
