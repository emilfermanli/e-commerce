import React from 'react'
import Header from "./components/Header/Header"
import Home from './components/Products/Home'
import Footer from "./components/Footer/Footer"
import Profile from './components/Profile/Profile'
import { Switch, Route } from 'react-router-dom'
import ProfileDashboard from './components/Profile/ProfileDashboard'
import ProductPage from './components/Products/ProductPage'
import ContactUs from './components/Pages/ContactUs'
import AboutUs from "./components/Pages/AboutUs"
import NotFound from './components/Pages/NotFound'
import TermsConditions from './components/Pages/TermsConditions'
import Faq from './components/Pages/Faq'
import Cart from './components/ClientActions/Cart'
import Wishlist from './components/ClientActions/Wishlist'
import Checkouts from './components/ClientActions/Checkouts'
import Comparison from './components/ClientActions/Comparison'
import Post from './components/Posts/Post'
import PostPage from "./components/Posts/PostPage"



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/profile-dashboard">
          <ProfileDashboard />
        </Route>
        <Route path="/product-page">
          <ProductPage />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/terms">
          <TermsConditions />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/checkout">
          <Checkouts />
        </Route>
        <Route path="/compare">
          <Comparison />
        </Route>
        <Route path="/posts">
          <Post />
        </Route>
        <Route path="/post-page">
          <PostPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <div onClick={() => { window.scrollTo(0, 0) }} className="position-fixed upper" style={{ right: "30px", bottom: "50px", }}>
        <svg className="upper-button" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg>
      </div>
      <Footer />
    </div>
  )
}

export default App
