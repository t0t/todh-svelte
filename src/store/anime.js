import { spring } from "svelte/motion";
import { cubicOut } from "svelte/easing";

export const tweenedStore = spring(0, {
    stiffness: .15,
    damping: .8,
    precision: .001
});