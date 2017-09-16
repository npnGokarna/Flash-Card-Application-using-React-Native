// state can never be undefined in a reducer, especially during startup
//so initialize the value of state to null, so it is not undefined
export default (state = null, action) => {

  switch (action.type) {

    case 'select_individual_item':
      return (action.payload);
    default:
      return state;

  }

};
