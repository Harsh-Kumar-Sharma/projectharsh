const date = new Date();
const day= date.getDate();
const month =date.getMonth()+1;
const getinfo=()=>{
    console.log("My batch Lithium being to step 19 2022 first assignment in Node");
    return 'message'
}
module.exports.day=day
module.exports.info=getinfo
module.exports.month=month