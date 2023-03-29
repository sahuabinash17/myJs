// Callback is called when the asynchronus operation is completed.



console.log("Before");
 getuser(101, function(user){
    console.log("User====>",user);
 getRepositories(user.GitUserName, (repos)=>{
        console.log("repos>>>>",repos);
        getcommits(repos[0],(commit)=>{
            console.log("commits>>>>",commit)
        })
    });
 });
console.log("After");
function getuser (id,callback){
setTimeout(()=>{
console.log("fetching data from database");
callback ({id:101 , GitUserName:"MOSH_Hamwdani"});
},2000);      
}

function getRepositories(username,callback){
 setTimeout(() => {
console.log("calling gitlab APIS");
callback(["repo1","repo2","repo3"]);
    }, 2000);
}
function getcommits(repo,callback){
    setTimeout(() => {
        console.log("calling gitla APIS");
        callback(['commit']);
    },2000);
}