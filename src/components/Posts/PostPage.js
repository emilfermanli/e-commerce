import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from "react-router-dom"
import postImg from "../../assets/img/post.jpg"
import short from "../../assets/img/short.jpg"

function PostPage() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="post-page-box">
                            <div className="post-page-header">
                                <h1>Morbi Interdum Velit Quis Magna Placerat Lobortis Eget</h1>
                                <div className="writer">
                                    <span className="dot">By<Link>Emil Fermanli</Link></span>
                                    <span className="dot"><Link>November 30, 2018</Link></span>
                                    <span><Link>4 Comment</Link></span>

                                </div>
                            </div>
                            <div className="post-page-img-box">
                                <img src={postImg} alt="post-img" />
                            </div>
                            <div className="post-page-text">
                                <p>
                                    Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante facilisis pharetra.
                                    <br />
                                    <br />

                                    Phasellus ut elit vestibulum, dignissim mi non, suscipit ex. Praesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla sodales, leo metus volutpat risus,at suscipit ipsum diam eget sem. Maecenas dictum elit in enim molestie, vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis, suscipit consequat ex.
                            </p>
                            </div>
                            <div className="related-post post-page-text" >
                                <div className="related-header">
                                    <h4 className="font-weight-bold">Related Posts</h4>
                                </div>
                                <div className="related-post-box">
                                    <Row>
                                        <Col md={6} lg="6">
                                            <div className="related-img">
                                                <Link to="/post-page">
                                                    <img src={postImg} alt="img" />
                                                </Link>
                                            </div>
                                            <div className="related-mini-header">
                                                <Link className="font-weight-bold">
                                                    A Variety Of Other Academic And Non-Academic Approaches Have Been Explored
                                                 </Link>
                                                <span>October 19, 2019</span>
                                            </div>
                                        </Col>
                                        <Col md={6} lg="6">
                                            <div className="related-img">
                                                <Link to="/post-page">
                                                    <img src={postImg} alt="img" />
                                                </Link>
                                            </div>
                                            <div className="related-mini-header">
                                                <Link className="font-weight-bold">
                                                    A Variety Of Other Academic And Non-Academic Approaches Have Been Explored
                                                 </Link>
                                                <span>October 19, 2019</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                            </div>
                            <div className="post-comment post-page-text">
                                <div className="related-header">
                                    <h4 className="font-weight-bold">Comments (2)</h4>
                                </div>
                                <div className="commenter">
                                    <div className="commenter-img">
                                        <img src={short} alt="commenter" />
                                    </div>
                                    <div className="commenter-info">
                                        <div >
                                            <h5>Jessica Moore</h5>
                                        </div>
                                        <div>
                                            <p>Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis in mattis in, vehicula eu nulla. Nulla nec tellus pellentesque.</p>
                                        </div>
                                        <div>
                                            <span>November 30, 2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="commenter">
                                    <div className="commenter-img">
                                        <img src={short} alt="commenter" />
                                    </div>
                                    <div className="commenter-info">
                                        <div >
                                            <h5>Jessica Moore</h5>
                                        </div>
                                        <div>
                                            <p>Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis in mattis in, vehicula eu nulla. Nulla nec tellus pellentesque.</p>
                                        </div>
                                        <div>
                                            <span>November 30, 2018</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-write-comment post-page-text">
                                <div className="related-header">
                                    <h4 className="font-weight-bold">Write A Comment</h4>
                                </div>
                                <div className="write">
                                    <Form>
                                        <Row>
                                            <Col lg={4}>
                                                <div>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">First Name</Label>
                                                        <Input type="text" name="name" id="exampleEmail2" placeholder="First Name" />
                                                    </FormGroup>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">Last Name</Label>
                                                        <Input type="text" name="surname" id="exampleEmail3" placeholder="Last Name" />
                                                    </FormGroup>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">Email Adress</Label>
                                                        <Input type="email" name="email" id="exampleEmail4" placeholder="Email Adress" />
                                                    </FormGroup>
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <FormGroup>
                                                    <Label for="exampleText">Comment</Label>
                                                    <Input rows="6" type="textarea" name="comment" id="exampleText" />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <button className="custom-button" >
                                                    Post Comment
                                                </button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PostPage
