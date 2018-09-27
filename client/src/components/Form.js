import React from 'react'

class Form extends React.Component {
    defaultValues = { name: '', post: '', liked: false}
    state = {...this.defaultValues}

    static getDerivedStateFromProps(props, state) {
        if (props.id !== state.id)
            return {...props}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submit(this.state)
        this.setState({ ...this.defaultValues })
    }

    handleChange = (e) => {
        const {name, value } = e.target
        this.setState({ [name]: value})
    }

    render() {
        const { name, post, liked }
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.handleChange}
                    required
                />

                 <input
                    name="post"
                    placeholder="Post"
                    value={post}
                    onChange={this.handleChange}
                    required
                />
                <button>Submit Yo</button>
            </form>
        )
    }
}

export default Form