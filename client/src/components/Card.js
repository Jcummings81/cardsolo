import React from 'react' 
import axios from 'axios'
import Form from './Form'

class Card extends React.Component {
    state = { card: {}, edit: false }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`/api/cards/${id}`)
          .then( res => this.setState({ card: res.data}))
    }

    toggleEdit = () => {
        this.setState({ edit !this.state.edit })
    }

    submit = (card) => {
        const { id } = this.props.match.params
        axios.put(`/api/products/${id}`, { card })
          .then( res => {
              this.setState({
                  card: res.data,
                  edit: false
              })
          })
    }

    show() {
        const { card: { name, post, liked}} = this.state
        return (
            <div>
                <h1>{name}</h1>
                <p>{post}</p>
                <img alt="thumbs up">{liked}</img>
            </div>
        )
    }

    form() {
        return <Form {...this.state.product} submit={this.submit} />
    }

    render() {
        const { edit } = this.state
        return (
            <div>
                { edit ? this.form() : this.show()}
            </div>
        )
    }
}

export default Card