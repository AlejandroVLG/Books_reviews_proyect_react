import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
	border: "#0075FF",
	error: "#bb2929",
	success: "#1ed12d"
}

const Formulary = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;

	${props => props.valid === 'false' && css`
		color: ${colors.error};
	`}
`;

const InputGroup = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colors.border};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valid === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valid === 'false' && css`
		border: 3px solid ${colors.error} !important;
	`}
`;

const ErrorLeyend = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colors.error};
	display: none;

	${props => props.valid === 'true' && css`
		display: none;
	`}

	${props => props.valid === 'false' && css`
		display: block;
	`}
`;

const ValidationIcon = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props => props.valid === 'false' && css`
		opacity: 1;
		color: ${colors.error};
	`}

	${props => props.valid === 'true' && css`
		opacity: 1;
		color: ${colors.success};
	`}
`;

const BoxButtonCentered = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const RegisterButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;

	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const SuccessMsg = styled.p`
	font-size: 14px;
	color: ${colors.success};
`;

const ErrorMsg = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

const bookCard = styled.div`
	position: relative;
	width: 300px;
	height: 350px;
`;

const faceFrontCard = styled.div`
	transform: perspective(600px) rotateY(0deg);
	box-shadow: 0 5px 10px #000;
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	border-radius: 10px;
	overflow: hidden;
	transform: 0.5s ;
`;

const frontImgCard = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const frontH3Card = styled.h3`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 45px;
	line-height: 45px;
	color: #fff;
	background: rgba(0, 0, 0, .4);
	text-align: center;

	&:hover {
		transform: perspective(600px) rotateY(180deg);
	}
`;
const faceBackCard = styled.div`
	transform: perspective(600px) rotateY(0deg);
	background-color: rgb(3, 35, 54);
	padding: 15px;
	color: #f3f3f3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	box-shadow: 0 5px 10px #000;

	&:hover {
		transform: perspective(600px) rotateY(360deg);
	}
`;

const backH3Card = styled.h3`
	font-size: 30px;
	margin-top: 20px;
	letter-spacing: 2px;
`;

const textBackCard = styled.p`
	letter-spacing: 1px;
`;

const linkDivCard = styled.div`
	border-top: solid 1px #f3f3f3;
	height: 50px;
	line-height: 50px;
`;

const linkCard = styled.a`
	color: #f3f3f3;
`;

export {
	Formulary,
	Label,
	InputGroup,
	Input,
	ErrorLeyend,
	ValidationIcon,
	BoxButtonCentered,
	RegisterButton,
	SuccessMsg,
	ErrorMsg,
	bookCard,
	faceFrontCard,
	frontImgCard,
	frontH3Card,
	faceBackCard,
	backH3Card,
	textBackCard,
	linkDivCard,
	linkCard
};