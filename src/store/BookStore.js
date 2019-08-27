import {observable, action} from 'mobx';
import bookItems from '../data/bookList.json';

export default class BookStore{
    @observable bookList=[];

    @action initBookList(){
        console.log(`initBookList ${bookItems}`)
        if(!localStorage.getItem('bookList')){
            localStorage.setItem('bookList', bookItems);
        }        
    }
    @action loadBookList(){
        console.log(`loadBookList`)
        return localStorage.getItem('bookList');
    }
}