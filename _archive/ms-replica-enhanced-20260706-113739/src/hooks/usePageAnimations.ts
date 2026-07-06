import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function usePageAnimations() {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.utils.toArray("[data-anim='fade-up']").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 88%" },
          y: 40, opacity: 0, duration: 0.6, ease: "power2.out", clearProps: "all"
        })
      })
      gsap.utils.toArray("[data-anim='stagger']").forEach((parent: any) => {
        const children = parent.children
        gsap.from(children, {
          scrollTrigger: { trigger: parent, start: "top 88%" },
          y: 30, opacity: 0, duration: 0.4, stagger: 0.06, ease: "power2.out", clearProps: "all"
        })
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [])
}
