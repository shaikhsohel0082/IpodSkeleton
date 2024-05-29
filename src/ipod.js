import React from "react";
import "../src/style.css";
import {
  Frame,
  Display,
  Menu,
  LeftDisplay,
  RightDisplay,
  Play,
  Div,
  Icon,
  Button,
} from "./style";

export default class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      features: ["Cover Flow", "Games", "Music", "Settings"],
      expandedFeatures: [
        {
          url: "https://cdn-icons-png.flaticon.com/128/15527/15527261.png",
          alt: "Cover Flow",
        },
        {
          url: "https://cdn-icons-png.flaticon.com/128/808/808476.png",
          alt: "Games",
        },
        {
          url: "https://cdn-icons-png.flaticon.com/128/3083/3083417.png",
          alt: "Music",
        },
        {
          url: "https://cdn-icons-png.flaticon.com/128/627/627495.png",
          alt: "Settings",
        },
      ],
      isMouseDown: false,
      currentAngle: 0,
      highlightedFeatureIndex: -1,
      isExpanded: false,
    };
    this.menuRef = React.createRef();
  }

  handleMouseDown = () => {
    this.setState({ isMouseDown: true });
  };

  handleMouseMove = (event) => {
    if (!this.state.isMouseDown) return;

    const menuBounds = this.menuRef.current.getBoundingClientRect();
    const centerX = menuBounds.left + menuBounds.width / 2;
    const centerY = menuBounds.top + menuBounds.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    const totalFeatures = this.state.features.length;
    let index = Math.round((angle / 360 + 0.5) * totalFeatures) % totalFeatures;
    index = index < 0 ? totalFeatures + index : index;

    this.setState({ currentAngle: angle, highlightedFeatureIndex: index });
  };

  handleMouseUp = () => {
    this.setState({ isMouseDown: false });
  };

  handleMenuClick = () => {
    const { highlightedFeatureIndex, isExpanded, features } = this.state;
    this.setState({
      isExpanded: true,
    });
    if (highlightedFeatureIndex !== -1) {
      return <h1>{features[highlightedFeatureIndex]}</h1>;
    }
  };
  menuHandler = () => {
    const { highlightedFeatureIndex, isExpanded } = this.state;
    this.setState({
      isExpanded: false,
      highlightedFeatureIndex: 0,
    });
  };

  render() {
    const { features, highlightedFeatureIndex, expandedFeatures } = this.state;
    const displayBeforeExpansion = (
      <>
        <LeftDisplay>
          <h2 style={{ position: "fixed", paddingBottom: "10px" }}>Ipod.js</h2>
          <br />
          <br />
          <br />
          {features.map((feature, index) => (
            <h3
              key={feature}
              className={index === highlightedFeatureIndex ? "highlighted" : ""}
            >
              {feature}
            </h3>
          ))}
        </LeftDisplay>
        <RightDisplay></RightDisplay>
      </>
    );
    const displayAfterExpansion = (
      <>
        <LeftDisplay style={{ width: "100%", textAlign: "center" }}>
          <h1 style={{ color: "red" }}>{features[highlightedFeatureIndex]}</h1>
          {highlightedFeatureIndex !== -1 ? (
            <img src={expandedFeatures[highlightedFeatureIndex].url} />
          ) : null}
        </LeftDisplay>
      </>
    );

    return (
      <>
        <Frame>
          <Display>
            {this.state.isExpanded
              ? displayAfterExpansion
              : displayBeforeExpansion}
          </Display>

          <Menu
            ref={this.menuRef}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
          >
            <Div>
              <Icon>
                <i className="fa-solid fa-backward-fast"></i>
              </Icon>
            </Div>
            <Div>
              <Button onClick={this.menuHandler}>
                <h2 style={{ color: "RGB(255, 0, 106)", marginLeft: "5px" }}>
                  MENU
                </h2>
              </Button>

              <Play onClick={this.handleMenuClick}></Play>

              <Icon style={{ marginLeft: "18px" }}>
                <i className="fa-solid fa-play"></i>
                <i className="fa-solid fa-pause"></i>
              </Icon>
            </Div>
            <Div>
              <Icon>
                <i className="fa-solid fa-forward-fast"></i>
              </Icon>
            </Div>
          </Menu>
        </Frame>
      </>
    );
  }
}
