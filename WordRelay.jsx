var React = require('react');
const {Component} = React;

class GivenWord extends Component {
    render(){
        return(
            <header>
                <b>제시어:</b> {this.props.givenWord}
            </header>
        )
    }
}

class SubmitWord extends Component {
    render(){
        return(
            <article>
                <form onSubmit={this.props.onSubmit} autoComplete="off">
                    <input ref={this.props.onRefInput}
                    type="text" name="text"
                    value={this.props.inBoxWord}
                    onChange={this.props.onChange}/>
                    <button type="submit">Submit</button>
                </form>
            </article>
        )
    }
}

class ShowResult extends Component {
    render(){
        return(
            <footer>
                정답: {this.props.result}
            </footer>
        )
    }
}


class WordRelay extends Component {
    state = {
            givenWord: '어기여차',
            inBoxWord: '',
            result: '',
            };

    handleChange = (e) => {
        this.setState({
            inBoxWord: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let length = this.state.givenWord.length - 1;
        if(this.state.givenWord[length] === e.target.text.value[0]){
            this.setState({
                givenWord: e.target.text.value,
                inBoxWord: '',
                result: 'O',
            });
            this.input.focus();
        } else {
            this.setState({
                inBoxWord: '',
                result: 'X',
            });
            this.input.focus();
        }
    }

    handleRefInput = (ref) => {this.input = ref}

    render(){
        return (
        <>
            <GivenWord givenWord={this.state.givenWord} />
            <SubmitWord inBoxWord={this.state.inBoxWord}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        onRefInput={this.handleRefInput}/>
            <ShowResult result = {this.state.result}/>
        </>
        )
    }
}

export default WordRelay;
// module.exports = WordRelay;