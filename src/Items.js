import React, {Component} from 'react';
import './Items.css';

class Items extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    {this.props.TodoItems.map((item, index) => <div className="item-container">{item}
                        <button className="delete-btn" type="button"
                                onClick={() => this.props.deleteAnItem(index)}>Delete
                        </button>
                    </div>)}

                    <button className="items-btn" type="submit" name="delete"
                            onClick={() => this.props.deleteItem()}>Delete All
                    </button>
            </div>);
    }
}

export default Items;