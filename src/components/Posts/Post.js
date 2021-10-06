import React from 'react'
import { Container, Col, Row, } from "reactstrap"
import search from "../../assets/img/search.svg"
import { Link } from 'react-router-dom'
import pstImg from "../../assets/img/post.jpg"

function Post() {
    return (
        <Container>
            <Row>
                <Col className="mb-5 pt-5" lg={12}>
                    <h2 style={{ fontWeight: "bold", fontSize: "36px", }}>
                        Latest News
                    </h2>
                </Col>
                <Col lg={8}>
                    <div className="big-post-box">
                        <div className="img-box-hover" style={{ position: "relative" }}>
                            <Link to="post-page" className="img-before">
                                <img src={pstImg} alt="postImage" />
                            </Link>
                        </div>
                        <div className="post-cart">
                            <div className="bb-header mb-2">
                                <Link>Special Offers</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                <span>October 19, 2019</span>
                            </div>
                            <div>
                                <h4><Link>Logic Is The Study Of Reasoning And Argument Part 2</Link></h4>
                                <div className="mt-3 ">
                                    <p>In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...</p>
                                </div>
                                <div className="post-box mb-3">
                                    <Link to="post-page" className="checkout-btn w-100" >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="big-post-box">
                        <div className="img-box-hover" style={{ position: "relative" }}>
                            <Link className="img-before">
                                <img src={pstImg} alt="postImg" />
                            </Link>
                        </div>
                        <div className="post-cart">
                            <div className="bb-header mb-2">
                                <Link>Special Offers</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                <span>October 19, 2019</span>
                            </div>
                            <div>
                                <h4><Link>Logic Is The Study Of Reasoning And Argument Part 2</Link></h4>
                                <div className="mt-3 ">
                                    <p>In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...</p>
                                </div>
                                <div className="post-box mb-3">
                                    <Link className="checkout-btn w-100" to="/checkout">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="big-post-box">
                        <div className="img-box-hover" style={{ position: "relative" }}>
                            <Link className="img-before">
                                <img src={pstImg} alt="postImg" />
                            </Link>
                        </div>
                        <div className="post-cart">
                            <div className="bb-header mb-2">
                                <Link>Special Offers</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                <span>October 19, 2019</span>
                            </div>
                            <div>
                                <h4><Link>Logic Is The Study Of Reasoning And Argument Part 2</Link></h4>
                                <div className="mt-3 ">
                                    <p>In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...</p>
                                </div>
                                <div className="post-box mb-3">
                                    <Link className="checkout-btn w-100" to="/checkout">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="big-post-box">
                        <div className="img-box-hover" style={{ position: "relative" }}>
                            <Link className="img-before">
                                <img src={pstImg} alt="postImg" />
                            </Link>
                        </div>
                        <div className="post-cart">
                            <div className="bb-header mb-2">
                                <Link>Special Offers</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                <span>October 19, 2019</span>
                            </div>
                            <div>
                                <h4><Link>Logic Is The Study Of Reasoning And Argument Part 2</Link></h4>
                                <div className="mt-3 ">
                                    <p>In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures...</p>
                                </div>
                                <div className="post-box mb-3">
                                    <Link className="checkout-btn w-100" to="/checkout">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="search-bar mb-3">
                        <form style={{
                            "height": "42px",
                            "display": "flex"
                        }}>
                            <input placeholder="Search..."
                                type="search" />
                            <button className="search-btn">
                                <img src={search} alt="search" />
                            </button>
                        </form>
                    </div>
                    <div className="search-bar p-3 mb-3">
                        <h4 className="font-weight-bold mb-4">About blog</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.
                        </p>
                        <div>
                            <ul className="social blog-sc">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#3c5a99" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#00a2e8" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" /></svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#e52e2e" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" /></svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#815dc7" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" /></svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.72 16.501c-1.395-1.101-2.28-2.707-2.28-4.501s.885-3.399 2.28-4.5l.741.752c-1.163.918-1.902 2.256-1.902 3.748s.739 2.831 1.902 3.748l-.741.753zm1.48-1.501c-.931-.733-1.521-1.804-1.521-3 0-1.195.59-2.267 1.521-3l.74.751c-.697.551-1.141 1.353-1.141 2.249s.443 1.699 1.141 2.249l-.74.751zm2.24-1.5c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5zm2.24 1.5l-.74-.751c.697-.55 1.141-1.354 1.141-2.249s-.443-1.698-1.141-2.249l.74-.751c.931.733 1.521 1.805 1.521 3 0 1.196-.59 2.267-1.521 3zm1.48 1.501l-.741-.753c1.163-.917 1.902-2.256 1.902-3.748s-.739-2.83-1.902-3.748l.741-.752c1.395 1.101 2.28 2.706 2.28 4.5s-.885 3.4-2.28 4.501z" /></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="search-bar p-3 mb-3">
                        <h4 className="font-weight-bold mb-4">Category</h4>
                        <ul>
                            <li>
                                <div className="widget-categories__row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                    <Link>Latest News</Link>
                                </div>
                            </li>
                            <li>
                                <div className="widget-categories__row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                    <Link>Special Offers</Link>
                                </div>
                            </li>
                            <li>
                                <div className="widget-categories__row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                    <Link>New Arrivals</Link>
                                </div>
                            </li>
                            <li>
                                <div className="widget-categories__row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                    <Link>Reviews</Link>
                                </div>
                            </li>
                            <li>
                                <div className="widget-categories__row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                    <Link>Drills and Mixers</Link>
                                </div>
                            </li>
                            <li>
                                <div className="widget-categories__row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                    <Link>Cordless Screwdrivers</Link>
                                </div>
                            </li>
                            <li>
                                <div className="widget-categories__row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                    <Link>Screwdrivers</Link>
                                </div>
                            </li>
                            <li>
                                <div className="widget-categories__row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                    <Link>Screwdrivers</Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="search-bar p-3 mb-3">
                        <h4 className="font-weight-bold mb-4">Latest Post</h4>
                        <div className="mini-post-box">
                            <ul>
                                <li>
                                    <div className="mini-img">
                                        <img src={pstImg} alt="postImg" />
                                    </div>
                                    <div>
                                        <Link>
                                            A Variety Of Other Academic And Non-Academic Approaches Have Been Explored
                                    </Link>
                                        <br />
                                        <span>October 19, 2019</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="mini-img">
                                        <img src={pstImg} alt="postImg" />
                                    </div>
                                    <div>
                                        <Link>
                                            A Variety Of Other Approaches Have Been Explored
                                    </Link>
                                        <br />
                                        <span>October 19, 2019</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="mini-img">
                                        <img src={pstImg} alt="postImg" />
                                    </div>
                                    <div>
                                        <Link>
                                            A Variety Of Other Academic And Non-Academic Approaches Have
                                    </Link>
                                        <br />
                                        <span>October 19, 2019</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="search-bar p-3 mb-3 newsettler">
                        <h4 className="font-weight-bold mb-4">Our Newsettler</h4>
                        <div>
                            <p>
                                Phasellus eleifend sapien felis, at sollicitudin arcu semper mattis. Mauris quis mi quis ipsum tristique lobortis. Nulla vitae est blandit rutrum.
                            </p>
                        </div>
                        <div className="search-bar mt-3 mb-3">
                            <input className="w-100 bg-white p-2" placeholder="Email"
                                type="email" />
                        </div>
                        <div className="cart-action mb-3">
                            <Link className="checkout-btn w-100" to="/checkout">
                                Subscribe
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row >
        </Container >
    )
}

export default Post
