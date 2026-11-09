import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion, type Transition } from "framer-motion"

const ease: Transition["ease"] = [0.22, 1, 0.36, 1]

type Direction = "left" | "right" | "up" | "mask-left" | "mask-right"

function hiddenFor(direction: Direction) {
  if (direction === "left") return { opacity: 0, x: -48, y: 0 }
  if (direction === "right") return { opacity: 0, x: 48, y: 0 }
  if (direction === "mask-left") return { opacity: 1, x: 0, y: 0, clipPath: "inset(0 100% 0 0)" }
  if (direction === "mask-right") return { opacity: 1, x: 0, y: 0, clipPath: "inset(0 0 0 100%)" }
  return { opacity: 0, x: 0, y: 32 }
}

const shown = { opacity: 1, x: 0, y: 0, clipPath: "inset(0 0% 0 0)" }

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reduce) return
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduce])

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hiddenFor(direction)}
      animate={visible ? shown : hiddenFor(direction)}
      transition={{ duration: direction.startsWith("mask") ? 1.05 : 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
