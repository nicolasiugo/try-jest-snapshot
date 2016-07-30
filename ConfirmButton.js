import React, {Component, PropTypes} from "react";
import classNames from "classnames";

class ConfirmButton extends Component {

    constructor(props) {
        super(props);
        this.onAction = this.onAction.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onAccept = this.onAccept.bind(this);
        this.state = {
            isConfirming: false
        }
    }

    onAction(e) {
        e.stopPropagation();
        e.cancelBubble = true; //IE
        this.setState({
            isConfirming: true
        });
    }

    onCancel(e) {
        e.stopPropagation();
        e.cancelBubble = true; //IE
        this.setState({
            isConfirming: false
        });
    }

    onAccept(e) {
        e.stopPropagation();
        e.cancelBubble = true; //IE
        this.setState({
            isConfirming: false
        });
        this.props.action();
    }


    render() {
        const {label, actionClassNames, confirmClassNames} = this.props;
        const actionClass = classNames({ 'hide': this.state.isConfirming }) + ' ' + actionClassNames;
        const confirmClass = classNames({ 'hide': !this.state.isConfirming }) + ' ' + confirmClassNames;
        return (
            <div className="confirm-button">
                <div
                    className={actionClass}
                    onClick={this.onAction}>
                  {label}
                </div>
                <div className={confirmClass}>
                    Are you sure? <a onClick={this.onAccept}>Yes</a> <a onClick={this.onCancel}>Cancel</a>
                </div>
            </div>
        );
    }
}

ConfirmButton.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    actionClassNames: PropTypes.string,
    confirmClassNames: PropTypes.string
};

export default ConfirmButton;
