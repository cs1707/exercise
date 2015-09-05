import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter.jsx';
import * as CounterActions from '../actions/counter.jsx';

function mapStateToProps(state) {
  return {
    counter: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
