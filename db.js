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
            if(cat.name.toLowerCase() == name.toLowerCase()){
                return cat
            }
        }
    }
    async addReview(name,review){ 
        const cat = await this.findCat(name);
        cat.review = review;
    }
    async getReviews(name){
    
        const cat = await this.findCat(name);
        return [cat.review]
    }
    async clear(){
        this.cats = [];
    }
}

module.exports = Database;