export default function header() {
    const header = document.createElement('header')

    header.classList.add('w-full', 'bg-red-400')
    header.style.height = '400px'
    return header
}