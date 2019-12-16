import React from 'react';

import axios from 'axios';

class App extends React.Component {
    state = {
        apiResponse:[],
        title: '',
        description: '',
        pagination: 1,
    }

    handleChangeTitle (event) {
        this.setState( {title: event.target.value} )
    }

    handleChangeDescription (event) {
        this.setState( {description: event.target.value} )
    }

    handleSubmit(event) {
        axios.post('http://localhost:8000/api/todos' , { title: this.state.title, description: this.state.description, createdAt: '2019/09/10' });
        /*event.preventDefault();*/
    }

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/todos?page=' + this.state.pagination)
            .then(response => {
                this.setState( { apiResponse: response.data } )
            })
            .catch(error => {
                console.log(error);
            });

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>TODO-List</h1>
                    {
                        this.state.apiResponse.map(apiResponse =>(
                            <div key={apiResponse.id}>
                                <label><strong>{apiResponse.id}</strong>-{apiResponse.title}</label>
                            </div>
                        ))
                    }
                    <form method="post" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Titre</label>
                            <input type="text" className="form-control" value={this.state.title} onChange={this.handleChangeTitle} name="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Description</label>
                            <input type="text" className="form-control" value={this.state.description} onChange={this.handleChangeDescription} name="description"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </header>
                <div className="pagination">

                    <a onClick={this.handlePagination} value="2">2</a>

                </div>
            </div>
        );
    }
}

export default App;