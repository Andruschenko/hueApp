import Photo from '../components/Photo/Photo';

import { connect } from 'react-redux';

import { mapDispatchToProps } from '../util/redux';
import * as globalActions from '../actions/global';


export default connect(
  state => ({}),
  mapDispatchToProps(globalActions)
)(Photo);
