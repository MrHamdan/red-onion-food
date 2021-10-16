import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Breakfasts from '../Breakfasts/Breakfasts';
import Checkout from '../Checkout/Checkout';
import Chooseus from '../Chooseus/Chooseus';
import Dinners from '../Dinners/Dinners';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';
import Lunchs from '../Lunchs/Lunchs';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Banner></Banner>
                <Items></Items>
                <Switch>
                    <Route path='/breakfast'>
                        <Breakfasts></Breakfasts>
                    </Route>
                    <Route path='/lunch'>
                        <Lunchs></Lunchs>
                    </Route>
                    <Route path='/dinner'>
                        <Dinners></Dinners>
                    </Route>
                </Switch>
                <Checkout></Checkout>
                <Chooseus>S</Chooseus>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
};

export default Home;