import Pieces from '../components/Pieces/Pieces';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    red: state.pieces.red,
    green: state.pieces.green,
    blue: state.pieces.blue,
  });
};

export default connect(
  mapStateToProps
)(Pieces);
