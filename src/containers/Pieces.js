import Pieces from '../components/Pieces/Pieces';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  pieces: state.global.pieces,
});

export default connect(
  mapStateToProps
)(Pieces);
