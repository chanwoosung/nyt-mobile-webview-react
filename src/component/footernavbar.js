import css from '../styles/footernavbar.module.css'

export default function FooterNavBar() {
    return(
        <div className={css.board}>
            <div>
                <img className={css.button} src="img/btn_home_select.png" alt='homebutton'/>
            </div>
            <div>
                <img className={css.button} src="img/btn_Sheet.png" alt='scrapbutton'/>
            </div>
        </div>
    )
}