export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          return {friends: [...state.friends, {id: action.friend.id, hometown: action.friend.hometown, name: action.friend.name }]}
        case 'REMOVE_FRIEND':
         const indexFound = state.friends.findIndex(f => f.id === action.id)
         return {...state, friends: [...state.friends.slice(0,indexFound), ...state.friends.slice(indexFound+1)]}
        default:
          return state;
      }
}
