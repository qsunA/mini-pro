import {observable, action} from 'mobx';
import bookItems from '../data/bookList.json';
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';

class BookStore extends BaseStore{
    @observable bookList=[];

    @action initBookList(){
        console.log(`initBookList ${JSON.stringify(bookItems)} ::`)
        //if(localStorage.getItem('bookList')){
            localStorage.setItem('bookList', JSON.stringify(bookItems.bookList));
        //}        
    }
    @action loadBookList(){
        console.log(`loadBookList ${JSON.parse(localStorage.getItem('bookList'))} ::: `)
        return JSON.parse(localStorage.getItem('bookList'));
    }
}

export const getBookStore = getOrCreateStore('bookStore',BookStore);