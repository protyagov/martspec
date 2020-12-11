import * as React from "react";
import * as Bloodhound from 'corejs-typeahead';
import "corejs-typeahead";
import IdNameModel from "src/model/id-name";
import AppState from "src/state";

interface TypeaheadProps {
    onSelect?: (value: IdNameModel) => void;
    onBlur?: (value: string) => void;
    buttonClick?: (value: string) => void;
    buttonIcon?: string;
    initialValue?: string;
    placeholder?: string;
    resetOnSelect?: boolean;
    formStyle?: boolean;
    url: string;
    id?: string;
    fontSize?: string;
    templateNotFound?: string;
}



export function Typeahead(props: TypeaheadProps) {
    const id = props.id ?? "bloodhound";
    const tkn = AppState.uuidv4();

    React.useEffect(() => {
        const iSel = `input[name ="name-${id}"]`;
        $(`#${id} .typeahead`).typeahead(
            {
                hint: true,
                highlight: true,
                minLength: 1,
            },
            {
                name: 'states',
                source: suggestionEngine,
                display: (obj: IdNameModel) => obj.name,
                templates: {
                    notFound: props.templateNotFound ?? "<div style='margin-left:1rem'>No Results</div>",
                    suggestion: (item: any) => "<div>" + item.name + "</div>",
                    pending: (query: any) => '<div style="margin-left:1rem; color: #777"> Loading...</div>',
                }
            })
            .on('typeahead:select', (obj: any, datum: IdNameModel) => {
                props?.onSelect(datum);
                if (props.resetOnSelect)
                    $(`#${id} .typeahead`).typeahead('val', "");
            });
        if (!props.formStyle && props.placeholder)
            $(`<label class="z-100" htmlFor="${"name+" + id}"><span>${props.placeholder}</span></label>`)
                .insertAfter(iSel);

        if (props.onBlur)
            $(iSel).blur(() => props.onBlur($(iSel).val() as string))

    }, [])

    React.useEffect(() => {
        if (!$(`#${id} .typeahead`).typeahead('val') && props.initialValue != null) {
            suggestionEngine.add(props.initialValue);
            $(`#${id} .typeahead`).typeahead('val', props.initialValue);
        }
    }, [props.initialValue]);

    const suggestionEngine = new Bloodhound({
        local: [],
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        identify: function (obj: any) { return obj.id; },
        remote: {
            url: props.url + '?q=%QUERY&sessionToken=' + tkn,
            wildcard: '%QUERY',
            transform: (response: any) => {
                // console.log(response);
                let i = 0;
                if (typeof response[0] === "string")
                    return response.map((x: string) => new IdNameModel(null, x));
                return response;
            }

            // transport: function (url: any, onSuccess: any, onError: any) {

            //     // Here, maybe log that we're about to look up remote data.

            //     // Here's where you'd do your custom lookup; for this example, we'll just use Jquery ajax as Bloodhound does.
            //     $.ajax(url).done(done).fail(fail).always(always);

            //     function done(data: any, textStatus: any, request: any) {

            //         let res = [
            //             { id: 1, name: "Aptos, CA, USA" },
            //             { id: 2, name: "Atherton, CA, USA" },
            //             { id: 3, name: "Alum Rock, CA, USA" },
            //             { id: 4, name: "Austin, TX, USA" },
            //             { id: 5, name: "Atlanta, GA, USA" },
            //             { id: 6, name: "Amarillo, TX, USA" },
            //             { id: 7, name: "Amarillo1, TX, USA" },
            //             { id: 8, name: "Amarillo2, TX, USA" },

            //         ];
            //         // Don't forget to fire the callback for Bloodhound
            //         onSuccess(res);
            //     }

            //     function fail(request: any, textStatus: any, errorThrown: any) {
            //         // Don't forget the error callback for Bloodhound
            //         onError(errorThrown);
            //     }

            //     function always() {
            //     }
            // }
        }
    });

    // form style
    if (props.formStyle === true)
        return <div id={id} className="rr-typeahead" style={{ display: "flex" }}>
            <input type="text" id={id} name={"name-" + id} className="form-control typeahead" placeholder={props.placeholder} style={{ flex: "1 0 auto" }} />
            {props.buttonIcon &&
                <button className="btn btn-outline-secondary"
                    onClick={e => props.buttonClick($('input.typeahead.tt-input').val() as string)}>
                    my&nbsp;agency
                </button>
            }
        </div>

    // question style, red bar under it.
    return <div id={id} className="rr-typeahead rr-typeahead-question">
        <input type="text" id={id} name={"name-" + id} className="typeahead question" required autoComplete="off" />
    </div>


}