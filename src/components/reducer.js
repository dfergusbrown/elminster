
const reducer = (state, action) => {
    switch (action) {
        case 1: 
            return state.filter(item => item !== "Fighter" || "Barbarian" || "Monk" || "Rogue");
        case 2:
            return state.filter(item => item !== "Wizard" || "Druid" || "Warlock" || "Sorcerer" || "Bard" || "Cleric")
        case 3:
            return state.filter(item => item === "Bard" || "Wizard" || "Cleric");
        default:
            return state;
    }
}

export default reducer;