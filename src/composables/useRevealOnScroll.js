import { onMounted } from 'vue'

export function useRevealOnScroll(selector = '.reveal-on-scroll') {
  onMounted(() => {
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target) // tylko raz
        }
      })
    }, {
      threshold: 0.2
    })

    elements.forEach(el => observer.observe(el))
  })
}
