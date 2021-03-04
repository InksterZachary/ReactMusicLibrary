import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: 'Think and Grow Rich', author: 'Napolean Hill'},
            {title: 'Primed to Perform', author: 'Neel Doshi'},
            {title: 'Napolean Hill\'s Outwitting the Devil', author: 'Napolean Hill'}
        ];
        this.state = {
            bookNumber: 1
        }
    }

    goToNextBook(){
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }
    goToPreviousBook(){
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber --;
        if(tempBookNumber < 0)
            tempBookNumber = this.books.length -1;
        this.setState({
            bookNumber: tempBookNumber
        });
    }
    render() {
        return (
            <div className="text-center">
                <TitleBar />
                <div className="row row-spacer">
                    <div className="col-md-4">
                        <button onClick={() => this.goToPreviousBook()}>Previous Book</button>
                    </div>
                    <div className="col-md-4">
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[0].author}</h4>
                    </div>
                    <div className="col-md-4">
                        <button onClick={() => this.goToNextBook()}>Next Book</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;