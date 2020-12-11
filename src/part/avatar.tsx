import * as React from "react";

interface AvatarModel {
    src: string;
    size?: string;
}

interface IronImageState {
    showLo: boolean;
}

export default class Avatar extends React.Component<AvatarModel, IronImageState> {
    photoImg: HTMLImageElement;

    constructor(props: AvatarModel, state: IronImageState) {
        super(props, state);
        this.photoImg = null;
        this.state = { showLo: true }
    }

    setFullSizeImage() {
        if (this.props.size && this.cssProperties['--image-size'] != this.props.size)
            this.cssProperties['--image-size'] = this.props.size;
        if (!this.props.src)
            return;
        const hdLoaderImg = new Image();
        hdLoaderImg.src = this.props.src;

        hdLoaderImg.onload = () => {
            if (this.props.src == null)
                return;
            this.setState({ showLo: false });

            this.photoImg.setAttribute('src', this.props.src);
            this.photoImg.classList.add('fade-in');
        }
    }

    componentDidUpdate(p: AvatarModel) { if (p.src !== this.props.src) this.setFullSizeImage() }
    componentDidMount() { this.setFullSizeImage() }

    cssProperties: any = {}


    render() {
        return <span className="rr-img-avatar">
            {this.state.showLo
                ? <i className="fo icon-user" style={{ fontSize: this.props.size }} />
                : <img className="rounded-circle img-thumbnail" style={this.cssProperties} ref={x => this.photoImg = x} />
            }
        </span>
    }
}