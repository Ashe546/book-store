/* eslint-disable */
const STATUS = 'STATUS';

let initCatagory = [];

const catagoryReducer = (state = initCatagory, action) => {
    if(action.type === STATUS) {
        return 'Under Construction'
    } else {
        return state
    }
}

const statusAction = ({
  type: STATUS,
});

export default catagoryReducer;
export {statusAction};
