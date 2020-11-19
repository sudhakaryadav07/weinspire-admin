import React, { Component } from 'react';
import { USER } from '../../data/data';
import { Footer, AppBar } from '../../components/index';
import { Container, Row, Input, InputGroup, Button, InputGroupAddon, InputGroupText, Col } from 'reactstrap';
import { UserModal } from './components/modal/index';
import { UserTable } from './components/table/index';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "create",
      search: "",
      users: [],
      user: null,
      gKeyUserModal: null,
      gKeyLoader: false
    }
  }

  UNSAFE_componentWillMount() {
    this.initState();
  }

  initState = () => {
    try {
    } catch (e) {

    }
  }

  refreshComponent = async (key) => this.setState({ [key]: key + Math.random() });
  resetComponent = async (key) => this.setState({ [key]: null });

  handleChange = (e) => {
    try {
      this.refreshComponent('gKeyLoader');
      let filteredUser = [];

      if (e.target.name === "search") {
        this.setState({ search: e.target.value });
        filteredUser = USER.filter(item =>
          item.firstName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
          item.lastName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        );

      }
      this.setState({ users: filteredUser });
      this.resetComponent('gKeyLoader');
    } catch (e) {

    }
  }

  addUser = async (data) => {
    try {
      let { users } = this.state;
      users.push(data);
      this.setState({ users });
      this.resetComponent('gKeyUserModal');
    } catch (e) {

    }
  }

  selectUser = async (data) => {
    try {
      this.setState({ user: data, mode: 'edit' });
      await this.refreshComponent('gKeyUserModal');
    } catch (e) {
    }
  }

  editUser = async (data) => {
    try {
      let { users } = this.state;
      let updatedUser = users.map(item => {
        if (item.firstName === data.firstName) {
          return data;
        }
        return item;
      });
      this.setState({ users: updatedUser });
      this.resetComponent('gKeyUserModal');
    } catch (e) {

    }
  }

  removeUser = async (data) => {
    try {
      let { users } = this.state;
      let updatedUser = users.filter(item => item.firstName !== data.firstName);
      this.setState({ users: updatedUser });
    } catch (e) {

    }
  }

  renderUserModal() {
    let { gKeyUserModal, user, mode } = this.state;
    if (gKeyUserModal) {
      return (
        <UserModal
          mode={mode}
          user={user}
          addUser={this.addUser}
          editUser={this.editUser}
          resetComponent={this.resetComponent}
        />
      );
    }
  }

  renderUserTable() {
    let { users } = this.state;
    return (
      <UserTable
        users={users}
        selectUser={this.selectUser}
        removeUser={this.removeUser}
      />
    );
  }

  render() {
    let { search, gKeyLoader } = this.state;
    return (
      <>
        <AppBar history={this.props.history} />
        <div className="wrapper">
          <div className="team-3 section-image" style={{ backgroundImage: "url(" + require("assets/img/bg21.jpg") + ")" }}>
            <Container>
              <Row>
                <Col md="5" >
                  <InputGroup   >
                    <Input
                      name="search"
                      className="homeinput"
                      placeholder="Search...."
                      value={search}
                      onChange={this.handleChange}
                      type="text"
                    ></Input>
                    <InputGroupAddon addonType="append" >
                      <InputGroupText style={{ backgroundColor: 'transparent', color: 'white' }}>
                        <i className="now-ui-icons users_single-02"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col md="2" >
                  <Button title='Go' style={{ margin: 0, fontSize: 12 }} onClick={() => this.refreshComponent('gKeyUserModal')}>Add User</Button>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ height: 510, overflow: 'auto' }} key={gKeyLoader}>
                {this.renderUserTable()}
              </Row>
            </Container>
          </div>
          {this.renderUserModal()}
          <Footer history={this.props.history} />
        </div>
      </>
    );
  }
}

export default Admin;