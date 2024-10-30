import appReducer from './app/reducer';

export default ({ app }, action) => ({
    app: appReducer(app, action)
});