

interface resData{
    code:number,
    
    message:string
}

export interface cardData{
    path:string,
    name:string,
    total:number,
    bgColor:string,
}



export interface loginRes extends resData{
    data:{
        token:string
    }
}