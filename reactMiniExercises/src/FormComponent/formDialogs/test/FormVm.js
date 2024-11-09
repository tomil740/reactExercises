import FormUiStte from '../../formUiState'


class FormVm{
    #uiState;
    #setState;

    #archiveId;
    constructor(initState,setState){
        this.#uiState = new FormUiStte(initState);
        this.#setState = setState;
        this.#archiveId = 0;
    }

    onName(theName){
        this.#uiState = {...this.#uiState,name:theName};
        this.#setState(this.#uiState);
    }

    onLoveVal(theVal){
        this.#uiState = {...this.#uiState,loveVal:theVal};
        this.#setState(this.#uiState);
    }

    onFavTopic(theTopic){
        this.#uiState = {...this.#uiState,favTopic:theTopic};
        this.#setState(this.#uiState);
    }

    onArchiveItem(theId){
        const a = this.#uiState.subArchive.filter((item)=>  item.id != theId);
        this.#uiState = {...this.#uiState,subArchive:a};
        this.#setState(this.#uiState);
    }

    onSubmit(){
        const ref = this.#uiState
        const res = (this.#uiState.subArchive.concat([{"id":this.#archiveId,"loveVal":ref.loveVal,"favouriteTopic":ref.favTopic}]));
        this.#uiState = {...this.#uiState,favTopic:"",subArchive:res};
        this.#archiveId++;
        this.#setState(this.#uiState);
    }

}

export default FormVm;