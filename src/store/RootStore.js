import BookStore from "./BookStore";

class RootStore{
    constructor(){
        this.bookStore = new BookStore(this);
    }
}

export default RootStore; 