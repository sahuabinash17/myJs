//Async_awit help us to write the asynchonus code in synchronous way.
//
console.log("Before");

async function userDisplay(){
    try{
        const user =await getUser(1);
        // console.log("user>>",user);
        const repos=await getRepositories(user.gitUserName);
        // console.log("UserName>>",repos);
        const commit=await getCommit(repos[0]);
        console.log("Commits>>",commit);
    }
    catch (err){
        console.log("error",err.message)
    }
   
   }
userDisplay();

console.log("After");

function getUser(id){
return new Promise((resolve,reject)=>{
setTimeout(() => {
    console.log("<-_-_-_-_Fetching Data from Database-_-_-_-_>");
    resolve({id:id, gitUserName:"Mosh"})
},2000);
})
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("<-_-_-_-_Fetching APIS-_-_-_-_>");
            // resolve(['repo1','repo2','repo3']);
            reject(new Error('could not found repos'));
        },2000);
    })
}
function getCommit(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("<-_-_-_-_Fetching Commits Data-_-_-_-_>")
            resolve(['commit']);
        },2000);
    })

}











