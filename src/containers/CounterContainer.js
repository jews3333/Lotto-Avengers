import * as actions from '../actions';
import Counter from '../components/Counter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    number: state.counterData.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement())
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;