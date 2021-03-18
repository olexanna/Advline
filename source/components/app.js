import React from "react";
import "@styles/app.scss"
import "@styles/reset.scss";
import "@styles/main.scss";
import "@styles/app.scss";
import "@styles/header.scss";
import "@styles/content.scss";
import "@styles/media.scss";
import { ContentParams } from "@components/params";

export default class App extends React.Component{

	constructor( props ){
		super( props );

		this.state = {
			index: 0,
			left: { ...ContentParams.left },
			right: [ ...ContentParams.right ],
		};

	};


	//changeColor(){
	//	this.state.index === 2 ? {key.title}color: "red": ""
	//}
	render(){

		let left = this.state.left.list.map( ( key ) =>{
			return(
				<p key={ key.title } className={"content-left-item"}>
					<span className={"content-left-item-title" + " " + this.state.right[ this.state.index ].textStyle } >{key.title}</span>
					<span className={"content-left-item-text" + " " + this.state.right[ this.state.index ].textStyle }>{key.text}</span>
				</p>
			)
		});
		let right = this.state.right[ this.state.index ].list.map( ( key ) =>{
			console.log(this.state.right[ this.state.index ].list[2].text );
			//if(this.state.right[ this.state.index ].list[2].text){
			//	this.state.right[ this.state.index ].list[2].text.current.style.padding = "12px 12px 0px 0px";
			//}
			return(
				<p key={ key.title } className={"content-right-item" }>
					<span className={"content-right-item-title" + " " + this.state.right[ this.state.index ].textStyle }>{key.title}</span>
					<span className={
						"content-right-item-text"
						+ " " + this.state.right[ this.state.index ].textStyle
						+ " " + this.state.right[ this.state.index ].textPadding
					}>{key.text}</span>
					<span  className={"content-right-item-index"}>{key.sum}</span>
				</p>
			)
		});

		return(
			<section className={"wrapper-background"} style={{ background: this.state.right[ this.state.index ].background }}>
				{
					this.state.right.map(( value, key ) => {
						return <div className={"wrapper-slide" + (this.state.index === key ? " wrapper-slide-selected" : "") } style={{ background: value.background }} key={ "bg:" + key }></div>
					})
				}
				<div className={"wrapper" +  (this.state.index === 2 ?  " color-black": "") }>
					<header className={"header" }>
						<div className={"header-row"}>
							<p className={"header-row-logo" + " " + this.state.right[ this.state.index ].textStyle }>LEADS</p>
							<a  className={"header-row-btn" + " " + this.state.right[ this.state.index ].textStyle } href={"https://webmaster.leads.su/register?"}>Регистрация</a>
						</div>

						<div className={"header-dots"}>
							{
								this.state.right.map(( value, key ) => {
									return <p
										className={"header-dots-item" + (key === this.state.index ? " header-dots-active" : "") }
										key={ "dots:" + key }
										onClick={() => { this.setState({ index: key }); }}
									></p>
								})
							}
						</div>
					</header>

					<div className={"content"}>

						<div className={"content-left"}>
							<span className={"content-left-title" + " " + this.state.right[ this.state.index ].textStyle }>
								Переходи на финансы с LEADS.SU
							</span>
							{ left }
						</div>

						<div className={"content-right"}>
							{ right }
							<div className={"content-right-btn-wrap"}>
								<a  className={"content-right-btn" + " " + this.state.right[ this.state.index ].textStyle } href={"https://webmaster.leads.su/register?"}>Подключить</a>
							</div>
						</div>
						<div className={ "svg-bg" } style={{ bottom: this.state.right[ this.state.index ].svg.bottom }}>
							<svg
								style={ this.state.right[ this.state.index ].svg.style }
								width={ this.state.right[ this.state.index ].svg.width }
								height={ this.state.right[ this.state.index ].svg.height }
								viewBox={ this.state.right[ this.state.index ].svg.view }
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g opacity={ this.state.right[ this.state.index ].svg.opacity }>
									{
										this.state.right[ this.state.index ].svg.path.map(( path, key ) => {
											return <path d={ path } fill={ this.state.right[ this.state.index ].svg.defs.length ? ("url(#paint" + key + "_linear)") : ("white") } key={ "svg:" + this.state.index + ":" + key }></path>
										})
									}
								</g>
								<defs>
									{
										this.state.right[ this.state.index ].svg.defs.map(( value, key ) => {
											return (
												<linearGradient
													id={ "paint" + key + "_linear" }
													x1={ value.x1 } y1={ value.y1 }
													x2={ value.x2 } y2={ value.y2 }
													gradientUnits="userSpaceOnUse"
													key={ "defs:" + this.state.index + ":" + key }
												>
													<stop stopColor="white"></stop>
													<stop offset="1" stopColor="white" stopOpacity="0.61"></stop>
												</linearGradient>)
										})
									}
								</defs>
							</svg>
						</div>
					</div>
				</div>

			</section>
		)
	}
}