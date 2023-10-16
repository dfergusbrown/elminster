
const reducer = (state, action) => {
    switch (action) {
        case 1.1: 
            return state.filter(item => {
                return (
                item !== "Fighter" && 
                item !== "Barbarian" && 
                item !== "Monk" && 
                item !== "Rogue"
                )
            })
        case 1.2:
            return state.filter(item => {
                return (
                item !== "Wizard" &&
                item !== "Druid" && 
                item !== "Warlock" &&
                item !==  "Sorcerer" &&
                item !==  "Bard" &&
                item !==  "Cleric"
                )
            })
        case 2.1:
            return state.filter(item => {
                return item !== "Sorcerer" && item !== "Warlock"
            });
        case 2.2:
            return state.filter(item => {
                return item !== "Bard" && item !== "Wizard" && item !== "Cleric"
            })
        case 3.1:
            return state.filter(item => {
                return item !== "Cleric" && item !== "Warlock" && item !== "Druid"
            })
        case 3.2:
            return state.filter(item => {
                return item !== "Bard" && item !== "Wizard"
            })
        case 4.1:
            return state.filter(item => {
                return (
                item === "Cleric" || 
                item === "Druid" || 
                item === "Bard" || 
                item === "Paladin" || 
                item === "Ranger"
                )
            })
        case 4.2:
            return state;
        default:
            throw Error('Unknown action');
    }
}

export default reducer;
