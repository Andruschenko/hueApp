import Photo from '../components/Photo/Photo';

import { connect } from 'react-redux';

import { addBoard } from '../actions/boards';
const mapDispatchToProps = (dispatch) => {
  return ({
    addBoard: board => addBoard(board),
    dispatch,
  });
};

export default connect(
  null, // no need to subscribe to the store
  dispatch => ({ dispatch })
)(Photo);
