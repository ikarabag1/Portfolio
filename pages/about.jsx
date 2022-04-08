//import SSR caching image tag
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={[styles.bgBlack, 'center'].join('')}>
            <h1 className='{styles.coolText'>About Me</h1>
            <p>I am a super cool software engineeer now, I make neat stuff with the codes</p>
            {/*loading an image locally */}
            {/* an img tag would have also worked -- just SSR caching */}
            <Image
            src="/vercel.svg"
            alt="the vercel logo bc <3 vercel"
            width={500}
            height={500}
            />
            {/* loading an image from another hosting domain */}
            <Image
            src="https://placekitten.com/300/300"
            alt="a picture of a magnificent creature"
            width={300}
            height={300}
            />
        </div>
    )
}

