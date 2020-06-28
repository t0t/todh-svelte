<script>
	import { extent } from 'd3-array';
	import { scaleLinear } from 'd3-scale';
	import { line, curveBasis } from 'd3-shape';
	
	import { move } from '../store/move.js';

	// the props
	export let data;
    export let show;
	
	// the scales
	const xScale = scaleLinear()
		.domain(extent(data.map(d => d.skill)))
		.range([0, 100]);
	
	const yScale = scaleLinear()
		.domain(extent(data.map(d => d.percentage)))
		.range([0, 100]);
	
	// the path generator
	const pathLine = line()
		.x(d => xScale(d.skill))
		.y(d => yScale(d.percentage))
		.curve(curveBasis);
</script>

<svg viewBox="0 0 100 100">
	{#if (show)}
		<path transition:move
            d={pathLine(data)} />
	{/if}
</svg>

<style>
	path {
		stroke: white;
		stroke-width: 2;
		fill: none;
	}
</style>