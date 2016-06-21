import Pieces from '../components/Pieces/Pieces';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    red: state.global.pieces.red,
    green: state.global.pieces.green,
    blue: state.global.pieces.blue,
  });
};

export default connect(
  mapStateToProps
)(Pieces);
