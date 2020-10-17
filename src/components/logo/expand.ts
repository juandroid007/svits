import { cubicOut } from 'svelte/easing'

export function expand(node: any, params: any) {
  const {
    delay = 0,
    duration = 400,
    easing = cubicOut
  } = params

  const w = parseFloat(getComputedStyle(node).strokeWidth)

  return {
    delay,
    duration,
    easing,
    css: (t: any) => `opacity: ${t}; stroke-width: ${t * w};`
  }
}
