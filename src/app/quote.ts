export class Quote {
    // id:number;
    // name:string;
    // author:string;
    showDetails: boolean;
  constructor(public id: number,public name: string,public author: string, public completeDate: Date){
    this.showDetails=false;
  }
}

