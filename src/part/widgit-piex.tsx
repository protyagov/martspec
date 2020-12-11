import * as React from "react";
import _ from "src/i18n/locale";
import AppState from "src/state";
const logo = require("src/img/nodata.svg").default;

interface WidgetPiexModel {
    items: WidgetPieItemModel[];
    size: string;
    sizeText: string;
    title: string;
    calcRate: (total: number) => string;
}

interface WidgetPieItemModel {
    value: number;
    color: string;
    text: string;
}


export function WidgetPiex(props: WidgetPiexModel) {
    const [total, setTotal] = React.useState(0);
    const [offsets] = React.useState<number[]>([]);
    const [rate, setRate] = React.useState<number>();
    const [circleColor, setCircleColor] = React.useState<string>(null);

    React.useEffect(() => {
        let sum = 0;
        offsets.length = 0;
        let nonEmptyItems = 0;
        let circleColor = "";

        for (const e of props.items) {
            offsets.push(sum);
            sum += e.value;
            if (e.value > 0) {
                ++nonEmptyItems;
                circleColor = e.color;
            }
        }
        setTotal(sum);
        setRate(sum === 0 ? _("NO_DATA") : props.calcRate(sum));
        setCircleColor(nonEmptyItems < 2 ? circleColor : null);

    }, [props])
    

    function chart(data: any, size: string, textSize: string, r = 120, r0 = 90) {
        const w = r * 2;
        if (total)
            return <svg width={size} height={size} viewBox={`0 0 ${w} ${w}`} textAnchor="middle" dominantBaseline="central">
                ${
                    circleColor === null // We have only one value and there is not need to calc segments
                        ? data.map(({ value, color }: any, i: any) => segment(offsets[i] / total, (offsets[i] + value) / total, r, r0, color))
                        : <circle cx={r} cy={r} r={r} fill={circleColor} />
                }
                <circle cx={r} cy={r} r={r0} fill="white" />
                {/* test inside the circle */}
                {/* <text style={{ fontSize: textSize }} transform={`translate(${r}, ${r})`}>{total}</text> */}
            </svg>;
    }


    function segment(start: any, end: any, r: any, r0: any, color: any) {
        const a0 = 2 * Math.PI * (start - 0.25);
        const a1 = 2 * Math.PI * (end - 0.25);
        const x0 = Math.cos(a0), y0 = Math.sin(a0);
        const x1 = Math.cos(a1), y1 = Math.sin(a1);
        const largeArc = end - start > 0.5 ? 1 : 0;

        return <path d={`M ${r + r0 * x0} ${r + r0 * y0} 
              L ${r + r * x0} ${r + r * y0} 
              A ${r} ${r} 0 ${largeArc} 1 ${r + r * x1} ${r + r * y1}
              L ${r + r0 * x1} ${r + r0 * y1}
              A ${r0} ${r0} 0 ${largeArc} 0 ${r + r0 * x0} ${r + r0 * y0}`}
            key={AppState.uuidv4()} fill={color} stroke="white" strokeWidth="2" />;
    }

    function caption() {
        return props.items.map(x => <li key={AppState.uuidv4()}>
            <i className="shape-circle" style={{ backgroundColor: x.color }} /> {x.text}
        </li>)

    }

    function renderFigure() {
        if (total > 0)
            return <figure className="row justify-content-center ">
                {chart(props.items, props.size, props.sizeText)}
                <ul className="figure-key-list" aria-hidden="true" role="presentation" key={props.title}>
                    {caption()}
                </ul>
            </figure>

        return <img src={logo} style={{ width: "8rem", marginLeft: "2rem", marginTop: "1rem" }} />
    }

    return <div className="col-6 col-md-3 widget-piex">
        <a data-toggle="collapse" href="#collapseRecruiterInfo" aria-expanded="false">
            <div className="count">{rate}</div>
            <div className="name">{props.title}</div>
        </a>

        <div className="collapse" id="collapseRecruiterInfo">
            {renderFigure()}
        </div>
    </div>

}