/* Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.*/

// function getData(dataId) {
//     console.log("Data", dataId);
// }

// suppose, api takes time to fetch data from database

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("Data", dataId);
//     }, 2000);
// };

/*
suppose, we want data1, then after 2s data2 and so on for data3
*/

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
};

// using arrow function instead of passing func() is industry standard
// arrow function is a proper function which does not execute immediately

getData(1, () => {
    console.log("getting data 2...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3, () => {
            console.log("getting data 4...");
            getData(4);
        });
    });
});

// pyramid of doom - code becomes difficult to understand and manage

// callbacks are used but promises are introduced to solve callback hell problem


