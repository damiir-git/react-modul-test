import React from 'react';

export default class Loading extends React.Component {
    render() {
        if (this.props.loading) {
            return <div>Загрузка...</div>
        }
        if (this.props.error) {
            return <div className="Error">{this.props.error.message}</div>
        }
        return <div>{this.props.children }</div>
    }
}