/*
private fields dsont work with the spreat operator,temp soultion that need to be solved
*/

export default class FormUiState{
    name;
    loveVal;
    favTopic;
    subArchive;
    constructor(initState){
        this.name = initState.name;
        this.loveVal = initState.loveVal;
        this.favTopic = initState.favTopic;
        this.subArchive = initState.subArchive;
    }
/*
    get loveVal(){
        return this.#loveVal;
    }

    get favTopic(){
        return this.#favTopic;
    }

    get name(){
        return this.#name;
    }

    get subArchive(){
        return this.#subArchive;
    }

    set subArchive(theVal){
        //this.#subArchive = theVal;
    }

    set favTopic (setVal){
        this.#favTopic = setVal;
    }

    set name(theName){
        this.#name =theName;
    }

    set loveVal (setVal){
        this.#loveVal = setVal;
    }
        */
}
