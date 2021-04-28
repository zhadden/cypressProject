/**
 * @param {Object} obj
 * */
const getValues = (obj, key, index , ...args) => {
    let returnObj = {}
    for(const key in  obj.key[index]) {
        if(key === 'home_team_name' || key === 'away_team_name' || key === 'league_name') {
            returnObj.key = obj.key[index][key]
        }
    }
return returnObj;
}