import React, { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
	Pressable,
	Linking,
	ScrollView,
	Platform
} from "react-native";

function Contact() {

	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const sendContactForm = () => {
		let mailto = `mailto:beshehiwot@gmail.com`;
		mailto += `?subject=${subject}`;
		mailto += `&body=${message}`;
		Linking.openURL(mailto);
	};

	return (
		<ScrollView>
			<SafeAreaView>
				<View style={styles.container}>
					<View style={styles.title}>
						<Text style={styles.titleText}>Let's chat!</Text>
						<Text>{`
							`}</Text>
					
					</View>
					<View style={styles.inputWrap}>
						<View style={styles.input}>
							<Text style={styles.inputTitleText}>
								Name* <Text>{`    `}</Text>
							</Text>

							<TextInput
								style={styles.inputText}
								onChangeText={(text) => setName(text)}
								value={name}
								placeholder="Name"
							/>
						</View>
						<View style={styles.input}>
							<Text style={styles.inputTitleText}>
								Subject*<Text>{`   `}</Text>
							</Text>
							<TextInput
								style={styles.inputText}
								onChangeText={(text) => setSubject(text)}
								value={subject}
								placeholder="Subject"
							/>
						</View>
						<View style={styles.input}>
							<Text style={styles.inputTitleText}>
								Message<Text>{`  `}</Text>
							</Text>
							<TextInput
								style={styles.inputTextMessage}
								onChangeText={(text) => setMessage(text)}
								value={message}
								placeholder="Insert your Message!"
								numberOfLines={10}
								multiline={true}
							/>
						</View>
					</View>
					<Pressable onPress={sendContactForm}>
						<Text style={styles.btn}>Send</Text>
					</Pressable>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		marginLeft: Platform.OS == "web" ? "20%" : "10%",
		marginRight: Platform.OS == "web" ? "20%" : "10%",
	},
	title: {
		alignSelf: "center",
		alignItems: "flex-start",
	},
	titleText: {
		fontSize: Platform.OS == "web" ? 40 : 30,
		fontWeight: "600",
		color: "#FFFFFF",
	},
	email: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignSelf: "flex-start",
		alignItems: "center",
	},
	inputWrap: {
		flexDirection: "column",
		alignSelf: "flex-start",
		alignItems: "flex-start",
		marginBottom: "2%",
		backgroundColor: "#ffffff",
	},
	input: {
		flexDirection: "row",
		alignSelf: "center",
		marginTop: "1%",
	},
	inputTitleText: {
		fontSize: 20,
		color: "#575353",
		fontWeight: "400",
	},
	inputText: {
		fontSize: 12,
		borderWidth: Platform.OS == "web" ? 1 : 2,
		borderRadius: 5,
		borderColor: "#aba6a6",
		color: "#000000",
		height: Platform.OS == "web" ? 40 : 40,
		width: Platform.OS == "web" ? 500 : 300,
		marginRight: "3%",
	},
	inputTextMessage: {
		fontSize: 12,
		borderColor: "#aba6a6",
		color: "#000000",
		borderWidth: 1,
		height: Platform.OS == "web" ? 150 : 200,
		width: Platform.OS == "web" ? 500 : 300,
		borderRadius: 5,
		marginRight: "3%",
		marginBottom: "1%",
		
	},
	btn: {
		borderWidth: Platform.OS == "web" ? 1 : 2,
		borderRadius: 5,
		borderColor: "#575353",
		backgroundColor: "#C99663",
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "300",
		padding: 8,
		width: 70,
		height: 40,
		
		
	},
});
export default Contact;
