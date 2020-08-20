import React from 'react';
import { MyContext } from './MyRedux/Provider';

export default function connect(stateFun, dispatchFun) {

    return (Component) => {
        class Wrapper extends React.Component {

            render() {
                return (
                    <MyContext.Consumer>
                        { stuff => {
                            const stateAsProp = stateFun ? stateFun(stuff.state) : null;
                            const dispatchAsProp = dispatchFun ? dispatchFun(stuff.dispatch) : null;
                            console.log("111")
                            return <Component { ...this.props } { ...stateAsProp } { ...dispatchAsProp } />
                        } }
                    </MyContext.Consumer>
                );
            }
        }
        return Wrapper
    }
}
