import { connect } from 'react-redux';

import Boards from '../components/Boards/Boards';

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(
  mapStateToProps
)(Boards);
