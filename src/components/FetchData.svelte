<script>
    import {onMount} from "svelte";
	const demo = [];
	
	onMount(async () => {
		const apiResponse = await fetch("/test.json")
		const SwPeopleJSON = await apiResponse.json()
		
		demo = SwPeopleJSON.results
		return () => console.log(demo)
	})
	
    // import Loading from "./Loading.svelte";
    // const fetchImage = (async () => {
    //     const url = "/test.json";
    //     const response = await fetch(url);
    //     return await response.json();
    // })();
    export const doThing = () => console.log(demo);
    // export const doThing = () => console.log("hola from fetch component");

</script>
{demo[0].title}
<slot></slot>