
<script>
	import { hslide } from './hslide.js';

	let slides = [
		{ content: '+0+1234', bg: 'img/cover2.jpg' },
		{ content: '', bg: 'img/esquema-sintesis3.svg' },
		{ content: 'Creando desde la Creación', bg: 'img/img3.jpg' }
	]
	
	let cur = 0;
	
	function changeSlide(slide) {
		cur = slide;
	}
	
	const clamp = (number, min, max) => Math.min(Math.max(number, min), max);
	const transition_args = {
		duration: 200,
	}
	
	function prev(e) {
		cur = clamp( --cur, 0, slides.length-1 )
	}
	
	function next(e) {
		cur = clamp( ++cur, 0, slides.length-1 )
	}
	
  const ARROW_LEFT = 37;
	const ARROW_RIGHT = 39;
	function handleShortcut(e) {
        if (e.keyCode === ARROW_LEFT ) {
						prev();
        }
		    if (e.keyCode === ARROW_RIGHT ) {
            next();
        }
    }

</script>

<svelte:window on:keyup={handleShortcut} />

<div class="extra-outer-wrapper">
	<div class="outer-wrapper">
		<div class="inner-wrapper">
			{#each slides as slide, id}
				{#if id === cur}
				<div
					style="background:url({slide.bg});background-repeat: no-repeat;background-position: center;background-size: cover;"
					class="slide"
					in:hslide={transition_args}
					out:hslide={transition_args}
				>
					<h1 class="caption">{slide.content}</h1>		
				</div>
				{/if}
			{/each}
			<div class="controls">
				<button on:click="{()=>prev()}">
					&lt;
				</button>
				<button on:click="{()=>next()}">
					&gt;
				</button>
			</div>
		</div>
		<!-- <div class="dots">
			{#each slides as slide, i}
				<button on:click={()=>changeSlide(i)} class="dot" class:selected={cur == i}>{i+1}</button>
			{/each}
		</div> -->
	</div>
</div>

<style lang="scss">
    @import "../../styles/main.scss";
	
	/* .caption {} */
	button {
		background: transparent;
		color: #FFF;
		border-color: transparent;
		width: 3.2rem;
		height: 3.2rem;
	}
	
	button:hover,
	button:focus{
		background: rgba(255,255,255,0.5);
	}
	
	.dots {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0;
		margin-bottom: $h1;
	}
	
	.dot {
		width: 5px;
		height: 5px;
		background: #fff;
		border-radius: 50%;
		font-size: 0;
		margin: $h0;
		opacity: 0.3;
	}
	
	.dot.selected {
		opacity: 1;
	}

	.extra-outer-wrapper {
		width: 100%;
		/* padding: 30px; */
		margin: 0 auto;
	}

	.outer-wrapper {
		width: 100%;
		padding: 0 0 50.25%;
		position: relative;
	}
	
	.inner-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		position: absolute;
		/* padding: $h2; */
	}

	.controls button:first-child {
		position: absolute;
		left: 0;
		top: calc(50% - 1.2rem);
	}
	
	.controls button:last-child {
		position: absolute;
		right: 0;
		top: calc(50% - 1.2rem);
	}
	
	.slide {
		flex: 1 0 auto;
		width: 100%;
		height: 100%;
	   	align-items: center;
		justify-content: center;
		display: flex;
		/* color: $white; */
		/* border-radius: 50%; */
		/* mix-blend-mode: luminosity; */
	}
	
	.controls {
		text-align: center;
		width: 100%;
		display: block;
	}
</style>