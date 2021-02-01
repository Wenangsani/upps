<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css">
</svelte:head>

<script>
	import { Router, Link, Route } from "svelte-routing";

	import Home from "./pages/Home.svelte";
	import Login from "./pages/Login.svelte";
	import Register from "./pages/Register.svelte";
	import Instructors from "./pages/Instructors.svelte";
	import Explores from "./pages/Explores.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<Route path="/login"><Login /></Route>
	<Route path="/register"><Register /></Route>
	<Route path="/instructors"><Instructors /></Route>
	<Route path="/explores"><Explores /></Route>
	<Route path="/"><Home /></Route>
</Router>