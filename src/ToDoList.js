import React, {Component} from 'react';
import Item from './Items';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                items: []
            }
    }

    addItem = (e) => {
        e.preventDefault();
        const items = e.target.items.value;

        let newItems = this.state.items
        newItems.push(items)

        console.log(items);
        this.setState({
            items: newItems
        });
    }

    deleteAllItem = () => {
        this.setState({
            items: []
        });
    }

    deleteAnItem = (index) => {
        let itemList = this.state.items;
        itemList.splice(index, 1);
        this.setState({
            items: itemList
        });
    }

    render() {
        return (
            <div className="main">
                <body>
                <form onSubmit={this.addItem}>
                    <input type="text" className="todo-input" name="items" placeholder="Enter a Task" required/>
                    <button type="submit" className="listButton">Add Item</button>
                </form>
                <Item TodoItems={this.state.items}
                      deleteItem={this.deleteAllItem}
                      deleteAnItem={this.deleteAnItem}
                />
                </body>
            </div>
        );
    }
}

export default ToDoList;