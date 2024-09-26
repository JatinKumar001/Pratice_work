// function getbeef(data, callback) {
//     setTimeout(() => {
//         callback(`data is this: !${data}`);
//     }, 2000);
// }

// function makeburger(data, callback) {
//     setTimeout(() => {
//         callback(`recipe is this: !${data}`);
//     }, 2000);
// }

// function serve(data, callback) {
//     setTimeout(() => {
//         callback(`serve: !${data}`);
//     }, 2000);
// }

// const get_burger = () => {
//     const data = "beef";

//     getbeef(data, function(beef) {
//         makeburger(beef, function(recipe) {
//             serve(recipe, function(serveText) {
//                 console.log(serveText);
//             });
//         });
//     });
// }

// get_burger();


const doTask = (data, callback) => {
    setTimeout(()=>{
        // console.log(data); 
        // callback();
        return callback();
        console.log(data);
    }, 2000);
}

const burger = () =>{
    doTask("Get beef", ()=>{
        doTask("make burger", ()=>{
            doTask("server", ()=>{
                console.log("complete");
            })
        })
    })
}


burger()