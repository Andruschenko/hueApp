import Photo from '../components/Photo';

import { connect } from 'react-redux';

export default connect(
  null, // no need to subscribe to the store
  dispatch => ({ dispatch })
)(Photo);
