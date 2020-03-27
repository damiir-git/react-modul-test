import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import Loading from '../components/Loading';

import { loadData } from '../store/list/actions';

class CardContainer extends React.Component {
    componentDidMount() {
        /* предотвращаем повторную загрузку, так как бэка нет */
        if (this.props.companies.length === 0) {
            this.props.loadData(this.props.id);
        }

    }
    render() {
        const {loading, error, onRowClick, companies, agentTypes} = this.props;
        return (
            <Loading loading={loading} error={error}>
                <List
                    onRowClick={onRowClick}
                    companies={companies}
                    agentTypes={agentTypes}
                />
            </Loading>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.list
    }
}

const mapDispatchToProps = {
    loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);