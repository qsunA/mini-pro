import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from "next/head";
import { Provider } from 'mobx-react';
import RootStore from '../src/store/RootStore';

const store = new RootStore();

const App = ({Component})=>{

    useEffect(()=>{
        store.bookStore.initBookList();
    },[]);

    return(
        <>
            <Head>
                <title>App</title>
            </Head>
            <Provider store={store}>
                <Component/>
            </Provider>
        </>
    )
}

App.propTypes ={
    Component : PropTypes.elementType// jsx 에 들어갈 수 있는 모든 것을 node라고 한다. 
}

export default App; 