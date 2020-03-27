import React from 'react';
import { Field, reduxForm } from 'redux-form';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
    <div>
          <DatePicker {...input} dateFormat="dd.MM.yyyy" selected={input.value ? new Date(input.value) : null} />
          {touched && error && <span>{error}</span>}
    </div>
  );

class Form extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Наименование</label>
                    </div>
                    <div>
                        <Field name="Name" component="input" type="text" />
                    </div>
                    <div>
                        <label>ОГРН</label>
                    </div>
                    <div>
                        <Field name="OGRN" component="input" type="text" />
                    </div>
                    <div>
                        <label>Тип компании</label>
                    </div>
                    <div>
                        <Field name="Type" component="select">
                            <option value="0">ИП</option>
                            <option value="1">ООО</option>
                        </Field>
                    </div>
                    <div>
                        <label>Дата регистрации</label>
                    </div>
                    <div>
                        <Field
                            name="RegistrationDate"
                            component={renderDatePicker}
                        />
                    </div>
                    <div>
                        <label htmlFor="active">Активность</label>
                    </div>
                    <div>
                        <Field
                            name="Active"
                            id="active"
                            component="input"
                            type="checkbox" />
                    </div>
                    <div>
                        <button type="submit">Сохранить</button>
                    </div>
                </form>
            </div>
        )
    }
}

Form = reduxForm({
    form: 'companiesForm',
    enableReinitialize: true
})(Form);

export default Form;