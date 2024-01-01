import React from "react";

class ContactInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tag: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

     
    onTagChangeEventHandler(event) {
        this.setState(() => {
        return {
            tag: event.target.value,
        }
        });
    }

    onNameChangeEventHandler(event){
        this.setState(() => {
            return {
                tag: event.target.value
            }
        })
    }

     
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render (){
        <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
            <input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChangeEventHandler} />
            <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
            <button type="submit">Tambah</button>
        </form>
    }
}

export default ContactInput;