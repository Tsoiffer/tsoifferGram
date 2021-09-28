import React from "react";
import Post from "./component-post";
import firebase from "firebase/app";
import "firebase/database";
import Loading from "./component-loading";

class FeedContent extends React.Component {
	state = {
		data: [],
		loading: null,
	};
	componentDidMount() {
		this.setState({
			data: [],
			loading: true,
		});
		const db = firebase.database();
		const dbRef = db.ref("pictures");
		dbRef.on("child_added", (snapshot) => {
			this.setState({
				data: this.state.data.concat(snapshot.val()),
				loading: false,
			});
			console.log(this.state.data);
		});
	}

	render() {
		return (
			<React.Fragment>
				{this.state.loading && <Loading />}
				<br />
				<br />
				<br />
				<br />
				{this.state.data
					.map((item, i) => {
						if (
							i != 39 &&
							i != 40 &&
							i != 41 &&
							i != 42 &&
							i != 43 &&
							i != 44 &&
							i != 45 &&
							i != 46 &&
							i != 47 &&
							i != 48 &&
							i != 51 &&
							i != 52 &&
							i != 53 &&
							i != 55
						) {
							return (
								<Post
									key={i}
									txt={item.txt}
									nombre={item.nombre}
									avatar={item.avatar}
									pic={item.pic}
								/>
							);
						}
					})
					.reverse()}
			</React.Fragment>
		);
	}
}

export default FeedContent;
