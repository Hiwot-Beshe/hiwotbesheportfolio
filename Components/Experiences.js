import {
	StyleSheet,
	View,
	Text,
	useWindowDimensions,
	ScrollView,
	Platform,
} from "react-native";


 function Experiences() {
		const { width } = useWindowDimensions();
		const widthBreakpoint = 700;

		return (
			<ScrollView>
				<View style={styles.container}>
				
						<View style={styles.titleWrap}>
							<Text style={styles.title}>Experiences</Text>
						</View>
						<View style={styles.textWrap}>
							<Text style={styles.expOneText}>
								Alpha Works/ ReactNative Apprentice
							</Text>
							<Text style={styles.expOneTex}>
								{""}2021- Present, Oakland, CA.
							</Text>

							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									Collaboration with a cross-functional team in order to deliver
									projects on time, streamline operations, and keep up with
									developments. Developing a new website from start to finish,
									using version control systems such as GIT and GitHub.
								</Text>
							</Text>
							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									Responsive Web Applications (using HTML5, CSS,
									JavaScript,NodeJS and React, and React Native.
								</Text>
							</Text>

							<Text style={styles.expOneText}>
								Alpha Works/ Project Manager Apprentice
							</Text>
							<Text style={styles.expOneTex}>
								Feb 2021- Sep 2021, Oakland, CA.
							</Text>

							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									As part of my role, I oversee the day-to-day activities of
									multiple projects teams, optimizing and improving processes
									and blind spots in order to better support the projects.
								</Text>
							</Text>
							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									Identify and resolve any issues that may affect the life cycle
									of a project by working with various teams to make timely and
									meaningful decisions.
								</Text>
							</Text>
							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									Conduct project reviews and create detailed reports for
									executive staff and collaborate with internal teams to
									coordinate projects and resources.
								</Text>
							</Text>

							<Text style={styles.expOneText}>
								Ethiopia Community and Cultural Center / Office Assistant
								(Volunteer)
							</Text>
							<Text style={styles.expOneTex}>
								Feb 2019 - Feb 2020, Oakland, CA
							</Text>

							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									ECCC is a community-based organization that empowers
									Ethiopians and Ethiopian-Americans through education,
									advocacy, resources, and community-based activities.
								</Text>
							</Text>
							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									Provided information and support for up to 35 people daily
									including members, employees, and funders.
								</Text>
							</Text>
							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									Developed youth programs specifically for Ethiopian immigrants
									to create awareness and minimize cultural differences.
								</Text>
							</Text>
						</View>
					</View>
			</ScrollView>
		);
 }
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		margin: "8%",
		backgroundColor: "#DFDFE8",
	},

	textWrap: {
		justifyContent: "flex-start",
		marginLeft: Platform.OS == "web" ? "8%" : null,
		marginRight: Platform.OS == "web" ? "10%" : null,
	},

	titleWrap: {
		flexDirection: "row",
		padding: 10,
		margin: "2%",
	},
	title: {
		color: "#C99663",
		fontWeight: "700",
		fontSize: 40,
		padding: 5,
	},
	expOne: {
		flexDirection: "column",
		margin: 5,
		width: "80%",
	},
	expTwo: {
		flexDirection: "column",
		width: "80%",
	},
	expOneText: {
		color: "#C99663",
		fontWeight: "600",
		fontSize: 20,
		padding: 5,
	},
	expOneTex: {
		color: "#1a1a1a",
		fontWeight: "bold",
		fontSize: 16,
		padding: 5,
		margin: 5,
	},
	item: {
		padding: 10,
		fontSize: 15,
		color: "#1a1a1a",
	},
	bullet: {
		color: "#C99663",
		fontWeight: "600",
		alignItems: "center",
		fontSize: 30,
		margin: 10,
		paddingHorizontal: 20,
	},
	bulletText: {
		color: "#1a1a1a",
		width: "70%",
		margin: 50,
		fontSize: 15,
		alignItems: "center",
		textAlign: "center",
	},
});
export default Experiences;