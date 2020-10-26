import { handleSubmit } from './js/formHandler'
import { checkURL } from './js/checkurl'

// Important!  Resets go first otherwise they will override other styles
import './styles/resets.scss'
import './styles/header.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'

// Images
import './img/mc_logo2.png'

// Adding to the "Client" library (per the webpack*.js file).
export {
    handleSubmit,
    checkURL
}
