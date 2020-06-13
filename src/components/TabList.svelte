<div class="tab-list">
	<slot></slot>
</div>

<style lang="scss">
	@import "../styles/main.scss";
	.tab-list {
		@include media(s1) {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: $h1;
		}
	}
</style>