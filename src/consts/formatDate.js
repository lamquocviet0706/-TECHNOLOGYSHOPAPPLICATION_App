export const ddmmyyyy = (date) =>{
    const dateNew =  new Date(date)
    return `${dateNew.getDate()}/${dateNew.getMonth()+1}/${dateNew.getFullYear()}`

}