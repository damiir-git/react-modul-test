import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List';

import { loadData} from '../store/list/actions';

class CardContainer extends React.Component {
    componentDidMount() {
        /* предотвращаем повторную загрузку, так как бэка нет */
        if (this.props.companies.length === 0) {
            this.props.loadData(this.props.id);
        }
        
    }
    render() {
        return <List
            onRowClick = {this.props.onRowClick}
            companies = {this.props.companies}
            agentTypes = {this.props.agentTypes}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        companies: state.list.companies,
        agentTypes: state.list.agentTypes
    }
}

const mapDispatchToProps = {
    loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);