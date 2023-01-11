import { default as params } from '@params';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const containers = params.site.hb.heading_sign?.containers
        if (!containers) {
            return
        }

        document.querySelectorAll(`${Object.keys(containers).join(', ')} > h2, h3, h4, h5, h6`).forEach((heading) => {
            const id = heading.getAttribute('id')
            if (!id) {
                return
            }

            const anchor = document.createElement('a')
            anchor.className = 'anchor ms-1'
            anchor.href = `#${id}`
            heading.appendChild(anchor)
        })
    })
})()
