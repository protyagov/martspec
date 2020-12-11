import * as React from "react";

class NoteProps {
    yButtonText: string;
    yButtonClass?: string = "btn-primary";
    yButtonFunc: (value: string) => void;
    nButtonText: string;
    nButtonClass: string;
    nButtonFunc?: () => void;
    id: string;
    label: string;
    title: string;
    value: string;
    maxLength: number = 255;
    placeholder?: string;
}

interface NoteState {
    value: string;
}


export default class Note extends React.Component<NoteProps, NoteState> {
    constructor(props: NoteProps, state: NoteState) {
        super(props, state);
        this.state = { value: "" };
    }

    componentWillReceiveProps(nextProps: NoteProps) {
        this.setState({ value: nextProps.value });

    }

    render() {
        return (

            <div className="modal fade" id={this.props.id} role="dialog" aria-labelledby={this.props.id} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label className="col-form-label">{this.props.label}</label>                            
                            <div className="input-group mt-3">
                                <div className="input-group-prepend">
                                    <i className="input-group-text fo icon-pencil" />
                                </div>
                                <input type="text" name="value" placeholder={this.props.placeholder}
                                    className="form-control" value={this.state.value}
                                    maxLength={this.props.maxLength}
                                    onChange={(e) => this.setState({ value: e.target.value })} />
                            </div>
                            <label className="sc-color-gray-light font-weight-light" style={{ marginTop: "-0.6rem" }}>
                                max length: {this.props.maxLength} chars.
                            </label>
                            <br />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className={"btn " + this.props.nButtonClass} data-dismiss="modal" onClick={this.props.nButtonFunc}>
                                {this.props.nButtonText}
                            </button>
                            <button type="button" className={"btn " + this.props.yButtonClass} data-dismiss="modal"
                                onClick={() => this.props.yButtonFunc(this.state.value)}>
                                {this.props.yButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}