class Database{
    constructor(){
        this.cats = []; 
    }
    async addCat(cat){
        this.cats.push(cat);
    }
    async getCats(){
        return this.cats;
    }
    async clear(){
        this.cats = [];
    }
}

module.exports = Database;