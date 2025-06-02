import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setRecentOrder } from '../../redux/order/orderSlice';
export default function Home() {
	const myCurrentUser = useSelector((state) => state.authentication.currentuser)
	const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated)
	const dispatch = useDispatch()
	function openForm() {
		document.getElementById("myForm").style.display = "block";
		document.getElementById("previous").style.opacity = "0.1";
	}

	function closeForm() {
		document.getElementById("myForm").style.display = "none";
		document.getElementById("previous").style.opacity = "1";
	}

	const buntop = {
		height: "70px",
		width: "80%",
		background: "#c15711",
		borderRadius: "50% 50% 0 0",
		marginTop: "8%",
		marginBottom: "1%",
		marginLeft: "10%",
	}
	const bunbottom = {
		height: "40px",
		width: "80%",
		background: "#c15711",
		borderRadius: "0% 0% 50% 50%",
		marginTop: "1%",
		marginLeft: "10%",
		marginBottom: "1%",
	}
	const burger = {
		height: "400px",
		width: "450px",
		margin: "auto",
		overflow: "auto",
	}
	const [color, setColor] = useState("#c7c6c6")
	const [textcolor, setTextColor] = useState("#888")
	const [showGreeting, setShowGreeting] = useState(false);
	const [showBacon, setShowBacon] = useState(false);
	const [showCheese, setShowCheese] = useState(false);
	const [showMeat, setShowMeat] = useState(false);
	let [price, setPrice] = useState(2);
	const [ingredients, setIngredients] = useState([]);
	let [ingrdCount, setIngrdCount] = useState(0);
	let [saladCount, setSaladCount] = useState(0);
	let [baconCount, setBaconCount] = useState(0);
	let [cheeseCount, setCheeseCount] = useState(0);
	let [meatCount, setMeatCount] = useState(0);

	function orderTrack() {
		const newOrder = {
			email: myCurrentUser.email,
			saladCount,
			baconCount,
			cheeseCount,
			meatCount,
			price,
		};
		dispatch(setRecentOrder(newOrder));
	}


	function handlePrice(p) {
		setPrice(prevPrice => prevPrice + p);
	}

	function handleIngrdCount(c) {
		setIngrdCount(prevIngrdCount => {
			const newCount = prevIngrdCount + c;
			return newCount;
		});
	}
	function handleDecreaseCount(c) {
		setIngrdCount(prevIngrdCount => {
			const newCount = prevIngrdCount - c;
			return newCount;
		});
	}

	function handleSaladCount(s) {
		setSaladCount(prevSaladCount => {
			const newCount = prevSaladCount + s;
			return newCount;
		});
	}
	function handleBaconCount(b) {
		setBaconCount(prevBaconCount => {
			const newCount = prevBaconCount + b;
			return newCount;
		});
	}
	function handleCheeseCount(ch) {
		setCheeseCount(prevCheeseCount => {
			const newCount = prevCheeseCount + ch;
			return newCount;
		});
	}
	function handleMeatCount(m) {
		setMeatCount(prevMeatCount => {
			const newCount = prevMeatCount + m;
			return newCount;
		});
	}

	function addElement(element) {
		const order = ['Salad', 'Bacon', 'Cheese', 'Meat'];
		setIngredients(prevIngredients => {
			const updatedIngredients = [...prevIngredients, element];
			updatedIngredients.sort((a, b) => order.indexOf(a) - order.indexOf(b));
			setIngredients(updatedIngredients);
			return updatedIngredients;
		});
	}

	function removeElement(element, p, c) {
		setIngredients(prevIngredients => {
			const index = prevIngredients.lastIndexOf(element);
			if (index !== -1) {
				setPrice(prevPrice => prevPrice - p);
				handleDecreaseCount(c);
				prevIngredients.splice(index, 1);
				return prevIngredients;
			}
			return prevIngredients;
		});
	}

	function addDiv() {

		setShowGreeting(true);
	}

	function lessSaladDiv() {

		setSaladCount(prevSaladCount => {
			const newCount = prevSaladCount - 1;
			if (newCount <= 0) {
				setShowGreeting(false);

			}
			return Math.max(0, newCount);
		});
	}
	function baconDiv() {
		setShowBacon(true);
	}
	function lessBaconDiv() {
		setBaconCount(prevBaconCount => {
			const newCount = prevBaconCount - 1;
			if (newCount <= 0) {
				setShowBacon(false);
			}
			return Math.max(0, newCount);
		});
	}
	function cheeseDiv() {
		setShowCheese(true);
	}
	function lessCheeseDiv() {
		setCheeseCount(prevCheeseCount => {
			const newCount = prevCheeseCount - 1;
			if (newCount <= 0) {
				setShowCheese(false);
			}
			return Math.max(0, newCount);
		});
	}
	function meatDiv() {
		setShowMeat(true);
	}
	function lessMeatDiv() {
		setMeatCount(prevMeatCount => {
			const newCount = prevMeatCount - 1;
			if (newCount <= 0) {
				setShowMeat(false);
			}
			return Math.max(0, newCount);
		});
	}



	const parentdiv = {
		width: "100%",
		height: "350px",
		backgroundColor: "#cf8f2e",
		display: "flex",
		flexFlow: "column",
		alignItems: "center",
		margin: "auto",
		padding: "10px 0",
	}
	const container = {
		display: "grid",
		columnGap: "20px",
		rowGap: "10px",
		gridTemplateColumns: "auto",
		backgroundColor: "#cf8f2e",
		padding: "10px",
		margin: "auto",
	}
	const containerdiv = {
		background: "#cf8f2e",
		width: "100%",
		fontSize: "20px",
		fontWeight: "bold",
		textAlign: "left",
	}
	const containerelement = {
		display: "flex",
		justifyContent: "flex-end",
		rowGap: "10px",
	}
	const containerbutton1 = {
		background: "#cf8f2e",
		color: "white",
		fontSize: "30px",
		textAlign: "center",
		display: "block",
		font: "inherit",
		padding: "5px",
		margin: "0 5px",
		width: "80px",
		border: "1px solid #aa6817",
		cursor: "pointer",
		outline: "none",
	}
	const containerbutton2 = {
		background: "#8f5e1e",
		color: "white",
		fontSize: "30px",
		textAlign: "center",
		display: "block",
		font: "inherit",
		padding: "5px",
		margin: "0 5px",
		width: "80px",
		border: "1px solid #aa6817",
		cursor: "pointer",
		outline: "none",
	}
	const totalPrice = {
		textAlign: "center",
	}
	const formContainer = {
		display: "none",
		transform: "translateY(0px)",
		opacity: "1",
		position: "fixed",
		zIndex: "500",
		backgroundColor: "#fff",
		width: "35%",
		border: "1px solid #ccc",
		boxShadow: "1px 1px 1px #000",
		padding: "16px",
		left: "30%",
		top: "30%",
		boxSizing: "border-box",
		transition: "all .3s ease-out",
	}
	const mylist = {
		listStyleType: "disc",
		marginLeft: "30px",
	}
	const continueBtn = {
		color: "#5c9210",
		backgroundColor: "transparent",
		border: "none",
		outline: "none",
		cursor: "pointer",
		font: "inherit",
		padding: "10px",
		margin: "10px",
		fontWeight: "700",
		borderRadius: "3px",

	}

	const cancelBtn = {
		color: "#944317",
		backgroundColor: "transparent",
		border: "none",
		outline: "none",
		cursor: "pointer",
		font: "inherit",
		padding: "10px",
		margin: "10px",
		fontWeight: "700",
		borderRadius: "3px",

	}


	return (
		<div>

			<div style={burger} id="previous">
				<div style={buntop}></div>
				{ingrdCount < 1 && <b><p style={{ textAlign: 'center' }}>Please start adding ingredients!</p></b>
				}
				{ingredients.map((ingredient, index) => {
					switch (ingredient) {
						case "Salad":
							return <div key={index} className="w-[85%] h-[7%] m-1 mx-auto bg-green-600 rounded-[20px]"></div>;
						case "Bacon":
							return <div key={index} className="w-[85%] h-[7%] m-1 mx-auto bg-orange-400 rounded-[20px]"></div>;
						case "Cheese":
							return <div key={index} className="w-[85%] h-[7%] m-1 mx-auto bg-yellow-500 rounded-[20px]"></div>;
						case "Meat":
							return <div key={index} className="w-[85%] h-[7%] m-1 mx-auto bg-red-700 rounded-[20px]"></div>;
						default:
							return null;
					}
				})}

				<div style={bunbottom}></div>
			</div>

			<footer style={parentdiv} id="previous">

				<h2>Current price: <b>${price.toFixed(2)}</b></h2>
				<div style={container}>
					<div style={containerelement}>
						<div style={containerdiv}>Salad</div>
						<button style={containerbutton1} onClick={() => {
							lessSaladDiv(), removeElement("Salad", 0.5, 1);
						}}>Less</button>
						<button style={containerbutton2} onClick={() => { setColor(" #dad735"); setTextColor("#966909"); handlePrice(0.5); addDiv(); handleIngrdCount(1); handleSaladCount(1); addElement("Salad"); }}>More</button>
					</div>
					<div style={containerelement}>
						<div style={containerdiv}>Bacon</div>
						<button style={containerbutton1} onClick={() => { lessBaconDiv(), removeElement("Bacon", 1, 1) }}>Less</button>
						<button style={containerbutton2} onClick={() => { setColor(" #dad735"); setTextColor("#966909"); handlePrice(1); baconDiv(); handleIngrdCount(1); handleBaconCount(1); addElement("Bacon"); }}>More</button>
					</div>
					<div style={containerelement}>
						<div style={containerdiv}>Cheese</div>
						<button style={containerbutton1} onClick={() => { lessCheeseDiv(), removeElement("Cheese", 1, 1) }}>Less</button>
						<button style={containerbutton2} onClick={() => { setColor(" #dad735"); setTextColor("#966909"); handlePrice(1); cheeseDiv(); handleIngrdCount(1); handleCheeseCount(1); addElement("Cheese"); }}>More</button>
					</div>
					<div style={containerelement}>
						<div style={containerdiv}>Meat</div>
						<button style={containerbutton1} onClick={() => { lessMeatDiv(), removeElement("Meat", 2, 1) }}>Less</button>
						<button style={containerbutton2} onClick={() => { setColor(" #dad735"); setTextColor("#966909"); handlePrice(2); meatDiv(); handleIngrdCount(1); handleMeatCount(1); addElement("Meat"); }}>More</button>
					</div>
				</div>


				{isAuthenticated ? (
					<button className="p-5 disabled mt-10" style={{ backgroundColor: color, color: textcolor }}
						onClick={(event) => {
							openForm();
						}}
					>
						ORDER NOW
					</button>
				) : (
					<Link to="/authenticate">
						<button className="p-5 disabled mt-10" style={{ backgroundColor: color, color: textcolor }} >
							SIGN IN TO ORDER!
						</button>
					</Link>
				)
				}
			</footer >


			<form style={formContainer} id="myForm" onSubmit={(e) => e.preventDefault()}>
				<h3><b>Your Order</b></h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul style={mylist}>
					<li><span >salad</span>: {saladCount}</li>
					<li><span >bacon</span>: {baconCount}</li>
					<li><span >cheese</span>: {cheeseCount}</li>
					<li><span >meat</span>: {meatCount}</li>
				</ul>
				<div style={totalPrice}>
					<p><strong>Total Price: $ {price.toFixed(2)}</strong></p>
					<p>Continue to checkout ?</p>
					<button style={cancelBtn}
						onClick={(event) => {
							closeForm();
						}} >CANCEL</button>
					<Link to="/contact">
						<button style={continueBtn}
							onClick={(event) => {
								orderTrack();
							}
							}
						>CONTINUE</button>
					</Link>
				</div>
			</form>


		</div>


	);
}