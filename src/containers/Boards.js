import { connect } from 'react-redux';

import Boards from '../components/Boards';

const mapStateToProps = ({ boards }) => ({
  boards,
});

export default connect(
  mapStateToProps
)(Boards);
