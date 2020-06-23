<script>
	// import {fade} from 'svelte/transition';
	
	const carouselPhotos = [
		'img/grafico-cero.svg',
		'img/grafico-uno.svg',
		'img/grafico-dos.svg',
		'img/grafico-tres.svg',
		'img/grafico-cuatro.svg'
	];
	
	let index = 0;
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};
</script>

<style lang="scss">
    @import "../styles/main.scss";

	.ImageCarouselContainer {
        background-color: $color_2;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			height: 50vh;
			&:hover {
				cursor: pointer;
			}
			fit-content: cover;
		}
	}
</style>

<div class="ImageCarouselContainer">
	{#each [carouselPhotos[index]] as src (index)}
		<img on:click={next} {src} alt="" />	
	{/each}
</div>