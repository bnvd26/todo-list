import React, {Fragment} from 'react';
import Items from './components/Items'
import FormAddItems from './components/FormAddItems';
import axios from 'axios';

class App extends React.Component {
    state = {
        todoItems:[],
        title: '',
        description: '',
        pagination: 1
    };

    getData() {
        axios.get('http://localhost:8000/api/todos?page=' + this.state.pagination)
            .then(response => {
                this.setState( { todoItems: response.data } )
            })
    }

    handleChangeTitle (event) {
        this.setState( {title: event.target.value} )
    }

    handleChangeDescription (event) {
        this.setState( {description: event.target.value} )
    }

    handleSubmit () {
        axios.post('http://localhost:8000/api/todos' , { title: this.state.title, description: this.state.description, createdAt: '2019/09/10' });
    }

    handleClick (event) {
        axios.delete('http://localhost:8000/api/todos/' + event.target.dataset.value)
            .then(res => {
                this.getData()
            });
    }

    componentDidMount = () => {
        this.getData();
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    render() {
        return (
            <div className="text-center">
                <h1>TODO-LIST</h1>
                <div className="card mb-4">
                        <FormAddItems
                            title={this.state.title}
                            description={this.state.description}
                            submit={this.handleSubmit}
                            handleTitle={this.handleChangeTitle}
                            handleDescription={this.handleChangeDescription}/>
                </div>
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
                                    <Items
                                        key={res.id}
                                        index={res.id}
                                        title={res.title}
                                        description={res.description}
                                        data-value={res.id}
                                        handleDelete={this.handleClick} />
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