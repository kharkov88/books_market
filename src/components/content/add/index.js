import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input , Label} from 'semantic-ui-react'
import "./add.css"

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 5) {
    errors.name = 'Must be 5 characters or more'
  }
  if (!values.author) {
    errors.author = 'Required'
  } else if (values.author.length > 15) {
    errors.author = 'Must be 15 characters or less'
  }
  if (!values.content) {
    errors.content = 'Required'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const renderTextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <textarea {...input} placeholder={label}  rows="12" cols="51"/>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className="form" onSubmit={handleSubmit}>
    <div>
      <div className="form-row">
        <Label >Название:</Label>
        <div>
        <Input>
            <Field
            name="name"
            component={renderField}
            type="text"
            label="Название книги"
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
            component={renderField}
            type="text"
            label="Автор"
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
          <Field name="content" component={renderTextArea} />
        </div>
      </div>
      <div>
        <button type="submit" disabled={submitting}>
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

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  validate,
  warn
})(SimpleForm)
