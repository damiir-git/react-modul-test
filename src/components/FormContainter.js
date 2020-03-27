import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';

import { loadOne, saveOne } from '../store/card/actions';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        /* предотвращаем повторную загрузку, так как бэка нет */
        if (this.props.id != this.props.oldId) {
            this.props.loadOne(this.props.id);
        }
    }

    handleSubmit(values) {
        this.props.saveOne(values);
        this.props.onSave(values.Id);
    }

    render() {
        const { id, initialValues } = this.props;
        return <Form
            id={id}
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        initialValues: state.card,
        oldId: state.card.Id
    }
}

const mapDispatchToProps = {
    loadOne, saveOne
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);