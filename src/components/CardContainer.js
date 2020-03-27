import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

import { loadOne } from '../store/card/actions';

class CardContainer extends React.Component {
    componentDidMount() {
        /* предотвращаем повторную загрузку, так как бэка нет */
        if (this.props.id != this.props.oldId) {
            this.props.loadOne(this.props.id);
        }
    }
    render() {
        const { id, name, ogrn, type, registrationDate, active, agentTypes } = this.props;
        return <Card
            id={id}
            name={name}
            ogrn={ogrn}
            type={type}
            registrationDate={registrationDate}
            active={active}
            agentTypes={agentTypes}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        oldId: state.card.Id,
        name: state.card.Name,
        ogrn: state.card.OGRN,
        type: state.card.Type,
        registrationDate: state.card.RegistrationDate,
        active: state.card.Active,
        agentTypes: state.list.agentTypes
    }
}

const mapDispatchToProps = {
    loadOne
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);