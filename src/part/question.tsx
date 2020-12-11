import * as React from "react";

class QuestionProps {
    yButtonText: string;
    yButtonClass?: string = "btn-primary";
    yButtonFunc: () => void;
    nButtonText: string;
    nButtonClass: string;
    nButtonFunc?: () => void;
    id: string;
    message: string;
    title: string;
}


export default function Question(props: QuestionProps) {
    return (
        <div className="modal fade" id={props.id} role="dialog" aria-labelledby={props.id} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{props.message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className={"btn " + props.nButtonClass} data-dismiss="modal" onClick={props.nButtonFunc}>
                            {props.nButtonText}
                        </button>
                        <button type="button" className={"btn " + props.yButtonClass} data-dismiss="modal" onClick={props.yButtonFunc}>
                            {props.yButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}