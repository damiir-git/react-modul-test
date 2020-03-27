import React from 'react';

class Table extends React.Component {
    render() {
        return <div className="Table">{this.props.children}</div>
    }
}

class Row extends React.Component {
    render() {
        return <div className="Row" onClick={() => this.props.onClick()}>{this.props.children}</div>
    }
}

class Head extends React.Component {
    render() {
        return <div className="Head">{this.props.children}</div>
    }
}

class Item extends React.Component {
    render() {
        return <div className="Item">{this.props.children}</div>
    }
}

class Header extends React.Component {
    render() {
        return (
            <Head>
                {this.props.heads.map((item) => {
                    return (
                        <Item key={item.id}>{item.name}</Item>
                    );
                })}
            </Head>
        )
    }
}

export {
    Table,
    Row,
    Item,
    Header
};