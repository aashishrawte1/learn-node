import express from 'express';

export const registerApi = (req, res) => {
    const incomingData2 = req.body;
    res.send(incomingData2)
    console.log('data1', incomingData2);


}


// params
// body


// http://localhost:3200/x=3&&y=5  /query parameter

// http://localhost:3200/miq-version
// body: {
//     user: Ashish,
//     age: xy
// } // payload