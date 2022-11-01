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
    async findCat(name) {
        for (let index = 0; index < this.cats.length; index++) {
            const cat = this.cats[index];
            if(cat.name.toLowerCase() == name){
                return cat
            }
        }
    }
    async addReview(){
        return this.review;
    }
    async clear(){
        this.cats = [];
    }
}

module.exports = Database;