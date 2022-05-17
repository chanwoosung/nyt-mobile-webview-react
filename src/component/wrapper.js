import css from '../styles/wrapper.module.css'
import FooterNavBar from './footernavbar'

export default function Wrapper() {
    return (
        <div className={css.wrapper}>
            <FooterNavBar />
        </div>
    )
}