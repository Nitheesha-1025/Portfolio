import { useEffect, useState } from "react"

const ids = ["top", "about", "projects", "skills", "achievements", "contact"]

export function useActiveSection(sectionIds: string[] = ids) {
  const [active, setActive] = useState(sectionIds[0] ?? "top")

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-12% 0px -78% 0px", threshold: [0, 0.15, 0.4] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
