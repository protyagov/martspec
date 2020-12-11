import * as React from "react";
import ReactStars from "react-rating-stars-component";
import _ from "src/i18n/locale";

interface WidgitStarModel {
    header: string;
    value: number;
}

//--------------------------------------------------------------------------------------------------
export function WidgetStar(props: WidgitStarModel) {
    function renderStar() {
        return props.value
            ? <>
                <ReactStars
                    count={5}
                    value={props.value}
                    a11y={false}
                    edit={false}
                    isHalf={true}
                    color="#ded661"
                    emptyIcon={<i className="fo icon-star-empty fo-2x"></i>}
                    halfIcon={<i className="fo icon-star-half-alt fo-2x"></i>}
                    filledIcon={<i className="fo icon-star fo-2x"></i>}
                    activeColor="#617fde"
                />
                <span className="rating" >{props.value?.toFixed(1)}</span>
            </>
            : <span className="title">{_("NO_DATA")}</span>
    }

    return <div className="rr-widget-star">
        <span className="title">{props.header}</span>
        <div className="row justify-content-center">{renderStar()}</div>
    </div>
}

//--------------------------------------------------------------------------------------------------
export function WidgetStarSmallSideTitle(props: WidgitStarModel) {
    function renderStar() {
        let res: any[] = [];
        for (let j = 0; j < props.value; ++j)
            res.push(<i className="fo icon-star rr-color-text-main" key={j} />)
        for (let j = props.value; j < 5; ++j)
            res.push(<i className="fo icon-star-empty rr-color-text-gold" key={j} />)
        return res;
    }


    return <div className="rr-widget-star-small">
        {renderStar()}
        <span className="title">{props.header}</span>
    </div>
}

//--------------------------------------------------------------------------------------------------
export function WidgetStarSmall(props: WidgitStarModel) {
    function renderStar() {
        let res: any[] = [];
        for (let j = 0; j < props.value; ++j)
            res.push(<i className="fo icon-star rr-color-text-main" key={j} />)
        for (let j = props.value; j < 5; ++j)
            res.push(<i className="fo icon-star-empty rr-color-text-gold" key={j} />)
        return res;
    }


    return <div className="rr-widget-star-small">
        {renderStar()}
        <div className="title">{props.header}</div>
    </div>
}