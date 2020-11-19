import React, { Component } from "react";
import TagsInput from "react-tagsinput";
import { Container, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { Footer, AppBar } from '../../components/index';

const TAGS = ["Amsterdam", "Washington", "Sydney", "Beijing"]

class Tag extends Component {


    constructor(props) {
        super(props);
        this.state = {
            search: null,
            tag: null,
            tags: TAGS
        }
    }

    UNSAFE_componentWillMount() {
        this.initState();
    }


    refreshComponent = async (key) => this.setState({ [key]: null });
    resetComponent = async (key) => this.setState({ [key]: null });

    initState = async () => {
        try {
        } catch (e) {

        }
    }

    setTagsValue = async (value) => {
        try {
            this.setState({ tags: value });
        } catch (e) {

        }
    }

    handleChange = (e) => {
        try {
            this.refreshComponent('gKeyLoader');
            let filteredTag = [];
            if (e.target.name === "search") {
                this.setState({ search: e.target.value });
                filteredTag = TAGS.filter(data => data.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
            }
            this.setState({ tags: filteredTag });
            this.resetComponent('gKeyLoader');
        } catch (e) {

        }
    }

    render() {
        let { search, tags, tag } = this.state;
        return (
            <>
                <AppBar history={this.props.history} />
                <section>
                    <div className="page-header clear-filter page-header">
                        <div className="page-header-image" style={{ backgroundImage: "url(" + require("assets/img/bg22.jpg") + ")" }} ></div>
                        <Container>
                            <Row>
                                <Col md="4" >
                                    <InputGroup   >
                                        <Input
                                            name="search"
                                            className="homeinput"
                                            placeholder="Search Tags...."
                                            value={search}
                                            onChange={this.handleChange}
                                            type="text"
                                        ></Input>
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText style={{ backgroundColor: 'transparent', color: 'white' }}>
                                                <i className="now-ui-icons ui-1_zoom-bold"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col md="8" ></Col>
                            </Row>
                        </Container>
                        <Container style={{ padding: 0, height: 429, overflow: 'auto' }}>
                            <Row>
                                <Col md="12" >
                                    <TagsInput
                                        style={{ backgroundColor: '#2CA8FF' }}
                                        tagProps={{
                                            className: "react-tagsinput-tag badge",
                                        }}
                                        onChange={(value) => this.setTagsValue(value)}
                                        value={tags}
                                        onlyUnique
                                    ></TagsInput>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <Footer history={this.props.history} />
            </>
        );
    }
}

export default Tag;
