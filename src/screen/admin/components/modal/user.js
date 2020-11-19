import React, { Component } from 'react';
import TagsInput from "react-tagsinput";
import { Modal, Col, Input, ModalFooter, Button } from 'reactstrap';

class User extends Component {
    user = { title: "", img: "", intrest: [], shortSummary: "" };

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            user: this.user
        }
    }

    UNSAFE_componentWillMount() {
        this.initState();
    }

    initState = async () => {
        try {
            let { user, mode } = this.props;
            if (mode === "edit") {
                console.log(user)
                this.setState({ user })
            }
        } catch (e) {

        }
    }

    handleChange = (event) => {
        try {
            const _state = this.state.user;
            _state[event.target.name] = event.target.value;
            this.setState({ state: _state });
        } catch (e) {
        }
    }

    handleChangeDocument = async (event) => {
        try {
            let reader = new FileReader();
            reader.onload = (e) => {
                var output = document.getElementById('output_image');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0])
            this.setState({ file: event.target.files[0] })
        } catch (e) {

        }
    };

    setTagsValue = async (value) => {
        try {
            this.setState({ user: { ...this.state.user, intrest:value } });
        } catch (e) {

        }
    }

    handleSubmit = async () => {
        try {
            let { user } = this.state
            let { mode, addUser, editUser } = this.props;
            if (mode === "create") {
                addUser(user);
            } else {
                editUser(user);
            }
        } catch (e) {

        }
    }

    render() {
        let { file, img, user } = this.state;
        let { title, intrest, shortSummary } = user;
        let { resetComponent } = this.props;
        return (
            <Modal isOpen={true}>
                <div className="modal-header">
                    <button
                        aria-hidden={true}
                        className="close"
                        style={{padding: '3px 6px'}}
                        onClick={() => resetComponent('gKeyUserModal')}
                        type="button">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <h5 className="modal-title" id="myModalLabel">Add User </h5>
                </div>
                <div className="modal-body" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
                    <label htmlFor="uploaddoc" className="custom-file-upload" style={{ marginTop: 10, backgroundColor: file ? 'green' : 'orange', color: 'white', padding: '5px 10px', borderRadius: 3 }}>
                        Change
                    </label>
                    <input size="60" accept='image/*' name="document" multiple id="uploaddoc" type="file" onChange={this.handleChangeDocument} />
                    <div style={{ height: 100, width: 100, backgroundColor: 'ghostwhite', borderRadius: 50 }}>
                        {file ? <img style={{ height: 100, width: 100, borderRadius: 50 }} id="output_image" src={img} alt="..." /> : ""}
                    </div>
                </div>
                <Col md="12" style={{ padding: '0px 30px 0px 30px' }}>
                    <div className="title" style={{ paddingTop: 10 }}>
                        <h4 style={{ margin: 0 }}>Title</h4>
                    </div>
                    <Input
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Title..."
                        style={{ borderRadius: 0, border: 'none', borderBottom: '1px solid #E3E3E3' }}
                    ></Input>
                </Col>
                <Col md="12" style={{ padding: '0px 30px 0px 30px' }}>
                    <div className="title" style={{ paddingTop: 15 }}>
                        <h4 style={{ margin: 0 }}>Tags</h4>
                    </div>
                    <div style={{backgroundColor:'#cabfbf',height:80,overflow:'auto',borderRadius:3}}>
                    <TagsInput
                    
                    tagProps={{
                        className: "react-tagsinput-tag badge",
                    }}
                    onChange={(value) => this.setTagsValue(value)}
                    value={intrest}
                    onlyUnique
                ></TagsInput>
                    </div>
                </Col>
                <Col md="12" style={{ padding: '0px 30px 0px 30px' }}>
                    <div className="title" style={{ paddingTop: 15 }}>
                        <h4 style={{ margin: 0 }}>Summary</h4>
                    </div>
                    <Input
                        rows="4"
                        cols="80"
                        name="shortSummary"
                        value={shortSummary}
                        onChange={this.handleChange}
                        type="textarea"
                        placeholder="You can write your summary here..."
                    ></Input>
                </Col>
                <ModalFooter style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button color="default" type="button" onClick={() => this.handleSubmit()} >
                        Save
                    </Button>
                </ModalFooter>
            </Modal >
        );
    }
}

export default User;