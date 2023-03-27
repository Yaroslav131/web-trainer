import "./TaskBlock.css"
import '../../../../reset.css'

export default function TextAnimation(text: string) {

    let content = document.querySelector('#content')

    if (content !== null) {
        content.innerHTML = '';
    }

    for (let index = 0; index < text.length; index++) {

        let letter = document.createElement('span')

        letter.textContent = text[index];

        if (letter.textContent.match(/\s/)) {
            letter.style.margin = 'auto 5px'
        }
        letter.style.animationDelay = index / 15 + 's'

        content?.appendChild(letter)
    }
}