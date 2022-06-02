import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Resume from "./Components/Resume";
import { useState } from "react";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
	const [page, setPage] = useState("Home");
	return (
		<LinearGradient
			// Background Linear Gradient
			colors={["#3796FF", "transparent"]}
			style={styles.container}
		>
			<SafeAreaView style={styles.container}>
				<Header setPage={setPage} />
				<ScrollView>
					{page === "Home" && <Home />}
					{page === "About" && <About />}
					{page === "Work" && <Work />}
					{page === "Resume" && <Resume />}
					{page === "Contact" && <Contact />}
				</ScrollView>

				<Footer />
				<StatusBar style="auto" />
			</SafeAreaView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
