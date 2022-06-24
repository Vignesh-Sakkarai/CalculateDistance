var blocks = [
    {"gym": true, "school": true, "store": false},
    {"gym": false, "school": true, "store": false},
    {"gym": false, "school": true, "store": true},
    {"gym": true, "school": true, "store": false},
    {"gym": false, "school": false, "store": false},
    {"gym": true, "school": false, "store": true},
    {"gym": true, "school": true, "store": false}
]

// Possible to have all in the one block
export const allInSameBlock = () => blocks.filter(block => block.gym && block.school && block.store)

// Possible to have AnyOneFacility With In one Kilometer Away (1KM stands for facility available in the previous block or Next block)
export const anyOneFacilityWithInOneKmAway = () => {
    var resultArray = []

    blocks.forEach((block, index) => {

       let currentBlock = [block.gym === true, block.school === true, block.store === true]
       let isOnlyOneFacilityUnavailable = currentBlock.indexOf(false) === currentBlock.lastIndexOf(false);
       if(isOnlyOneFacilityUnavailable) {
            let unAvailableFacility = Object.keys(block).find(key => block[key] === false);
            if(blocks[index-1] !== undefined && blocks[index-1][unAvailableFacility] === true || blocks[index+1] !== undefined && blocks[index+1][unAvailableFacility]) {
                block.blockNumber = index
                resultArray.push(block)
            }
       }
       
    })

    return resultArray
}