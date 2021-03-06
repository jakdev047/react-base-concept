import React, { Component, Fragment } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class TransitionItem extends Component {

    state = {
        show: true,
        cssShow: true
    }

    tanstionEffect = () => {
        this.setState({
            show: !this.state.show
        })
    }

    cssTanstionEffect = () => {
        this.setState({
            cssShow: !this.state.cssShow
        })
    }

    render() {
        const animateTime = {
            enter: 700,
            exit: 500
        }
        return (
            <Fragment>
                <TopNavigation title="Transtion Effect" />
                <div className="container">
                    <h2>Transtions</h2>
                    <div className="row">
                        <div className="col-12 py-3">
                            <button className="btn btn-success" onClick={this.tanstionEffect}>Toggle</button>
                        </div>
                        <div className="col-12 py-3">
                            <button className="btn btn-success" onClick={this.cssTanstionEffect}>Css Transition Effect</button>
                        </div>
                    </div>
                    <Transition
                        in={this.state.show}
                        timeout={2000}
                        onEnter={() => console.log('onEnter')}
                        onEntering={() => console.log('onEntering')}
                        onEntered={() => console.log('onEntered')}
                        onExit={() => console.log('onExit')}
                        onExiting={() => console.log('onExiting')}
                        onExited={() => console.log('onExited')}
                    >
                        {mode => (<p>{mode}</p>)}
                    </Transition>

                    {/*  
                        there are 4 steps in Transition effect
                        
                        Entering Entered Exiting Exited
                    
                    */}

                    <Transition in={this.state.show} timeout={animateTime} mountOnEnter unmountOnExit>
                        {mode => (
                            <div style={{
                                background: '#000',
                                color: '#fff!important',
                                borderRadius: '4px',
                                padding: '10px',
                                opacity: mode === 'exiting' || mode === 'entering' ? 0 : 1,
                                transition: 'opacity .5s ease-in-out'
                            }}>
                                <p className="transtion-para"> I am a Transition Body</p>
                            </div>
                        )}
                    </Transition>

                    <Transition in={this.state.show} timeout={animateTime} mountOnEnter unmountOnExit>
                        {mode => (
                            <div style={{
                                background: '#000',
                                color: '#fff!important',
                                borderRadius: '4px',
                                padding: '10px',
                                opacity: mode === 'exiting' || mode === 'entering' ? 0 : 1,
                                transition: 'opacity .5s ease-in-out'
                            }}>
                                <p className="transtion-para"> I am a Transition Body</p>
                            </div>
                        )}
                    </Transition>

                    <p className="py-3"> I am a outside of Transtion Body</p>

                    <CSSTransition classNames="myClass" in={this.state.cssShow} timeout={animateTime} mountOnEnter unmountOnExit>
                        {
                            mode => (
                                <div style={{
                                    background: '#000',
                                    color: '#fff!important',
                                    borderRadius: '4px',
                                    padding: '10px',
                                }}>
                                    <p className="transtion-para"> I am a CSSTransition Body</p>
                                </div>
                            )
                        }
                    </CSSTransition>
                </div>

            </Fragment>
        )
    }
};

export default TransitionItem;
