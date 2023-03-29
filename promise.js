// Promise is an Object which holds the eventual result of an asynchrous operation.

//Promise.all ===> Promise.all is used for hold the total results of an operation , when the operation is complete then it go for further process.

//Promise.race ===> Promise.race is used for also hold the result but when the process(1) is complete it prints it and then continue the process.




// const p =new Promise((resolve,reject)=>{

//     // setTimeout(()=>{
//     //     resolve(1);
//     // },2000)

//     setTimeout(()=>{
//         reject(new Error('message'));
//     },2000);
    
// })
// p.then(result => console.log('Result',result))
//  .catch(err => console.log('Error',err.message));



console.log("Before")
// getUser(1,(user)=>{
//     getRepositories(user.gitUserName,(repos)=>{
//         getCommits(repos[0],(commit)=>{
//             console.log("Commits>>>>",commit);
//         })
//     })
// })onsole.
// const p = getUser(1)
getUser(1)
.then(user=>getRepositories(user.gitUserName))
.then(repos=>getCommits(repos[0]))
.then(commit=> console.log("commit>>",commit))
.catch(err=>console.log("error",err.message));


console.log("After")
function getUser(id){
    
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
            console.log("api started listening")
            resolve({id:id,gitUserName:"Mosh"})
         },2000);
         })
}
function getRepositories(username){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        
            console.log("fetch data from database");
           resolve(['repos1','repos2']);
        },2000);
        });
}
function getCommits(repo){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
       
            console.log('apis called')
            resolve(['commit']);
        },2000);
        })
}