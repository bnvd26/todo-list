import React, {Fragment} from 'react';
import Items from './components/Items'

import axios from 'axios';

class App extends React.Component {
    state = {
        todoItems:[],
        title: '',
        description: '',
        pagination: 1,
        message: '',
        deleteValue: ''

    }

    handleChangeTitle (event) {
        this.setState( {title: event.target.value} )
    }

    handleChangeDescription (event) {
        this.setState( {description: event.target.value} )
    }

    handleSubmit() {
        axios.post('http://localhost:8000/api/todos' , { title: this.state.title, description: this.state.description, createdAt: '2019/09/10' });
    }

    /*handleClick(event) {
        this.setState({ deleteValue: event });
        axios.delete('http://localhost:8000/api/todos/' + this.deleteValue );
    }*/

    /*handleClick(e) {
        this.setState({
            deleteValue: e.currentTarget.dataset.id
        });
        console.log(this.deleteValue)
    }*/


    componentDidMount = () => {
        axios.get('http://localhost:8000/api/todos?page=' + this.state.pagination)
            .then(response => {
                this.setState( { todoItems: response.data } )
            })
            .catch(error => {
                console.log(error);
            });

        /*this.handleClick = this.handleClick.bind(this);*/
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    render() {
        return (
            <div className="App">
                <h1>TODO-List</h1>
                    <form onSubmit={this.handleSubmit} method="post">
                        <div className="form-row">
                            <div className="col">
                                <h3>Titre</h3>
                                <input type="text" className="form-control" value={this.state.title} onChange={this.handleChangeTitle} name="title" />
                            </div>
                            <div className="col">
                                <h3>Description</h3>
                                <input type="text" className="form-control" value={this.state.description} onChange={this.handleChangeDescription} name="description" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-success mt-4">Envoyer</button>
                    </form>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Titre</th>
                                <th scope="col">Description</th>
                                <th scope="col">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todoItems.map(res =>(
                                    <Items key={res.id} index={res.id} title={res.title} description={res.description}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;