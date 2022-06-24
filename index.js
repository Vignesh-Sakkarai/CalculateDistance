import express from 'express'
import { allInSameBlock, anyOneFacilityWithInOneKmAway } from './blocks.js';

const app = express()

app.get("/find-block", async (req, res) => {
    var allInOneBlock = allInSameBlock()
    var anyOneFacilityInOneKmAway = anyOneFacilityWithInOneKmAway()

    if(allInOneBlock.length > 0) {
        res.json({
            "message": "Found All Facilities in the same block",
            "response": allInSameBlock
        })
    }else if (anyOneFacilityInOneKmAway.length > 0) {
        res.json({
            "message": "Found Any one of the facitlities away from 1 KM",
            "response": anyOneFacilityInOneKmAway
        })
    } else {
        res.json({
            "message": "No Suitable Block Found for your search"
        })
    } 
})

app.listen(5000, ()=> {
    console.log("App Listening on Port 5000")
})
